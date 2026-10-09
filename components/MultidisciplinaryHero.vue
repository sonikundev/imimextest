<template>
  <section class="multidisciplinary" aria-labelledby="multidisciplinary-title">
    <div class="hero-container">
      <header class="hero-heading">
        <span class="eyebrow">IMIMEX · EMPRESA MULTIDISCIPLINARIA</span>
        <h1 id="multidisciplinary-title">Distintas disciplinas.<br /><span>Una sola solución.</span></h1>
        <p>Integramos automatización, software, edificios inteligentes y soluciones energéticas para hacer realidad proyectos complejos.</p>
      </header>

      <div class="disciplines">
        <article v-for="area in areas" :key="area.title" class="discipline" :class="area.color">
          <span class="discipline-icon"><i :class="area.icon" aria-hidden="true" /></span>
          <span class="discipline-number" aria-hidden="true">{{ area.number }}</span>
          <h2>{{ area.title }}</h2>
          <p>{{ area.description }}</p>
          <a v-if="area.external" :href="area.to" target="_blank" rel="noopener noreferrer">{{ area.link }} <span aria-hidden="true">↗</span></a>
          <NuxtLink v-else :to="area.to">{{ area.link }} <span aria-hidden="true">→</span></NuxtLink>
        </article>
      </div>

      <div class="strength">
        <div class="strength-heading">
          <span class="eyebrow">FORTALEZA IMIMEX</span>
          <h2>Soluciones multidisciplinarias<br />para proyectos complejos.</h2>
        </div>
        <ul class="benefits">
          <li v-for="benefit in benefits" :key="benefit.title">
            <i :class="benefit.icon" aria-hidden="true" />
            <span>{{ benefit.title }}</span>
          </li>
        </ul>
      </div>

      <div class="hero-bottom">
        <p>Industria <span>·</span> Energía <span>·</span> Edificios <span>·</span> Infraestructura <span>·</span> Procesos empresariales</p>
        <NuxtLink to="/contact" class="contact-action">Hablemos de su proyecto <i class="pi pi-arrow-right" aria-hidden="true" /></NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const areas = [
  {
    number: '01', color: 'blue', icon: 'pi pi-cog',
    title: 'Automatización y control industrial',
    description: 'Supervisión, integración de equipos y optimización operativa para entornos industriales.',
    to: '/edificios-inteligentes/sectores/industria', link: 'Explorar soluciones industriales',
  },
  {
    number: '02', color: 'teal', icon: 'pi pi-desktop',
    title: 'Software y digitalización de procesos',
    description: 'Desarrollo e integración de soluciones digitales para automatizar flujos de trabajo y mejorar la productividad.',
    to: '/consultancy', link: 'Conocer nuestros servicios de software',
  },
  {
    number: '03', color: 'blue', icon: 'pi pi-building',
    title: 'Edificios inteligentes e infraestructura',
    description: 'Tecnologías para automatizar, monitorear y optimizar energía, seguridad y activos.',
    to: '/edificios-inteligentes', link: 'Descubrir edificios inteligentes',
  },
  {
    number: '04', color: 'purple', icon: 'pi pi-cloud',
    title: 'SKTERMINAL: control volumétrico y cumplimiento',
    description: 'Plataforma especializada para gestión, monitoreo y cumplimiento regulatorio en operaciones energéticas.',
    to: 'https://www.skterminal.com.mx', external: true, link: 'Conocer SKTERMINAL',
  },
];
const benefits = [
  { title: 'Menos proveedores', icon: 'pi pi-users' },
  { title: 'Mejor coordinación', icon: 'pi pi-cog' },
  { title: 'Mayor compatibilidad', icon: 'pi pi-box' },
  { title: 'Ejecución integral', icon: 'pi pi-chart-line' },
];
</script>

<style scoped>
.multidisciplinary {
  padding: clamp(2.5rem, 5vw, 5rem) clamp(1rem, 3vw, 3rem) 2rem;
  background: radial-gradient(ellipse at 95% 15%, #dff3f0 0, transparent 40%), radial-gradient(ellipse at 0 60%, #e2effb 0, transparent 45%), #f7fafc;
  color: #3a4562;
}
.hero-container { max-width: 76rem; margin: auto; }
.hero-heading { text-align: center; max-width: 52rem; margin: 0 auto 2.5rem; }
.eyebrow { font-size: .8rem; font-weight: 600; letter-spacing: .13em; color: #055c9f; }
h1 { font-size: clamp(2.4rem, 4.5vw, 4.5rem); line-height: 1.08; letter-spacing: -.04em; color: #1d2647; margin: 1rem 0 1.25rem; }
h1 span { color: #055c9f; }
.hero-heading p { line-height: 1.65; font-size: 1.15rem; max-width: 42rem; margin: auto; }
.disciplines { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
.discipline { --accent: #055c9f; position: relative; display: flex; flex-direction: column; padding: 1.75rem 1.4rem; background: #fff; border: 1px solid #dbe5ef; border-top: 3px solid var(--accent); border-radius: 1rem; box-shadow: 0 8px 24px #1d264706; }
.teal { --accent: #0e7c76; }
.purple { --accent: #53429b; }
.discipline-icon { width: 3.5rem; height: 3.5rem; display: grid; place-items: center; background: color-mix(in srgb, var(--accent) 9%, white); color: var(--accent); border-radius: .9rem; font-size: 1.5rem; }
.discipline-number { position: absolute; top: 2rem; right: 1.5rem; color: #66758a; font-size: .75rem; letter-spacing: .12em; }
.discipline h2 { color: #1d2647; font-size: 1.3rem; line-height: 1.25; margin: 1.5rem 0 .75rem; }
.discipline p { line-height: 1.6; margin: 0 0 1.5rem; }
.discipline a { color: var(--accent); margin-top: auto; font-size: .9rem; text-decoration: none; line-height: 1.5; }
.discipline a:hover { text-decoration: underline; }
.strength { display: grid; grid-template-columns: 1fr 1.4fr; gap: 2rem; align-items: center; margin-top: 1.5rem; padding: 2rem; border: 1px solid #cbdce9; background: #fff; border-radius: 1rem; }
.strength h2 { font-size: clamp(1.4rem, 2vw, 1.8rem); line-height: 1.25; color: #1d2647; margin: .75rem 0 0; }
.benefits { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
.benefits li { display: flex; flex-direction: column; align-items: flex-start; gap: .9rem; font-size: .95rem; line-height: 1.35; color: #1d2647; }
.benefits i { font-size: 1.5rem; color: #055c9f; }
.hero-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; margin-top: 1.75rem; }
.hero-bottom p { font-size: .8rem; line-height: 1.7; color: #596986; }
.hero-bottom p span { margin: 0 .3rem; color: #0e7c76; }
.contact-action { display: inline-flex; gap: 1rem; align-items: center; padding: .85rem 1.25rem; background: #055c9f; color: #fff; border-radius: 999px; text-decoration: none; font-size: .9rem; }
.contact-action:hover { background: #1d2647; }
a:focus-visible { outline: 3px solid #055c9f; outline-offset: 4px; }
@media (max-width: 64rem) { .disciplines { grid-template-columns: repeat(2, minmax(0, 1fr)); } .strength { grid-template-columns: 1fr; } }
@media (max-width: 36rem) { .disciplines { grid-template-columns: 1fr; } .hero-heading { text-align: left; } .strength { padding: 1.5rem; } .benefits { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; } .hero-bottom { align-items: flex-start; flex-direction: column; } }
</style>
