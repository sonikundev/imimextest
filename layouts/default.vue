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
                    <Button label="Contáctanos" severity="info" raised />
                </template>
            </Menubar>
        </div>

        <div class="backgroundContent">
            <slot />
        </div>
    </div>

    <div class="footer grid ">
        <div class="col-12 sm:col-12 md:col-2 lg:col-2 xl:col-2">
            <Button label="Contáctanos" severity="info" raised />
        </div>

        <div class="col-12 sm:col-12 md:col-2 lg:col-2 xl:col-2">
            <span class="pi pi-map-marker"></span>
            Queretaro Mx.
        </div>

        <div class="col-12 sm:col-12 md:col-2 lg:col-2 xl:col-2">
            <span class="pi pi-envelope"></span>
            correoimimex@imimex.com
        </div>

        <div class="col-12 sm:col-12 md:col-2 lg:col-2 xl:col-2">
            <span class="pi pi-phone"></span>
            +52 4422 33 405
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6 flex align-items-center justify-content-end">
            <span class="pi pi-linkedin pr-5"></span>
        </div>
    </div>
</div>

</template>

<script setup>
import { ref } from "vue";
import SvgImimexLogo from "../components/svg/imimexLogo.vue";

const items = ref([
    {
        label: 'Servicios',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Control e',
                icon: 'pi pi-bolt',
            },
            {
                label: 'Instrumentación',
                icon: 'pi pi-th-large',
            },
            {
                separator: true
            },
            {
                label: 'Software',
                icon: 'pi pi-server',
                items: [
                    {
                        label: 'SK Terminal',
                        icon: 'pi pi-qrcode',
                    },
                    {
                        label: 'SK Docs',
                        icon: 'pi pi-wallet',
                    }
                ]
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
</style>
   