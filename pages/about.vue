<template>
  <div>
    <div class="grid mx-3 fadein animation-duration-400 animation-iteration-1 mb-5">
        <div class="col-12 sm:col-12 md:col-8 lg:col-8 xl:col-8">
            <p style="color:#055c9f; font-size: 18px; height: 0px;">QUIENES SOMOS?</p>
            <p class="consultoriaSoftware">
                <i class="pi pi-chart-line consultoriaSoftware" style="color: #055c9f"></i>
                Transformación Digital en la Industria: Innovación y Competitividad
            </p>
            <p style="font-size: 20px; color: gray; ">
            En IMIMEX, nos especializamos en el desarrollo de software
            industrial y administrativo, brindando soluciones a la medida,
            consultoría de software y servicios de nearshoring. Nuestro
            compromiso es impulsar la eficiencia y productividad de las
            empresas a través de nuestra experiencia y forma de trabajo; Nos
            adaptamos a sus necesidades específicas.
            </p>
        </div>

        <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 flex align-items-center justify-content-center">
            <img alt="user header" src="@/public/assets/img/undraw4.png" class="undraw2"  />
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6">
            <p class="consultoriaSoftware">
                <i class="pi pi-megaphone consultoriaSoftware" style="color: #055c9f"></i>
                Nuestra Misión
            </p>
            <p style="font-size: 20px; color: gray; ">
                En IMIMEX queremos transformar y optimizar los
                procesos empresariales mediante el desarrollo de
                soluciones de software innovadoras, personalizadas
                y de alta calidad.

                Nos comprometemos a proporcionar tecnología de
                vanguardia que potencie la eficiencia, productividad
                y competitividad de nuestros clientes, asegurando su
                éxito en un entorno empresarial en constante
                evolución.
            </p>
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6">
            <p class="consultoriaSoftware">
                <i class="pi pi-sparkles consultoriaSoftware" style="color: #055c9f"></i>
                Nuestra Visión
            </p>
            <p style="font-size: 20px; color: gray; ">
                En IMIMEX trabajamos a diario para ser líderes en
                México en el desarrollo de software innovador y
                personalizado, reconocidos por nuestra capacidad
                para transformar y optimizar los procesos
                empresariales.

                Aspiramos a crear un futuro donde las empresas de
                todo el mundo puedan alcanzar su máximo
                potencial gracias a nuestras soluciones
                tecnológicas avanzadas y nuestro compromiso
                inquebrantable con la excelencia y la innovación.
            </p>
        </div>
    </div>
    <section class="company-integration">
      <h2>Software, instrumentación y automatización</h2>
      <p>Aplicamos nuestra experiencia en software industrial y control de procesos a los sistemas de los edificios. Integramos climatización, iluminación, seguridad y energía para que la información del inmueble se convierta en decisiones de operación.</p>
      <p>Como integradores certificados EcoXpert de Schneider Electric en Building Automation y Power Automation, acompañamos el diagnóstico, la ingeniería, el suministro e instalación, la puesta en marcha y el mantenimiento.</p>
      <BuildingsPartnerBadges />
      <NuxtLink to="/edificios-inteligentes">Conozca nuestra línea de Edificios Inteligentes →</NuxtLink>
    </section>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.company-integration { padding: 2rem; max-width: 72rem; margin: auto; color: #3a4562; }
.company-integration h2 { color: #1d2647; }
.company-integration p { max-width: 60rem; line-height: 1.7; }
.company-integration a { display: inline-block; color: #055c9f; margin-top: 1.5rem; }
</style>
