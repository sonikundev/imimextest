<template>
  <section id="tecnologia" class="technology-resources">
    <div class="wrap">
      <p class="hero-kicker">TECNOLOGÍA PARA MODERNIZAR Y CRECER</p>
      <h2>De los datos a una operación unificada.</h2>
      <p class="lead">EcoStruxure Building Operation permite centralizar indicadores y conectar sistemas críticos para tomar decisiones sobre confort, energía y mantenimiento.</p>
      <div class="technology-grid">
        <article>
          <h3>Información para cada equipo</h3>
          <p>Operaciones obtiene visibilidad del inmueble; TI integra y administra sistemas; sostenibilidad consulta métricas de energía; finanzas analiza costos y uso de activos.</p>
        </article>
        <article>
          <h3>Ingeniería y administración centralizadas</h3>
          <p>Plantillas, procesos estandarizados y una gestión de software que acompaña el crecimiento desde un edificio hasta un portafolio de inmuebles.</p>
        </article>
        <article>
          <h3>Accesos y ciberseguridad</h3>
          <p>Controles estandarizados, administración de accesos y alertas con contexto para facilitar el seguimiento de la operación.</p>
        </article>
        <article>
          <h3>Building Activate para hoteles y retail</h3>
          <p>EcoStruxure Building Activate complementa la gestión de inmuebles con control remoto y análisis de datos para optimizar consumos, ajustar espacios y gestionar varias ubicaciones.</p>
          <NuxtLink to="/edificios-inteligentes/sectores/hoteles">Explorar las necesidades de su hotel →</NuxtLink>
        </article>
      </div>
      <nav aria-label="Información del fabricante" class="technology-links">
        <a href="https://www.se.com/mx/es/product-range/62111-ecostruxure-building-operation/#overview" target="_blank" rel="noopener noreferrer">EcoStruxure Building Operation en Schneider Electric ↗</a>
        <a href="https://www.se.com/mx/es/product-range/254997161-ecostruxure-building-activate/" target="_blank" rel="noopener noreferrer">EcoStruxure Building Activate en Schneider Electric ↗</a>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.technology-resources { background: #f2f6fa; }
.lead { margin-top: 1.5rem; }
.technology-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; margin-top: 2rem; }
article { padding: 1.5rem; border: 1px solid #d5dee9; border-radius: .875rem; background: white; }
article p { margin: 1rem 0; }
.technology-links { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }
@media (max-width: 48rem) { .technology-grid { grid-template-columns: 1fr; } }
</style>
