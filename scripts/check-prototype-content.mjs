import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
function files(directory, extension) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path, extension) : path.endsWith(extension) ? [path] : [];
  });
}
function normalize(markup) {
  return markup.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}
const sources = files(join(root, 'PROTOTIPO/EBO_BMS/edificios-inteligentes'), '.html');
let checked = 0;
for (const source of sources) {
  const sourcePath = relative(join(root, 'PROTOTIPO/EBO_BMS'), source);
  const pagePath = sourcePath === 'edificios-inteligentes/index.html'
    ? 'pages/edificios-inteligentes/index.vue'
    : `pages/${sourcePath.replace('/index.html', '.vue')}`;
  assert(existsSync(pagePath), `Missing Nuxt view: ${pagePath}`);
  const original = readFileSync(source, 'utf8').match(/<main>([\s\S]*?)<\/main>/)[1];
  const migrated = normalize(readFileSync(pagePath, 'utf8'));
  for (const block of original.matchAll(/<(p|h1|h2|h3|summary)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
    const text = normalize(block[2]);
    // The source linked to a nonexistent privacy page. The real mailto workflow
    // explains its behavior instead of claiming acceptance or CRM delivery.
    if (!text || text.startsWith('Al enviar acepta nuestro aviso de privacidad')) continue;
    assert(migrated.includes(text), `Content lost in ${pagePath}: ${text}`);
    checked++;
  }
}
const views = [...files(join(root, 'pages'), '.vue'), ...files(join(root, 'components'), '.vue'), ...files(join(root, 'layouts'), '.vue')];
const routes = new Set(files(join(root, 'pages'), '.vue').map((path) => {
  let route = '/' + relative(join(root, 'pages'), path).replace(/\.vue$/, '').replace(/\/index$/, '');
  return route === '/index' ? '/' : route;
}));
for (const view of views) {
  const content = readFileSync(view, 'utf8');
  for (const link of content.matchAll(/(?<!:)\bto="(\/[^"{}]*)"/g)) {
    assert(routes.has(link[1].split('#')[0]), `Missing route in ${view}: ${link[1]}`);
  }
  for (const asset of content.matchAll(/\bsrc="(\/assets\/[^"{}]*)"/g)) {
    assert(existsSync(join(root, 'public', asset[1])), `Missing asset in ${view}: ${asset[1]}`);
  }
}
for (const style of files(join(root, 'scss/buildings'), '.css')) {
  assert(!readFileSync(style, 'utf8').includes('prefers-color-scheme: dark'), `Dark mode in ${style}`);
}
console.log(`Verified ${sources.length} migrated views, ${checked} content blocks, ${routes.size} routes and local asset references.`);
