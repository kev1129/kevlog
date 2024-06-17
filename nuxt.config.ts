import { createResolver } from '@nuxt/kit'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const { resolve } = createResolver(import.meta.url)
    
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxt/content', 
    'nuxt-gtag', 
    "@nuxtjs/google-fonts",
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  css: [
    "@/assets/scss/global.scss",
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  gtag: {
    id: 'G-0R60E7END0'
  },
//  buildModules: ['@nuxtjs/vuetify'],
  googleFonts: {
    families: {
      'Noto+Sans+JP': true,
      'Roboto': true,
    },
  },
})