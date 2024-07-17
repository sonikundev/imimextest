// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';


export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'IMIMEX',
      titleTemplate: '%s',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '@/public/IMIMEX_Isotipo_Blanco.png' }
      ]
    }
  },
  css: [
    '@/scss/styles.scss',
    'primeflex/primeflex.scss',
    'primeicons/primeicons.css'
  ],
  devtools: { enabled: false },
  compatibilityDate: "2024-07-04",
  modules: [
      '@primevue/nuxt-module',
      '@nuxtjs/seo'
  ],
  primevue: {
    usePrimeVue: true,
    options: {
      theme: {
          preset: Aura,
          darkModeSelector: false,
      },      
    }
  },
  
})