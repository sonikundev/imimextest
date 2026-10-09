<template>

<div class="layout-wrapper fadein animation-duration-400 animation-iteration-1">
    <div class="content">
        <div style="padding: 0px;">
            <Menubar :model="items" style="height: 80px;">
                <template #start>
                    <NuxtLink to="/">
                        <SvgImimexLogo style="width: 150px; margin-right: 20px;"/>
                    </NuxtLink>
                </template>
                <template #item="{ item, props, hasSubmenu, root }">
                    <NuxtLink v-if="item.to" :to="item.to" v-bind="props.action" class="flex items-center" exact>
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                        <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                        <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                    </NuxtLink>
                    <a v-else v-ripple class="flex items-center" v-bind="props.action">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                        <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                        <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                    </a>
                </template>
                <template #end>
                    <buttonContacto/>
                </template>
            </Menubar>
        </div>

        <div class="backgroundContent">
            <slot />
        </div>
    </div>

  <footer class="footer flex flex-wrap justify-content-between align-items-center">
    <div class="footer-navigation">
      <BuildingsPartnerBadges />
      <nav aria-label="Navegación del pie">
        <NuxtLink to="/consultancy">Consultoría y software</NuxtLink>
        <NuxtLink to="/edificios-inteligentes">Edificios inteligentes</NuxtLink>
        <NuxtLink to="/edificios-inteligentes/building-automation">Building Automation</NuxtLink>
        <NuxtLink to="/edificios-inteligentes/power-automation">Power Automation</NuxtLink>
        <NuxtLink to="/edificios-inteligentes/mantenimiento-bms">Mantenimiento BMS</NuxtLink>
        <NuxtLink to="/about">Nosotros</NuxtLink>
        <NuxtLink to="/contact">Contacto</NuxtLink>
      </nav>
    </div>

    <!-- Botón de contacto -->
    <div class="flex align-items-center">
      <buttonContacto />
    </div>

    <!-- LinkedIn -->
    <div class="flex align-items-center justify-content-center">
      <a 
        href="https://www.linkedin.com/company/imimex-mx/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Button icon="pi pi-linkedin" text rounded severity="secondary" class="button-whats" />
      </a>
    </div>

    <!-- Dirección -->
    <div class="flex align-items-center justify-content-center">
      <i class="pi pi-map-marker mr-2"></i>
      <span>Emilio Carranza 18, Santa Anita, Iztacalco, C.P. 08300, Ciudad de México.</span>
    </div>

    <!-- Correo -->
    <div class="flex align-items-center justify-content-center">
      <i class="pi pi-envelope mr-2"></i>
      <button 
        @click="enviarCorreo"
        class="interactive-link bg-transparent border-none p-0 m-0 text-primary hover:underline"
        style="font-size: 1rem;"
      >
        contacto@imimex.com
      </button>
    </div>

    <!-- Teléfono -->
    <div class="flex align-items-center justify-content-center">
      <i class="pi pi-phone mr-2"></i>
      <a 
        href="https://wa.me/525555308211" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="interactive-link text-primary hover:underline"
      >
        (+52) 555 530 8211
      </a>
    </div>


  </footer>

</div>

<div class="fixed-whats">
    <a href="https://wa.me/525561278189?text=Hola%20quiero%20más%20información" class="fixed-button">
        <Button icon="pi pi-whatsapp" severity="success" rounded aria-label="Contactar por WhatsApp" class="button-whats"/>
    </a>
</div>


</template>

<script setup>
import { ref } from "vue";
import SvgImimexLogo from "../components/svg/imimexLogo.vue";
import buttonContacto from "../components/buttonContacto.vue"

const items = ref([
    {
        label: 'Servicios',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Consultoría',
                icon: 'pi pi-phone',
                to: '/consultancy'
            },
            {
                separator: true
            },
            {
                label: 'Software',
                icon: 'pi pi-server',
                to: '/consultancy#software',
                // items: [
                //     {
                //         label: 'skterminal',
                //         icon: 'pi pi-qrcode',
                //     },
                //     {
                //         label: 'skdocs',
                //         icon: 'pi pi-wallet',
                //     },
                //     {
                //         label: 'skflights',
                //         icon: 'pi pi-shopping-bag',
                //     }
                // ]
            }
        ]
    },
    {
        label: 'Edificios inteligentes',
        icon: 'pi pi-building',
        items: [
            { label: 'Soluciones y sectores', to: '/edificios-inteligentes' },
            { label: 'Building Automation', to: '/edificios-inteligentes/building-automation' },
            { label: 'Power Automation', to: '/edificios-inteligentes/power-automation' },
            { label: 'Mantenimiento BMS', to: '/edificios-inteligentes/mantenimiento-bms' },
            { separator: true },
            { label: 'Hoteles', to: '/edificios-inteligentes/sectores/hoteles' },
            { label: 'Hospitales', to: '/edificios-inteligentes/sectores/hospitales' },
            { label: 'Data centers', to: '/edificios-inteligentes/sectores/data-centers' },
            { label: 'Industria', to: '/edificios-inteligentes/sectores/industria' },
        ]
    },
    {
        label: 'Nosotros',
        icon: 'pi pi-building',
        to: '/about'
    },
    {
        label: 'Contacto',
        icon: 'pi pi-address-book',
        to: '/contact' 
    }
]);

function enviarCorreo() {
  window.location.href = "mailto:contacto@imimex.com";
}

</script>

<style lang="scss" scoped>

.router-link-exact-active {
    color: #055c9f;
}

::v-deep(.logoImi){
    .cls-1 {
    fill: #1d2546;
    }

    .cls-2 {
    fill: #055c9f;
    }
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.footer {
  background: #f8f9fa;
  text-align: center;
  padding: 1rem;
}

.footer-navigation {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #d5dee9;
}

.footer-navigation nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 40rem;
  text-align: left;
}

.footer-navigation a {
  color: #055c9f;
  text-decoration: none;
}

.backgroundContent {
  background-color: rgb(248, 248, 248);
}


::v-deep(.button-whats){
	.p-button-icon{
        font-size: 24px;
    }
}

.interactive-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
}

.interactive-link:hover {
  color: #2563eb; /* azul tailwind-500 */
}

</style>

