<template>
  <div class="grid mx-3 fadein animation-duration-400 animation-iteration-1 mb-5">

    <!-- First Banner  -->
    <div class="col-12 firstwallpaper">
        <div class="grid">
            <div class="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6 ">
                <p class="firstBannerTitle">
                    Innovación y Tecnología
                </p>

                <p class="firstBannerSubTitle">
                    "En el corazón de nuestra empresa de tecnología, la innovación es el motor que impulsa cada solución." 
                </p>

                <p class="firstBannerSubTitle2">
                -imimex
                </p>

                <buttonContacto/>
            </div>

            <div class="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6 flex align-items-center justify-content-center">
                <div class="card" style="background-color: white;">
                    <Galleria :value="images" :numVisible="5" containerStyle="max-width: 640px"
                        :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true">
                        <template #item="slotProps">
                            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                        </template>
                    </Galleria>
                </div>
            </div>
        </div>
    </div>
     <!-- First Banner  -->

     <!-- Skterminal  -->
     <div class="col-12 flex flex-column align-items-center justify-content-center gap-3 p-0 bg-white py-5">
        <img 
        src="../public/assets/img/skterminallogo.png" 
        class="max-w-30rem w-auto"
        alt="Logo"
        />

        <div class="col-12 flex align-items-center justify-content-center gap-2">
        <img 
            src="../public/assets/img/lineas.png"
            class="max-w-3rem"
            alt="Líneas decorativas"
        />
        <div class="custom-hr w-full" />
        </div>

        <p><span class="pi pi-user mr-2"></span>Nuevo módulo para el Anexo 30 del SAT.</p>

        <a href="https://www.skterminal.com.mx" target="_blank" rel="noopener noreferrer" class="interactive-link">
        <Button 
        label="Solicita más información" 
        severity="info" 
        raised 
        />
        </a>    
    </div>
    <!-- Skterminal  -->

    <!-- Nuestros Servicios  -->
    <div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12 flex containerNuestrosServicios">

        <div class="firstBannerNuestrosServicios">
            <p>Nuestros Servicios</p>
        </div> 

        <div class="fondoSoftware flex">
            <svg class="svg-container" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
                <g mask="url(&quot;#SvgjsMask1028&quot;)" fill="none">
                    <path d="M-111.85 406.06L-111.85 406.06" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M-111.85 406.06L-84.94 533.57" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M-111.85 406.06L70.73 360.9" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M-111.85 406.06L43.53 559.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M-111.85 406.06L-46.08 655.02" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M-111.85 406.06L217.58 381.9" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M-84.94 533.57L-84.94 533.57" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M-84.94 533.57L-46.08 655.02" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M-84.94 533.57L43.53 559.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M-84.94 533.57L59.3 693.27" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M-84.94 533.57L70.73 360.9" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M-46.08 655.02L-46.08 655.02" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M-46.08 655.02L59.3 693.27" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M70.73 360.9L70.73 360.9" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M70.73 360.9L217.58 381.9" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M70.73 360.9L43.53 559.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M70.73 360.9L232.76 508.82" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M43.53 559.98L43.53 559.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M43.53 559.98L-46.08 655.02" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M43.53 559.98L59.3 693.27" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M43.53 559.98L232.76 508.82" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M59.3 693.27L59.3 693.27" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M217.58 381.9L217.58 381.9" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M217.58 381.9L341.05 388.28" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M217.58 381.9L232.76 508.82" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M217.58 381.9L409.73 514.23" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M217.58 381.9L43.53 559.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M232.76 508.82L232.76 508.82" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M232.76 508.82L341.05 388.28" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M232.76 508.82L409.73 514.23" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M232.76 508.82L211.25 709.64" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M211.25 709.64L211.25 709.64" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M211.25 709.64L59.3 693.27" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M211.25 709.64L380.27 694.33" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M211.25 709.64L43.53 559.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M211.25 709.64L-46.08 655.02" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M341.05 388.28L341.05 388.28" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M341.05 388.28L409.73 514.23" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M341.05 388.28L495.77 342.51" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M409.73 514.23L409.73 514.23" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M409.73 514.23L526.23 519" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M409.73 514.23L508.02 661.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M409.73 514.23L380.27 694.33" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M380.27 694.33L380.27 694.33" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M380.27 694.33L508.02 661.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M495.77 342.51L495.77 342.51" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M526.23 519L526.23 519" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M526.23 519L508.02 661.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M526.23 519L495.77 342.51" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M526.23 519L705.58 530.87" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M526.23 519L656.99 369.24" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M508.02 661.04L508.02 661.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M641.82 258.7L641.82 258.7" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M641.82 258.7L656.99 369.24" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M641.82 258.7L788.19 227.14" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M641.82 258.7L495.77 342.51" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M641.82 258.7L850.9 342.97" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M641.82 258.7L705.58 530.87" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M656.99 369.24L656.99 369.24" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M656.99 369.24L495.77 342.51" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M656.99 369.24L705.58 530.87" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M656.99 369.24L788.19 227.14" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M656.99 369.24L850.9 342.97" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M705.58 530.87L705.58 530.87" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M705.58 530.87L692.58 653.82" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M705.58 530.87L861.29 523.16" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M692.58 653.82L692.58 653.82" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M692.58 653.82L827.4 681.84" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M788.19 227.14L788.19 227.14" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M788.19 227.14L850.9 342.97" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M788.19 227.14L963.08 211.61" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M850.9 342.97L850.9 342.97" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M850.9 342.97L979.14 404.55" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M861.29 523.16L861.29 523.16" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M861.29 523.16L986.47 551.77" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M861.29 523.16L827.4 681.84" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M827.4 681.84L827.4 681.84" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M827.4 681.84L962.31 686.96" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M827.4 681.84L705.58 530.87" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M827.4 681.84L986.47 551.77" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M827.4 681.84L1089.57 550.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M939.99 -43.98L939.99 -43.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M939.99 -43.98L953.06 39.79" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M939.99 -43.98L1147.38 -46.43" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M953.06 39.79L953.06 39.79" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M953.06 39.79L963.08 211.61" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M953.06 39.79L1133.27 95.32" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M953.06 39.79L1147.38 -46.43" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M953.06 39.79L788.19 227.14" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M953.06 39.79L1121.61 248.92" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M963.08 211.61L963.08 211.61" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M963.08 211.61L1121.61 248.92" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M963.08 211.61L850.9 342.97" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M963.08 211.61L979.14 404.55" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M963.08 211.61L1133.27 95.32" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M979.14 404.55L979.14 404.55" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M979.14 404.55L986.47 551.77" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M979.14 404.55L861.29 523.16" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M986.47 551.77L986.47 551.77" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M986.47 551.77L1089.57 550.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M962.31 686.96L962.31 686.96" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M962.31 686.96L986.47 551.77" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M962.31 686.96L1141.73 672.51" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M962.31 686.96L1089.57 550.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M962.31 686.96L861.29 523.16" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1147.38 -46.43L1147.38 -46.43" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1147.38 -46.43L1133.27 95.32" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1147.38 -46.43L1311.04 -67.48" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1147.38 -46.43L1279.6 96.78" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1133.27 95.32L1133.27 95.32" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1133.27 95.32L1279.6 96.78" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1133.27 95.32L1250.45 192.2" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1133.27 95.32L1121.61 248.92" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1121.61 248.92L1121.61 248.92" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1121.61 248.92L1143.85 350.59" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1121.61 248.92L1250.45 192.2" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1143.85 350.59L1143.85 350.59" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1143.85 350.59L1240.21 399.1" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1143.85 350.59L979.14 404.55" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1089.57 550.04L1089.57 550.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1089.57 550.04L1141.73 672.51" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1089.57 550.04L1246.19 520.36" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1089.57 550.04L979.14 404.55" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1141.73 672.51L1141.73 672.51" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1141.73 672.51L1304.44 648.33" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1141.73 672.51L1246.19 520.36" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1311.04 -67.48L1311.04 -67.48" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1311.04 -67.48L1440.4 -80" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1311.04 -67.48L1279.6 96.78" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1279.6 96.78L1279.6 96.78" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1279.6 96.78L1250.45 192.2" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1279.6 96.78L1437.4 74.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1250.45 192.2L1250.45 192.2" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1240.21 399.1L1240.21 399.1" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1240.21 399.1L1246.19 520.36" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1240.21 399.1L1121.61 248.92" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1246.19 520.36L1246.19 520.36" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1246.19 520.36L1304.44 648.33" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1304.44 648.33L1304.44 648.33" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1304.44 648.33L1417.47 709.15" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1440.4 -80L1440.4 -80" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1440.4 -80L1566.39 -71.67" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1440.4 -80L1437.4 74.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1440.4 -80L1279.6 96.78" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1440.4 -80L1590.19 109.11" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1440.4 -80L1437.22 210.21" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1437.4 74.04L1437.4 74.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1437.4 74.04L1437.22 210.21" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1437.4 74.04L1590.19 109.11" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1437.4 74.04L1311.04 -67.48" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1437.22 210.21L1437.22 210.21" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1437.22 210.21L1454.59 379.52" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1437.22 210.21L1611.9 238.15" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1454.59 379.52L1454.59 379.52" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1454.59 379.52L1420.04 524.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1454.59 379.52L1604.81 387.26" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1454.59 379.52L1573.25 495.58" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1454.59 379.52L1611.9 238.15" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1454.59 379.52L1240.21 399.1" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1420.04 524.98L1420.04 524.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1417.47 709.15L1417.47 709.15" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1417.47 709.15L1420.04 524.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1566.39 -71.67L1566.39 -71.67" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1566.39 -71.67L1590.19 109.11" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1566.39 -71.67L1437.4 74.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1590.19 109.11L1590.19 109.11" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1590.19 109.11L1611.9 238.15" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1611.9 238.15L1611.9 238.15" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1611.9 238.15L1604.81 387.26" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1611.9 238.15L1437.4 74.04" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1604.81 387.26L1604.81 387.26" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1604.81 387.26L1573.25 495.58" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1604.81 387.26L1420.04 524.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1573.25 495.58L1573.25 495.58" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1573.25 495.58L1603.02 645.61" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1573.25 495.58L1420.04 524.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1573.25 495.58L1611.9 238.15" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1603.02 645.61L1603.02 645.61" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1603.02 645.61L1417.47 709.15" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <path d="M1603.02 645.61L1420.04 524.98" stroke="rgba(5, 92, 159, 1)" stroke-width="1.5"></path>
                    <circle r="5" cx="-111.85" cy="406.06" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="-84.94" cy="533.57" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="-46.08" cy="655.02" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="70.73" cy="360.9" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="43.53" cy="559.98" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="59.3" cy="693.27" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="217.58" cy="381.9" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="232.76" cy="508.82" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="211.25" cy="709.64" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="341.05" cy="388.28" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="409.73" cy="514.23" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="380.27" cy="694.33" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="495.77" cy="342.51" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="526.23" cy="519" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="508.02" cy="661.04" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="641.82" cy="258.7" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="656.99" cy="369.24" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="705.58" cy="530.87" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="692.58" cy="653.82" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="788.19" cy="227.14" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="850.9" cy="342.97" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="861.29" cy="523.16" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="827.4" cy="681.84" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="939.99" cy="-43.98" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="953.06" cy="39.79" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="963.08" cy="211.61" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="979.14" cy="404.55" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="986.47" cy="551.77" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="962.31" cy="686.96" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1147.38" cy="-46.43" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1133.27" cy="95.32" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1121.61" cy="248.92" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1143.85" cy="350.59" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1089.57" cy="550.04" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1141.73" cy="672.51" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1311.04" cy="-67.48" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1279.6" cy="96.78" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1250.45" cy="192.2" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1240.21" cy="399.1" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1246.19" cy="520.36" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1304.44" cy="648.33" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1440.4" cy="-80" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1437.4" cy="74.04" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1437.22" cy="210.21" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1454.59" cy="379.52" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1420.04" cy="524.98" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1417.47" cy="709.15" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1566.39" cy="-71.67" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1590.19" cy="109.11" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1611.9" cy="238.15" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1604.81" cy="387.26" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1573.25" cy="495.58" fill="rgba(5, 92, 159, 1)"></circle>
                    <circle r="5" cx="1603.02" cy="645.61" fill="rgba(5, 92, 159, 1)"></circle>
                    <path d="M561.26 707.8L561.26 707.8" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M561.26 707.8L696.89 677.29" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M561.26 707.8L509.4 555.74" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1010.57 375.48L1010.57 375.48" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1010.57 375.48L1130.58 386.87" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1010.57 375.48L990.07 546.99" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1010.57 375.48L1144.49 256.77" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1287.35 201.44L1287.35 201.44" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1287.35 201.44L1416.67 209.38" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1287.35 201.44L1292.71 347.55" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1287.35 201.44L1144.49 256.77" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1287.35 201.44L1264.89 45.51" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1287.35 201.44L1135.67 78.89" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M-40 497.68L-40 497.68" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M-40 497.68L73.18 491.61" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M-40 497.68L-105.16 705.46" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M-40 497.68L41.77 710.72" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M-40 497.68L222.56 558.08" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M-40 497.68L399.01 501.82" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M-105.16 705.46L-105.16 705.46" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M-105.16 705.46L41.77 710.72" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M73.18 491.61L73.18 491.61" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M73.18 491.61L222.56 558.08" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M73.18 491.61L41.77 710.72" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M73.18 491.61L-105.16 705.46" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M73.18 491.61L399.01 501.82" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M41.77 710.72L41.77 710.72" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M41.77 710.72L222.56 558.08" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M41.77 710.72L387 692.34" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M222.56 558.08L222.56 558.08" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M399.01 501.82L399.01 501.82" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M399.01 501.82L509.4 555.74" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M399.01 501.82L222.56 558.08" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M399.01 501.82L387 692.34" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M399.01 501.82L561.26 707.8" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M387 692.34L387 692.34" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M387 692.34L561.26 707.8" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M387 692.34L509.4 555.74" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M509.4 555.74L509.4 555.74" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M509.4 555.74L696.89 677.29" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M696.89 677.29L696.89 677.29" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M696.89 677.29L824.33 646.96" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M792.68 369.24L792.68 369.24" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M792.68 369.24L860.14 499.6" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M860.14 499.6L860.14 499.6" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M860.14 499.6L990.07 546.99" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M860.14 499.6L824.33 646.96" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M860.14 499.6L1010.57 375.48" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M824.33 646.96L824.33 646.96" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M824.33 646.96L984.1 654.36" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M824.33 646.96L990.07 546.99" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M824.33 646.96L561.26 707.8" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M990.07 546.99L990.07 546.99" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M990.07 546.99L1089.78 554.62" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M990.07 546.99L984.1 654.36" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M984.1 654.36L984.1 654.36" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M984.1 654.36L1089.78 554.62" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1153.92 -52.36L1153.92 -52.36" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1153.92 -52.36L1135.67 78.89" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1153.92 -52.36L1286.41 -74.55" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1153.92 -52.36L1264.89 45.51" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1153.92 -52.36L1287.35 201.44" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1153.92 -52.36L1456.17 -76.93" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1135.67 78.89L1135.67 78.89" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1135.67 78.89L1264.89 45.51" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1144.49 256.77L1144.49 256.77" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1144.49 256.77L1130.58 386.87" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1130.58 386.87L1130.58 386.87" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1089.78 554.62L1089.78 554.62" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1089.78 554.62L1156.09 666.24" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1089.78 554.62L1130.58 386.87" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1089.78 554.62L1256.65 493.59" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1089.78 554.62L1010.57 375.48" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1156.09 666.24L1156.09 666.24" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1156.09 666.24L1262.38 648.11" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1286.41 -74.55L1286.41 -74.55" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1286.41 -74.55L1264.89 45.51" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1286.41 -74.55L1456.17 -76.93" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1286.41 -74.55L1135.67 78.89" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1286.41 -74.55L1449.82 71.98" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1286.41 -74.55L1287.35 201.44" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1264.89 45.51L1264.89 45.51" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1264.89 45.51L1449.82 71.98" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1264.89 45.51L1416.67 209.38" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1292.71 347.55L1292.71 347.55" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1292.71 347.55L1256.65 493.59" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1292.71 347.55L1450.68 400.66" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1292.71 347.55L1130.58 386.87" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1256.65 493.59L1256.65 493.59" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1256.65 493.59L1262.38 648.11" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1256.65 493.59L1130.58 386.87" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1262.38 648.11L1262.38 648.11" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1262.38 648.11L1409.11 686.72" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1456.17 -76.93L1456.17 -76.93" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1456.17 -76.93L1449.82 71.98" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1456.17 -76.93L1580.11 96.32" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1456.17 -76.93L1264.89 45.51" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1449.82 71.98L1449.82 71.98" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1449.82 71.98L1580.11 96.32" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1449.82 71.98L1416.67 209.38" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1416.67 209.38L1416.67 209.38" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1416.67 209.38L1542.85 256.91" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1450.68 400.66L1450.68 400.66" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1450.68 400.66L1435.94 494.83" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1450.68 400.66L1563.63 504.68" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1450.68 400.66L1606.56 341.56" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1435.94 494.83L1435.94 494.83" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1435.94 494.83L1563.63 504.68" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1435.94 494.83L1256.65 493.59" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1435.94 494.83L1409.11 686.72" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1409.11 686.72L1409.11 686.72" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1409.11 686.72L1586.78 667.99" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1580.11 96.32L1580.11 96.32" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1580.11 96.32L1542.85 256.91" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1580.11 96.32L1416.67 209.38" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1542.85 256.91L1542.85 256.91" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1542.85 256.91L1606.56 341.56" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1606.56 341.56L1606.56 341.56" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1563.63 504.68L1563.63 504.68" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1563.63 504.68L1586.78 667.99" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1563.63 504.68L1606.56 341.56" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1563.63 504.68L1409.11 686.72" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1563.63 504.68L1542.85 256.91" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <path d="M1586.78 667.99L1586.78 667.99" stroke="hsl(206.10000000000002, 93.9%, 41.8%)" stroke-width="1.5"></path>
                    <circle r="25" cx="561.26" cy="707.8" fill="url(&quot;#SvgjsRadialGradient1029&quot;)"></circle>
                    <circle r="25" cx="1010.57" cy="375.48" fill="url(&quot;#SvgjsRadialGradient1029&quot;)"></circle>
                    <circle r="25" cx="1287.35" cy="201.44" fill="url(&quot;#SvgjsRadialGradient1029&quot;)"></circle>
                    <circle r="5" cx="-40" cy="497.68" fill="#82aecf"></circle>
                    <circle r="5" cx="-105.16" cy="705.46" fill="#82aecf"></circle>
                    <circle r="5" cx="73.18" cy="491.61" fill="#82aecf"></circle>
                    <circle r="5" cx="41.77" cy="710.72" fill="#82aecf"></circle>
                    <circle r="5" cx="222.56" cy="558.08" fill="#82aecf"></circle>
                    <circle r="5" cx="399.01" cy="501.82" fill="#82aecf"></circle>
                    <circle r="5" cx="387" cy="692.34" fill="#82aecf"></circle>
                    <circle r="5" cx="509.4" cy="555.74" fill="#82aecf"></circle>
                    <circle r="5" cx="696.89" cy="677.29" fill="#82aecf"></circle>
                    <circle r="5" cx="792.68" cy="369.24" fill="#82aecf"></circle>
                    <circle r="5" cx="860.14" cy="499.6" fill="#82aecf"></circle>
                    <circle r="5" cx="824.33" cy="646.96" fill="#82aecf"></circle>
                    <circle r="5" cx="990.07" cy="546.99" fill="#82aecf"></circle>
                    <circle r="5" cx="984.1" cy="654.36" fill="#82aecf"></circle>
                    <circle r="5" cx="1153.92" cy="-52.36" fill="#82aecf"></circle>
                    <circle r="5" cx="1135.67" cy="78.89" fill="#82aecf"></circle>
                    <circle r="5" cx="1144.49" cy="256.77" fill="#82aecf"></circle>
                    <circle r="5" cx="1130.58" cy="386.87" fill="#82aecf"></circle>
                    <circle r="5" cx="1089.78" cy="554.62" fill="#82aecf"></circle>
                    <circle r="5" cx="1156.09" cy="666.24" fill="#82aecf"></circle>
                    <circle r="5" cx="1286.41" cy="-74.55" fill="#82aecf"></circle>
                    <circle r="5" cx="1264.89" cy="45.51" fill="#82aecf"></circle>
                    <circle r="5" cx="1292.71" cy="347.55" fill="#82aecf"></circle>
                    <circle r="5" cx="1256.65" cy="493.59" fill="#82aecf"></circle>
                    <circle r="5" cx="1262.38" cy="648.11" fill="#82aecf"></circle>
                    <circle r="5" cx="1456.17" cy="-76.93" fill="#82aecf"></circle>
                    <circle r="5" cx="1449.82" cy="71.98" fill="#82aecf"></circle>
                    <circle r="5" cx="1416.67" cy="209.38" fill="#82aecf"></circle>
                    <circle r="5" cx="1450.68" cy="400.66" fill="#82aecf"></circle>
                    <circle r="5" cx="1435.94" cy="494.83" fill="#82aecf"></circle>
                    <circle r="5" cx="1409.11" cy="686.72" fill="#82aecf"></circle>
                    <circle r="5" cx="1580.11" cy="96.32" fill="#82aecf"></circle>
                    <circle r="5" cx="1542.85" cy="256.91" fill="#82aecf"></circle>
                    <circle r="5" cx="1606.56" cy="341.56" fill="#82aecf"></circle>
                    <circle r="5" cx="1563.63" cy="504.68" fill="#82aecf"></circle>
                    <circle r="5" cx="1586.78" cy="667.99" fill="#82aecf"></circle>
                </g>
                <defs>
                    <mask id="SvgjsMask1028">
                        <rect width="1440" height="560" fill="#ffffff"></rect>
                    </mask>
                    <radialGradient id="SvgjsRadialGradient1029">
                        <stop stop-color="#ffffff" offset="0.1"></stop>
                        <stop stop-color="rgba(5, 92, 159, 1)" offset="0.2"></stop>
                        <stop stop-color="rgba(5, 92, 159, 0)" offset="1"></stop>
                    </radialGradient>
                </defs>
            </svg>
        </div>

    </div>
    <!-- Nuestros Servicios  -->

    <!-- Servicios de Software -->
    <div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12 mb-1" style="padding: 0px">
      <Card style="width: 100%;">
        <template #content>
          <div class="grid">
            <div class="col-12 flex align-items-center justify-content-center" style="padding: 0px">
                <p>
                  <i class="pi pi-box consultoriaSoftware pr-2"></i>
                </p>
                
                <p class="consultoriaSoftware">
                    Consultoria en Desarrollo de Software
                </p>
            </div>

            <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 my-1" style="padding:0px; z-index: 10;">
            <div class="card">
                <Card class="consultoriaCard">
                    <template #header>
                        <img alt="user header" src="@/public/assets/img/undraw1.png" class="undraw1" />
                    </template>
                    <template #title>
                        <span class="titleCard">
                            <i class="pi pi-briefcase pr-1"></i>
                            Servicio de desarrollo a la medida
                        </span>
                    </template>
                    <template #content>
                        <p class="m-0 infoCard">   
                            El servicio de desarrollo a la medida crea software personalizado que se alinea con los objetivos y necesidades específicas de cada empresa para proporcionar una ventaja competitiva.
                        </p>
                    </template>
                </Card>
            </div>
            </div>

            <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 my-1" style="padding:0px; z-index: 10;">
            <div class="card">
                <Card class="consultoriaCard">
                    <template #header>
                        <img alt="user header" src="@/public/assets/img/undraw2.png" class="undraw2"  />
                    </template>
                    <template #title>
                        <span class="titleCard">
                            <i class="pi pi-clipboard pr-1"></i>
                            Servicio de consultoría en software
                        </span>
                    </template>
                    <template #content>
                        <p class="m-0 infoCard">   
                            El servicio de consultoría en software ofrece asesoramiento experto para optimizar, implementar y gestionar soluciones tecnológicas que mejoren la eficiencia y productividad de las empresas.
                        </p>
                    </template>
                </Card>
            </div>
            </div>

            <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 my-1" style="padding:0px; z-index: 10;">
            <div class="card">
                <Card class="consultoriaCard">
                    <template #header>
                        <img alt="user header" src="@/public/assets/img/undraw3.png" class="undraw3" />
                    </template>
                    <template #title>
                        <span class="titleCard">
                            <i class="pi pi-comments pr-1"></i>
                            Servicio de soporte técnico y mesa de ayuda
                        </span>
                    </template>
                    <template #content>
                        <p class="m-0 infoCard">   
                            El servicio de soporte técnico y mesa de ayuda proporciona asistencia especializada para resolver problemas técnicos, garantizar el funcionamiento continuo de sistemas y ofrecer soporte a los usuarios finales.
                        </p>
                    </template>
                </Card>
            </div>
            </div>

        </div>
        </template>
      </Card>
      
    </div>
    <!-- Servicios de Software -->

    <!-- Software Propietario -->
    <div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12" style="padding: 0px">
      <Card style="width: 100%;">
        <template #content>
          <div class="grid">
            <div class="col-12 flex align-items-center justify-content-center" style="padding: 0px">
                <p class="consultoriaSoftware">
                    <i class="pi pi-box consultoriaSoftware pr-2"></i>
                    Software Propietario
                </p>
            </div>

            <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 my-1" style="padding:0px">
            <div class="card">
                <Card class="softwarePropietarioCard">
                    <template #header>
                        <img alt="user header" src="@/public/assets/img/skdocslogo.png" class="skdocsImage"/>
                    </template>
                    <template #title>
                        <span class="titleCard">
                            <i class="pi pi-code pr-1"></i>
                            skdocs
                        </span>
                    </template>
                    <template #subtitle>
                        <span>
                            Sector Administrativo
                        </span>
                    </template>
                    <template #content>
                        <p class="m-0 infoCard">   
                            Con la administración de contratos de arrendamiento para locales de aeropuertos centraliza la gestión de arrendamientos, garantizando un control eficiente y preciso. Optimiza la gestión de contratos, pagos y renovaciones, mejorando la transparencia y productividad en todas tus operaciones.
                        </p>
                    </template>
                </Card>
            </div>
            </div>

            <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 my-1" style="padding:0px">
            <div class="card">
                <Card class="softwarePropietarioCard">
                    <template #header>
                        <img alt="user header" src="@/public/assets/img/skterminallogo.png" class="skterminalImage"/>
                    </template>
                    <template #title>
                        <span class="titleCard">
                            <i class="pi pi-code pr-1"></i>
                            skterminal
                        </span>
                    </template>
                    <template #subtitle>
                        <span>
                            Sector Industrial
                        </span>
                    </template>
                    <template #content>
                        <p class="m-0 infoCard">   
                            Nuestro sistema de almacenamiento de derivados del petróleo optimiza la gestión de tanques en refinerías, garantizando un despacho eficiente y seguro. Centraliza la información de inventarios y monitorea en tiempo real, mejorando la precisión y la productividad en todas las operaciones.
                        </p>
                    </template>
                </Card>
            </div>
            </div>

            <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 my-1" style="padding:0px">
            <div class="card">
                <Card class="softwarePropietarioCard">
                    <template #header>
                        <img alt="user header" src="@/public/assets/img/skflightslogo.png"  class="skflightsImage">
                    </template>
                    <template #title>
                        <span class="titleCard">
                            <i class="pi pi-code pr-1"></i>
                            skflights
                        </span>
                    </template>
                    <template #subtitle>
                        <span>
                            Sector Administrativo Aeroportuario
                        </span>
                    </template>
                    <template #content>
                        <p class="m-0 infoCard">   
                            Optimiza la gestión aeroportuaria con nuestro sistema de itinerarios, centralizando la información de vuelos, pasajeros y logística para mejorar la coordinación y reducir tiempos de espera. Con soporte continuo y actualizaciones regulares, lleva tu aeropuerto al siguiente nivel de eficiencia y productividad.
                        </p>
                    </template>
                </Card>
            </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <!-- Software Propietario -->

    <!-- Testimonios -->
    <!-- <div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12 my-1" style="padding: 0px">
      <Card style="width: 100%;">
        <template #content>
          <div class="grid">
            <div class="col-12 flex align-items-center justify-content-center" style="padding: 0px">
                <p>
                    
                </p>
                
                <p class="consultoriaSoftware">
                    Testimonios
                </p>
            </div>

        <div class="col-12" style="padding:0px">
          <div class="card">
            <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="10000">
                <template #item="slotProps">
                    <Card style="width: 100%; overflow: hidden">
                    <template #header>
                   
                    </template>
                    <template #title>
                        <span class="pi pi-file-check">

                        </span>
                        Proyecto
                    </template>

                    <template #content>
                        <p class="m-0">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime?
                        </p>
                    </template>
                    <template #footer>
                        <div class="" style="color: gray">
                            <p>-Persona</p>
                        </div>
                    </template>
                </Card>
                </template>
            </Carousel>
          </div>
        </div>

      </div>
        </template>
      </Card>
    </div> -->
    <!-- Testimonios -->

    <!-- Nuestros Clientes -->
    <div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12 flex containerNuestrosServicios">

    <div class="firstBanner">
        <p class="firstBannerNuestrosServicios">Nuestros Clientes</p>
    </div> 

    <div class="fondoSoftware flex">
        <div class="svg-container i">
            <svg viewBox="0 0 250 250">
                <g class="follow">
                    <polygon class="i-follow-c2" stroke="#DD07F4" points="136.658875 196.711 91.625125 170.696 114.126375 157.62475 159.150125 183.6935"></polygon>
                    <polygon class="i-follow-c1" stroke="#DD07F4" points="91.6299973 170.639999 91.625125 66.696 114.126375 53.62475 114.126375 157.570312"></polygon>
                    <polygon class="i-follow-b2" stroke="#4407F4" points="136.658875 92.711 91.625125 66.696 114.126375 53.62475 159.150125 79.6935"></polygon>
                    <polygon class="i-follow-b1" stroke="#4407F4" points="136.658875 92.711 91.625125 66.696 91.635125 170.372656 136.658875 196.441406"></polygon>
                    <polygon class="i-follow-a" stroke="#4407F4" points="136.652875 196.705125 136.649125 92.763875 159.150375 79.693875 159.152875 163.026375 159.130375 183.695125"></polygon>
                </g>
                <g class="start">
                    <polygon class="i-start-c2" stroke="#8A9EA3" points="136.658875 196.711 91.625125 170.696 114.126375 157.62475 159.150125 183.6935"></polygon>
                    <polygon class="i-start-c1" stroke="#8A9EA3" points="91.6299973 170.639999 91.625125 66.696 114.126375 53.62475 114.126375 157.570312"></polygon>
                    <polygon class="i-start-b2" stroke="#055c9f" points="136.658875 92.711 91.625125 66.696 114.126375 53.62475 159.150125 79.6935"></polygon>
                    <polygon class="i-start-b1" stroke="#055c9f" points="136.658875 92.711 91.625125 66.696 91.635125 170.372656 136.658875 196.441406"></polygon>
                    <polygon class="i-start-a" stroke="#055c9f" points="136.652875 196.705125 136.649125 92.763875 159.150375 79.693875 159.152875 163.026375 159.130375 183.695125"></polygon>
                </g>
            </svg>
        </div>

        <div class="svg-container m">
            <svg viewBox="0 0 250 250">
                <g class="follow">
                    <polygon class="m-follow-d" stroke="#DD07F4" points="125.617375 151.270004 125.617375 84.25575 110.719875 141.119995 99.387375 147.660004 80.617375 114.040001 80.617375 177.32825 58.1300011 190.089996 58.124875 86.3445 80.617375 73.327 103.121125 119.25825 125.617375 47.3445 148.082375 34.3745 148.117375 137.970001"></polygon>
                    <polygon class="m-follow-c9" stroke="#DD07F4" points="193.082 164 148.117 137.970001 148.082 34.37475 193.082 60.38975"></polygon>
                    <polygon class="m-follow-c8" stroke="#DD07F4" points="170.619995 177.220001 125.617 151.270004 148.119995 137.970001 193.119995 164"></polygon>
                    <polygon class="m-follow-c7" stroke="#DD07F4" points="170.619995 177.220001 125.617 151.270004 125.619995 84.3717064 170.619995 110.401705"></polygon>
                    <polygon class="m-follow-c6" stroke="#DD07F4" points="110.679771 141.119995 155.720001 167.139999 144.389999 173.679993 99.3899994 147.660004"></polygon>
                    <polygon class="m-follow-c5" stroke="#DD07F4" points="110.679771 141.119995 155.720001 167.139999 170.619995 110.269997 125.491211 84.2759094"></polygon>
                    <polygon class="m-follow-c4" stroke="#DD07F4" points="80.6200027 114.040001 125.620003 140.050003 144.389999 173.679993 99.3899994 147.660004"></polygon>
                    <polygon class="m-follow-c3" stroke="#DD07F4" points="125.582 203.4925 103.0895 216.40375 58.1300011 190.089996 80.617 177.07625"></polygon>
                    <polygon class="m-follow-c2" stroke="#DD07F4" points="170.582 73.6835 125.617 47.34475 103.12075 119.25725 148.12075 145.27225"></polygon>
                    <polygon class="m-follow-c1" stroke="#DD07F4" points="125.582 99.7425 148.12075 145.2725 103.157 118.96125 80.617 73.32625"></polygon>
                    <polygon class="m-follow-b3" stroke="#4407F4" points="103.0895 112.771196 103.0895 216.40375 58.12575 190.089996 58.1245 86.3549456"></polygon>
                    <polygon class="m-follow-b2" stroke="#4407F4" points="125.582 99.7425 103.0895 112.65375 58.12575 86.34375 80.617 73.32625"></polygon>
                    <polygon class="m-follow-b1" stroke="#4407F4" points="170.582 73.6835 125.617 47.34475 148.082 34.37475 193.082 60.38975"></polygon>
                    <polygon class="m-follow-a" stroke="#4407F4" points="170.619995 177.284 170.617375 110.269997 155.720001 167.13525 144.389999 173.679993 125.620003 140.0515 125.617375 203.34275 103.124875 216.25525 103.124875 112.359 125.617375 99.3415 148.121125 145.27275 170.617375 73.359 193.082375 60.389 193.119995 164"></polygon>
                </g>
                <g class="start">
                    <polygon class="m-start-d" stroke="#8A9EA3" points="125.617375 151.270004 125.617375 84.25575 110.719875 141.119995 99.387375 147.660004 80.617375 114.040001 80.617375 177.32825 58.1300011 190.089996 58.124875 86.3445 80.617375 73.327 103.121125 119.25825 125.617375 47.3445 148.082375 34.3745 148.117375 137.970001"></polygon>
                    <polygon class="m-start-c9" stroke="#8A9EA3" points="193.082 164 148.117 137.970001 148.082 34.37475 193.082 60.38975"></polygon>
                    <polygon class="m-start-c8" stroke="#8A9EA3" points="170.619995 177.220001 125.617 151.270004 148.119995 137.970001 193.119995 164"></polygon>
                    <polygon class="m-start-c7" stroke="#8A9EA3" points="170.619995 177.220001 125.617 151.270004 125.619995 84.3717064 170.619995 110.401705"></polygon>
                    <polygon class="m-start-c6" stroke="#8A9EA3" points="110.679771 141.119995 155.720001 167.139999 144.389999 173.679993 99.3899994 147.660004"></polygon>
                    <polygon class="m-start-c5" stroke="#8A9EA3" points="110.679771 141.119995 155.720001 167.139999 170.619995 110.269997 125.491211 84.2759094"></polygon>
                    <polygon class="m-start-c4" stroke="#8A9EA3" points="80.6200027 114.040001 125.620003 140.050003 144.389999 173.679993 99.3899994 147.660004"></polygon>
                    <polygon class="m-start-c3" stroke="#8A9EA3" points="125.582 203.4925 103.0895 216.40375 58.1300011 190.089996 80.617 177.07625"></polygon>
                    <polygon class="m-start-c2" stroke="#8A9EA3" points="170.582 73.6835 125.617 47.34475 103.12075 119.25725 148.12075 145.27225"></polygon>
                    <polygon class="m-start-c1" stroke="#8A9EA3" points="125.582 99.7425 148.12075 145.2725 103.157 118.96125 80.617 73.32625"></polygon>
                    <polygon class="m-start-b3" stroke="#055c9f" points="103.0895 112.771196 103.0895 216.40375 58.12575 190.089996 58.1245 86.3549456"></polygon>
                    <polygon class="m-start-b2" stroke="#055c9f" points="125.582 99.7425 103.0895 112.65375 58.12575 86.34375 80.617 73.32625"></polygon>
                    <polygon class="m-start-b1" stroke="#055c9f" points="170.582 73.6835 125.617 47.34475 148.082 34.37475 193.082 60.38975"></polygon>
                    <polygon class="m-start-a" stroke="#055c9f" points="170.619995 177.284 170.617375 110.269997 155.720001 167.13525 144.389999 173.679993 125.620003 140.0515 125.617375 203.34275 103.124875 216.25525 103.124875 112.359 125.617375 99.3415 148.121125 145.27275 170.617375 73.359 193.082375 60.389 193.119995 164"></polygon>
                </g>
            </svg>
        </div>

        <div class="svg-container i">
            <svg viewBox="0 0 250 250">
                <g class="follow">
                    <polygon class="i-follow-c2" stroke="#DD07F4" points="136.658875 196.711 91.625125 170.696 114.126375 157.62475 159.150125 183.6935"></polygon>
                    <polygon class="i-follow-c1" stroke="#DD07F4" points="91.6299973 170.639999 91.625125 66.696 114.126375 53.62475 114.126375 157.570312"></polygon>
                    <polygon class="i-follow-b2" stroke="#4407F4" points="136.658875 92.711 91.625125 66.696 114.126375 53.62475 159.150125 79.6935"></polygon>
                    <polygon class="i-follow-b1" stroke="#4407F4" points="136.658875 92.711 91.625125 66.696 91.635125 170.372656 136.658875 196.441406"></polygon>
                    <polygon class="i-follow-a" stroke="#4407F4" points="136.652875 196.705125 136.649125 92.763875 159.150375 79.693875 159.152875 163.026375 159.130375 183.695125"></polygon>
                </g>
                <g class="start">
                    <polygon class="i-start-c2" stroke="#8A9EA3" points="136.658875 196.711 91.625125 170.696 114.126375 157.62475 159.150125 183.6935"></polygon>
                    <polygon class="i-start-c1" stroke="#8A9EA3" points="91.6299973 170.639999 91.625125 66.696 114.126375 53.62475 114.126375 157.570312"></polygon>
                    <polygon class="i-start-b2" stroke="#055c9f" points="136.658875 92.711 91.625125 66.696 114.126375 53.62475 159.150125 79.6935"></polygon>
                    <polygon class="i-start-b1" stroke="#055c9f" points="136.658875 92.711 91.625125 66.696 91.635125 170.372656 136.658875 196.441406"></polygon>
                    <polygon class="i-start-a" stroke="#055c9f" points="136.652875 196.705125 136.649125 92.763875 159.150375 79.693875 159.152875 163.026375 159.130375 183.695125"></polygon>
                </g>
            </svg>
        </div>

        <div class="svg-container m">
            <svg viewBox="0 0 250 250">
                <g class="follow">
                    <polygon class="m-follow-d" stroke="#DD07F4" points="125.617375 151.270004 125.617375 84.25575 110.719875 141.119995 99.387375 147.660004 80.617375 114.040001 80.617375 177.32825 58.1300011 190.089996 58.124875 86.3445 80.617375 73.327 103.121125 119.25825 125.617375 47.3445 148.082375 34.3745 148.117375 137.970001"></polygon>
                    <polygon class="m-follow-c9" stroke="#DD07F4" points="193.082 164 148.117 137.970001 148.082 34.37475 193.082 60.38975"></polygon>
                    <polygon class="m-follow-c8" stroke="#DD07F4" points="170.619995 177.220001 125.617 151.270004 148.119995 137.970001 193.119995 164"></polygon>
                    <polygon class="m-follow-c7" stroke="#DD07F4" points="170.619995 177.220001 125.617 151.270004 125.619995 84.3717064 170.619995 110.401705"></polygon>
                    <polygon class="m-follow-c6" stroke="#DD07F4" points="110.679771 141.119995 155.720001 167.139999 144.389999 173.679993 99.3899994 147.660004"></polygon>
                    <polygon class="m-follow-c5" stroke="#DD07F4" points="110.679771 141.119995 155.720001 167.139999 170.619995 110.269997 125.491211 84.2759094"></polygon>
                    <polygon class="m-follow-c4" stroke="#DD07F4" points="80.6200027 114.040001 125.620003 140.050003 144.389999 173.679993 99.3899994 147.660004"></polygon>
                    <polygon class="m-follow-c3" stroke="#DD07F4" points="125.582 203.4925 103.0895 216.40375 58.1300011 190.089996 80.617 177.07625"></polygon>
                    <polygon class="m-follow-c2" stroke="#DD07F4" points="170.582 73.6835 125.617 47.34475 103.12075 119.25725 148.12075 145.27225"></polygon>
                    <polygon class="m-follow-c1" stroke="#DD07F4" points="125.582 99.7425 148.12075 145.2725 103.157 118.96125 80.617 73.32625"></polygon>
                    <polygon class="m-follow-b3" stroke="#4407F4" points="103.0895 112.771196 103.0895 216.40375 58.12575 190.089996 58.1245 86.3549456"></polygon>
                    <polygon class="m-follow-b2" stroke="#4407F4" points="125.582 99.7425 103.0895 112.65375 58.12575 86.34375 80.617 73.32625"></polygon>
                    <polygon class="m-follow-b1" stroke="#4407F4" points="170.582 73.6835 125.617 47.34475 148.082 34.37475 193.082 60.38975"></polygon>
                    <polygon class="m-follow-a" stroke="#4407F4" points="170.619995 177.284 170.617375 110.269997 155.720001 167.13525 144.389999 173.679993 125.620003 140.0515 125.617375 203.34275 103.124875 216.25525 103.124875 112.359 125.617375 99.3415 148.121125 145.27275 170.617375 73.359 193.082375 60.389 193.119995 164"></polygon>
                </g>
                <g class="start">
                    <polygon class="m-start-d" stroke="#8A9EA3" points="125.617375 151.270004 125.617375 84.25575 110.719875 141.119995 99.387375 147.660004 80.617375 114.040001 80.617375 177.32825 58.1300011 190.089996 58.124875 86.3445 80.617375 73.327 103.121125 119.25825 125.617375 47.3445 148.082375 34.3745 148.117375 137.970001"></polygon>
                    <polygon class="m-start-c9" stroke="#8A9EA3" points="193.082 164 148.117 137.970001 148.082 34.37475 193.082 60.38975"></polygon>
                    <polygon class="m-start-c8" stroke="#8A9EA3" points="170.619995 177.220001 125.617 151.270004 148.119995 137.970001 193.119995 164"></polygon>
                    <polygon class="m-start-c7" stroke="#8A9EA3" points="170.619995 177.220001 125.617 151.270004 125.619995 84.3717064 170.619995 110.401705"></polygon>
                    <polygon class="m-start-c6" stroke="#8A9EA3" points="110.679771 141.119995 155.720001 167.139999 144.389999 173.679993 99.3899994 147.660004"></polygon>
                    <polygon class="m-start-c5" stroke="#8A9EA3" points="110.679771 141.119995 155.720001 167.139999 170.619995 110.269997 125.491211 84.2759094"></polygon>
                    <polygon class="m-start-c4" stroke="#8A9EA3" points="80.6200027 114.040001 125.620003 140.050003 144.389999 173.679993 99.3899994 147.660004"></polygon>
                    <polygon class="m-start-c3" stroke="#8A9EA3" points="125.582 203.4925 103.0895 216.40375 58.1300011 190.089996 80.617 177.07625"></polygon>
                    <polygon class="m-start-c2" stroke="#8A9EA3" points="170.582 73.6835 125.617 47.34475 103.12075 119.25725 148.12075 145.27225"></polygon>
                    <polygon class="m-start-c1" stroke="#8A9EA3" points="125.582 99.7425 148.12075 145.2725 103.157 118.96125 80.617 73.32625"></polygon>
                    <polygon class="m-start-b3" stroke="#055c9f" points="103.0895 112.771196 103.0895 216.40375 58.12575 190.089996 58.1245 86.3549456"></polygon>
                    <polygon class="m-start-b2" stroke="#055c9f" points="125.582 99.7425 103.0895 112.65375 58.12575 86.34375 80.617 73.32625"></polygon>
                    <polygon class="m-start-b1" stroke="#055c9f" points="170.582 73.6835 125.617 47.34475 148.082 34.37475 193.082 60.38975"></polygon>
                    <polygon class="m-start-a" stroke="#055c9f" points="170.619995 177.284 170.617375 110.269997 155.720001 167.13525 144.389999 173.679993 125.620003 140.0515 125.617375 203.34275 103.124875 216.25525 103.124875 112.359 125.617375 99.3415 148.121125 145.27275 170.617375 73.359 193.082375 60.389 193.119995 164"></polygon>
                </g>
            </svg>
        </div>

        <div class="svg-container e">
            <svg viewBox="0 0 250 250">
                <g class="follow">
                    <polygon class="e-follow-c" stroke="#DD07F4" points="69.379 183.538875 69.37525 79.598875 136.879 40.625125 136.8765 58.721375 91.8765 84.781375 91.879 109.735125 124.379 91.045125 124.379 108.550003 91.8765 127.281375 91.879 149.861375 136.879 123.837625 136.88025 144.471375"></polygon>
                    <polygon class="e-follow-b7" stroke="#DD07F4" points="181.882625 170.317383 136.878875 144.336133 136.878875 123.838 181.882625 149.8805"></polygon>
                    <polygon class="e-follow-b6" stroke="#DD07F4" points="136.882625 175.76425 91.878875 149.783 136.878875 123.838 181.882625 149.8805"></polygon>
                    <polygon class="e-follow-b5" stroke="#DD07F4" points="169.340125 134.589996 124.367625 108.550003 124.367625 91.0255 169.340125 117.0155"></polygon>
                    <polygon class="e-follow-b4" stroke="#DD07F4" points="136.882625 135.76425 91.878875 109.783 124.367625 91.0255 169.340125 117.0155"></polygon>
                    <polygon class="e-follow-b3" stroke="#DD07F4" points="181.88025 84.7600021 136.879 58.7200012 136.879 40.624875 181.88025 66.588625"></polygon>
                    <polygon class="e-follow-b2" stroke="#4407F4" points="114.379 105.579875 69.37525 79.598625 69.379 183.538625 114.38025 209.503625"></polygon>
                    <polygon class="e-follow-b1" stroke="#4407F4" points="114.379 105.579875 69.37525 79.598625 136.879 40.624875 181.88025 66.588625"></polygon>
                    <polygon class="e-follow-a" stroke="#4407F4" points="114.382625 209.581375 114.378875 105.640125 181.882625 66.666375 181.880005 84.763875 136.880125 110.823875 136.882625 135.777625 169.382625 117.087625 169.382625 134.589996 136.880125 153.323875 136.882625 175.902625 181.882625 149.880125 181.883875 170.512625"></polygon>
                    <polygon class="e-start-c" stroke="#8A9EA3" points="69.379 183.538875 69.37525 79.598875 136.879 40.625125 136.8765 58.721375 91.8765 84.781375 91.879 109.735125 124.379 91.045125 124.379 108.550003 91.8765 127.281375 91.879 149.861375 136.879 123.837625 136.88025 144.471375"></polygon>
                </g>
                <g class="start">
                    <polygon class="e-start-c" stroke="#8A9EA3" points="69.379 183.538875 69.37525 79.598875 136.879 40.625125 136.8765 58.721375 91.8765 84.781375 91.879 109.735125 124.379 91.045125 124.379 108.550003 91.8765 127.281375 91.879 149.861375 136.879 123.837625 136.88025 144.471375"></polygon>
                    <polygon class="e-start-b7" stroke="#8A9EA3" points="181.882625 170.317383 136.878875 144.336133 136.878875 123.838 181.882625 149.8805"></polygon>
                    <polygon class="e-start-b6" stroke="#8A9EA3" points="136.882625 175.76425 91.878875 149.783 136.878875 123.838 181.882625 149.8805"></polygon>
                    <polygon class="e-start-b5" stroke="#8A9EA3" points="169.340125 134.589996 124.367625 108.550003 124.367625 91.0255 169.340125 117.0155"></polygon>
                    <polygon class="e-start-b4" stroke="#8A9EA3" points="136.882625 135.76425 91.878875 109.783 124.367625 91.0255 169.340125 117.0155"></polygon>
                    <polygon class="e-start-b3" stroke="#8A9EA3" points="181.88025 84.7600021 136.879 58.7200012 136.879 40.624875 181.88025 66.588625"></polygon>
                    <polygon class="e-start-b2" stroke="#055c9f" points="114.379 105.579875 69.37525 79.598625 69.379 183.538625 114.38025 209.503625"></polygon>
                    <polygon class="e-start-b1" stroke="#055c9f" points="114.379 105.579875 69.37525 79.598625 136.879 40.624875 181.88025 66.588625"></polygon>
                    <polygon class="e-start-a" stroke="#055c9f" points="114.382625 209.581375 114.378875 105.640125 181.882625 66.666375 181.880005 84.763875 136.880125 110.823875 136.882625 135.777625 169.382625 117.087625 169.382625 134.589996 136.880125 153.323875 136.882625 175.902625 181.882625 149.880125 181.883875 170.512625"></polygon>
                </g>
            </svg>
        </div>

        <div class="svg-container x">
            <svg viewBox="0 0 250 250">
                <g class="follow">
                    <polygon class="x-follow-c6" stroke="#DD07F4" points="119.87925 154.92225 101.0205 131.34725 86.1555 173.37475 63.658 186.34225 90.70175 118.7885 63.658 82.4435 86.158 69.47475 101.0205 104.08225 113.1855 53.8435 135.6855 40.87475 111.7455 106.63975 142.378 141.93225"></polygon>
                    <polygon class="x-follow-c5" stroke="#DD07F4" points="108.625 211.818 63.625 186.193 86.125 173.22425 131.125 198.84925"></polygon>
                    <polygon class="x-follow-c4" stroke="#DD07F4" points="164.911 179.495 119.8785 154.90125 142.3785 141.9325 187.34475 166.5425"></polygon>
                    <polygon class="x-follow-c3" stroke="#DD07F4" points="164.911 179.495 119.8785 154.90125 101.01975 131.34625 145.98725 155.9575"></polygon>
                    <polygon class="x-follow-c2" stroke="#DD07F4" points="131.123125 198.999375 86.155625 173.374375 101.019375 131.346875 145.986875 155.956875"></polygon>
                    <polygon class="x-follow-c1" stroke="#DD07F4" points="158.152625 79.468125 113.152625 53.843125 101.436523 103.730469 146.436523 129.355469"></polygon>
                    <polygon class="x-follow-b3" stroke="#4407F4" points="108.625 108.068 63.625 82.443 86.125 69.47425 131.125 95.09925"></polygon>
                    <polygon class="x-follow-b2" stroke="#4407F4" points="158.152625 79.468125 113.152625 53.843125 135.652625 40.874375 180.652625 66.499375"></polygon>
                    <polygon class="x-follow-b1" stroke="#4407F4" points="108.625 108.068 63.625 82.443 90.67 119.41425 63.625 186.193 108.625 211.818 135.67 144.413"></polygon>
                    <polygon class="x-follow-a" stroke="#4407F4" points="164.911 179.495 145.98725 155.9575 131.1235 199 108.62475 211.9675 135.66975 144.41375 108.62475 108.0675 131.12475 95.09875 145.98725 129.7075 158.15225 79.46875 180.65225 66.5 156.71225 132.265 187.34475 166.5425"></polygon>
                </g>
                <g class="start">
                    <polygon class="x-start-c6" stroke="#8A9EA3" points="119.87925 154.92225 101.0205 131.34725 86.1555 173.37475 63.658 186.34225 90.70175 118.7885 63.658 82.4435 86.158 69.47475 101.0205 104.08225 113.1855 53.8435 135.6855 40.87475 111.7455 106.63975 142.378 141.93225"></polygon>
                    <polygon class="x-start-c5" stroke="#8A9EA3" points="108.625 211.818 63.625 186.193 86.125 173.22425 131.125 198.84925"></polygon>
                    <polygon class="x-start-c4" stroke="#8A9EA3" points="164.911 179.495 119.8785 154.90125 142.3785 141.9325 187.34475 166.5425"></polygon>
                    <polygon class="x-start-c3" stroke="#8A9EA3" points="164.911 179.495 119.8785 154.90125 101.01975 131.34625 145.98725 155.9575"></polygon>
                    <polygon class="x-start-c2" stroke="#8A9EA3" points="131.123125 198.999375 86.155625 173.374375 101.019375 131.346875 145.986875 155.956875"></polygon>
                    <polygon class="x-start-c1" stroke="#8A9EA3" points="158.152625 79.468125 113.152625 53.843125 101.436523 103.730469 146.436523 129.355469"></polygon>
                    <polygon class="x-start-b3" stroke="#055c9f" points="108.625 108.068 63.625 82.443 86.125 69.47425 131.125 95.09925"></polygon>
                    <polygon class="x-start-b2" stroke="#055c9f" points="158.152625 79.468125 113.152625 53.843125 135.652625 40.874375 180.652625 66.499375"></polygon>
                    <polygon class="x-start-b1" stroke="#055c9f" points="108.625 108.068 63.625 82.443 90.67 119.41425 63.625 186.193 108.625 211.818 135.67 144.413"></polygon>
                    <polygon class="x-start-a" stroke="#055c9f" points="164.911 179.495 145.98725 155.9575 131.1235 199 108.62475 211.9675 135.66975 144.41375 108.62475 108.0675 131.12475 95.09875 145.98725 129.7075 158.15225 79.46875 180.65225 66.5 156.71225 132.265 187.34475 166.5425"></polygon>
                </g>
            </svg>
        </div>
    </div>

    </div>
    <!-- Nuestros Clientes -->

    <!-- Clientes -->
    <div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12 flex align-items-center justify-content-center" style="">
      <Card style="width: 100%;">
        <template #content>
          <div class="grid">

            <div class="col-12 sm:col-12 md:col-12 lg:col-2 xl:col-2 flex align-items-center justify-content-center" style="">
                <Image src="https://logodownload.org/wp-content/uploads/2018/06/pemex-logo.png" alt="Image" width="100" />
            </div>

            <div class="col-12 sm:col-12 md:col-12 lg:col-2 xl:col-2 flex align-items-center justify-content-center" style="">
                <Image src="https://4.bp.blogspot.com/-IGIk9K1sSLA/U432dqxhpkI/AAAAAAAABpY/VCFVvIu6xhw/s1600/Asa_logo.jpg" alt="Image" width="240" />
            </div>

            <div class="col-12 sm:col-12 md:col-12 lg:col-2 xl:col-2 flex align-items-center justify-content-center" style="">
                <Image src="/assets/img/controlalogo.png" alt="Image" width="140" />
            </div>

          </div>
         </template>
        </Card>
        
    </div>
    <!-- Clientes -->

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import buttonContacto from "../components/buttonContacto.vue"

const images = ref([
{
    itemImageSrc: '../assets/img/banner/sk1.jpeg',
    alt: 'img',
},
{
    itemImageSrc: '../assets/img/banner/sk2.jpeg',
    alt: 'img',
},
{
    itemImageSrc: '../assets/img/banner/sk3.jpg',
    alt: 'img',
},


]);

onMounted(() => {
  var path = document.querySelector('polygon.m-start-d');
  if (path) {
    var length = path.getTotalLength();
    console.log(length);
  } else {
    console.error('El elemento "polygon.m-start-d" no se encontró.');
  }
});

</script>

<style lang="scss" scoped>

.custom-hr {
  border: none;
  border-top: 3px solid #010243;
  max-width: 500px;
  margin-left: 15px;
}

</style>