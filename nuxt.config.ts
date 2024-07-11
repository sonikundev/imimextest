// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  css: [
    '@/scss/styles.scss',
    'primeflex/primeflex.scss',
    'primeicons/primeicons.css'
  ],
  devtools: { enabled: false },
  compatibilityDate: "2024-07-04",
  modules: [
      '@primevue/nuxt-module'
  ],
  primevue: {
    usePrimeVue: true,
    options: {
      theme: {
          preset: Aura,
      },      
    }
  }
})