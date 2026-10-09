<template>
  <div class="partner-brand">
    <NuxtLink to="/" aria-label="IMIMEX, inicio">
      <img class="partner-logo" src="/assets/edificios-inteligentes/IMIMEX_Imagotipo_Principal.svg" alt="IMIMEX" width="208" height="56" />
    </NuxtLink>
    <div class="partner-badges">
      <img src="/assets/edificios-inteligentes/EcoXpert_Building_Automation.jpg" alt="EcoXpert Building Automation, certificado por Schneider Electric" width="96" height="94" loading="lazy" />
      <img src="/assets/edificios-inteligentes/EcoXpert_Power_Automation.png" alt="EcoXpert Power Automation, certificado por Schneider Electric" width="96" height="97" loading="lazy" />
    </div>
  </div>
</template>

<style scoped>
.partner-brand { display: flex; flex-wrap: wrap; align-items: center; gap: 1.75rem; }
.partner-logo { display: block; width: 13rem; height: auto; }
.partner-badges { display: flex; align-items: center; gap: 1.5rem; }
.partner-badges img { display: block; width: 6rem; height: auto; }
</style>
