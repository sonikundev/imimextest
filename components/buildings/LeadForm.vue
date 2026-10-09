<template>
  <form id="lead-form" ref="formRoot" @submit.prevent="prepareEmail">
    <slot />
    <div class="form-foot">
      <button class="btn btn-primary" type="submit">Preparar solicitud por correo</button>
      <p>Se abrirá su aplicación de correo con los datos de su solicitud. Revise el mensaje y envíelo a contacto@imimex.com.</p>
    </div>
    <div v-if="emailUrl" class="email-preview full" role="status">
      <p>Su solicitud está preparada. Si su aplicación de correo no se abrió, puede abrir el mensaje o copiar los datos.</p>
      <a :href="emailUrl" class="btn btn-ghost">Abrir correo</a>
      <button class="btn btn-ghost" type="button" @click="copyRequest">Copiar solicitud</button>
      <p v-if="copied">Solicitud copiada.</p>
      <textarea aria-label="Solicitud preparada" :value="emailBody" readonly rows="8" />
    </div>
  </form>
</template>

<script setup>
const props = defineProps({ subject: { type: String, required: true } });
const formRoot = ref(null);
const emailUrl = ref('');
const emailBody = ref('');
const copied = ref(false);

function prepareEmail() {
  const form = formRoot.value;
  if (!form.reportValidity()) return;
  const lines = [`Solicitud: ${props.subject}`, `Página: ${window.location.href}`, ''];
  Array.from(form.elements).forEach((field) => {
    if (!field.name || field.disabled || (field.type === 'checkbox' && !field.checked)) return;
    const label = field.labels?.[0]?.textContent?.replace(/\s+/g, ' ').replace('*', '').trim() || field.name;
    const value = field.tagName === 'SELECT' ? field.selectedOptions[0]?.textContent?.trim() : field.value.trim();
    if (value) lines.push(`${label}: ${value}`);
  });
  emailBody.value = lines.join('\n');
  emailUrl.value = `mailto:contacto@imimex.com?subject=${encodeURIComponent(props.subject)}&body=${encodeURIComponent(emailBody.value)}`;
  window.location.href = emailUrl.value;
}

async function copyRequest() {
  try {
    await navigator.clipboard.writeText(emailBody.value);
    copied.value = true;
  } catch {
    const preview = formRoot.value.querySelector('.email-preview textarea');
    preview.focus();
    preview.select();
  }
}
</script>
