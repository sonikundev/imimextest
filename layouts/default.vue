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

    <div class="footer grid ">
        <div class="col-12 sm:col-12 md:col-2 lg:col-2 xl:col-2">
            <buttonContacto/>
        </div>

        <div class="col-12 sm:col-12 md:col-2 lg:col-2 xl:col-2">
            <span class="pi pi-map-marker"></span>
            Emilio Carranza 18, Santa Anita, Iztacalco, C.P. 08300, Ciudad de México.
        </div>

        <div class="col-12 sm:col-12 md:col-2 lg:col-2 xl:col-2">
            <span class="pi pi-envelope"></span>
            contacto@imimex.com
        </div>

        <div class="col-12 sm:col-12 md:col-2 lg:col-2 xl:col-2">
            <span class="pi pi-phone"></span>
            55 553 08 211
        </div>

        <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 flex align-items-center justify-content-end">
            <a href="https://www.linkedin.com/company/imimex-mx/" class="">
                <Button icon="pi pi-linkedin" text rounded  severity="secondary" class="button-whats"/>
            </a>
        </div>
    </div>
</div>

<div class="fixed-whats">
    <a href="https://wa.me/524425639924?text=Hola%20quiero%20más%20información" class="fixed-button">
        <Button icon="pi pi-whatsapp" severity="success" rounded aria-label="Search" class="button-whats"/>
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
                label: 'Consultoria',
                icon: 'pi pi-phone',
                to: '/consultancy'
            },
            {
                separator: true
            },
            {
                label: 'Software',
                icon: 'pi pi-server',
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

.backgroundContent {
  background-color: rgb(248, 248, 248);
}


::v-deep(.button-whats){
	.p-button-icon{
        font-size: 24px;
    }
}

</style>
   