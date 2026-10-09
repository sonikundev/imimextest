<template>
  <section class="buildings-overview" aria-labelledby="buildings-title">
    <div class="overview-heading">
      <p class="eyebrow">AUTOMATIZACIÓN Y GESTIÓN DE ENERGÍA</p>
      <h2 id="buildings-title">Edificios inteligentes, una operación conectada.</h2>
      <p>Integramos los sistemas de su inmueble para mejorar el confort, la continuidad, la seguridad y la eficiencia energética. Somos integradores certificados EcoXpert de Schneider Electric en Building Automation y Power Automation.</p>
      <NuxtLink class="overview-link" to="/edificios-inteligentes">Conocer las soluciones y sectores <span aria-hidden="true">→</span></NuxtLink>
    </div>
    <div class="overview-cards">
      <NuxtLink v-for="service in services" :key="service.to" :to="service.to" class="overview-card">
        <i :class="service.icon" aria-hidden="true" />
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <span>Conocer el servicio →</span>
      </NuxtLink>
    </div>
    <nav class="overview-sectors" aria-label="Soluciones por sector">
      <span>Soluciones para:</span>
      <NuxtLink v-for="sector in sectors" :key="sector.slug" :to="`/edificios-inteligentes/sectores/${sector.slug}`">{{ sector.title }}</NuxtLink>
    </nav>
  </section>
</template>

<script setup>
const services = [
  { title: 'Building Automation', icon: 'pi pi-building', description: 'Climatización, iluminación, calidad del aire, accesos y seguridad trabajando en equipo.', to: '/edificios-inteligentes/building-automation' },
  { title: 'Power Automation', icon: 'pi pi-bolt', description: 'Medición, calidad de energía, demanda y consumo para tomar decisiones con datos.', to: '/edificios-inteligentes/power-automation' },
  { title: 'Mantenimiento BMS', icon: 'pi pi-wrench', description: 'Diagnóstico, recuperación y acompañamiento para que su sistema vuelva a cumplir su función.', to: '/edificios-inteligentes/mantenimiento-bms' },
];
const sectors = [
  { slug: 'hoteles', title: 'Hoteles' }, { slug: 'hospitales', title: 'Hospitales' },
  { slug: 'data-centers', title: 'Data centers' }, { slug: 'industria', title: 'Industria' },
];
</script>

<style scoped>
.buildings-overview { padding: clamp(2rem, 5vw, 5rem); background: #f2f6fa; color: #3a4562; }
.overview-heading { max-width: 52rem; }
.eyebrow { color: #0e7c66; font-size: .85rem; letter-spacing: .1em; }
h2 { color: #1d2647; font-size: clamp(1.8rem, 3vw, 2.75rem); line-height: 1.15; margin: 1rem 0; }
p { line-height: 1.7; }
.overview-link { display: inline-block; margin-top: 1rem; color: #055c9f; font-weight: bold; }
.overview-cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; margin: 2rem 0; }
.overview-card { background: #fff; border: 1px solid #d5dee9; border-radius: .875rem; padding: 1.5rem; color: inherit; text-decoration: none; }
.overview-card:hover { border-color: #055c9f; }
.overview-card i { color: #0e7c66; font-size: 1.8rem; }
.overview-card h3 { color: #1d2647; }
.overview-card span { color: #055c9f; }
.overview-sectors { display: flex; flex-wrap: wrap; gap: 1rem; }
.overview-sectors a { color: #055c9f; }
@media (max-width: 48rem) { .overview-cards { grid-template-columns: 1fr; } }
</style>
