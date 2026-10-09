<template>
  <section class="industry-product" aria-labelledby="industry-product-title">
    <div class="wrap product-layout">
      <div class="product-copy">
        <p class="product-eyebrow">SOFTWARE PARA OPERACIONES ENERGÉTICAS</p>
        <h2 id="industry-product-title">SKTERMINAL: control volumétrico y cumplimiento.</h2>
        <p class="product-description">Plataforma especializada para la gestión, el monitoreo y el cumplimiento regulatorio en operaciones energéticas.</p>
        <a href="https://www.skterminal.com.mx" target="_blank" rel="noopener noreferrer" class="product-link">Conocer SKTERMINAL <span aria-hidden="true">↗</span></a>
      </div>
      <div class="product-gallery">
        <Galleria :value="images" :numVisible="3" :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true" containerStyle="width: 100%; max-width: 360px">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" class="product-image" />
          </template>
        </Galleria>
      </div>
    </div>
  </section>
</template>

<script setup>
const images = [
  { itemImageSrc: '/assets/img/banner/sk1.jpeg', alt: 'SKTERMINAL: información del producto' },
  { itemImageSrc: '/assets/img/banner/sk2.jpeg', alt: 'SKTERMINAL: soluciones para operaciones energéticas' },
  { itemImageSrc: '/assets/img/banner/sk3.jpg', alt: 'SKTERMINAL: servicios y novedades' },
];
</script>

<style scoped>
.industry-product { background: #f2f6fa; }
.product-layout { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); align-items: center; gap: clamp(2rem, 5vw, 4rem); }
.product-eyebrow { color: #0e7c66; font-size: .8rem; letter-spacing: .1em; font-weight: 600; margin-bottom: 1rem; }
.product-description { margin-top: 1.5rem; max-width: 50ch; }
.product-link { display: inline-block; margin-top: 1.5rem; font-weight: 600; text-decoration: none; }
.product-link:hover { text-decoration: underline; }
.product-gallery { display: flex; justify-content: center; min-width: 0; padding: 1rem; background: #fff; border: 1px solid #d5dee9; border-radius: 1rem; }
.product-image { display: block; width: 100%; height: auto; max-height: 220px; object-fit: contain; }
@media (max-width: 48rem) { .product-layout { grid-template-columns: 1fr; } .product-gallery { width: 100%; max-width: 392px; margin-inline: auto; } }
</style>
