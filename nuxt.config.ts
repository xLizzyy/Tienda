import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    // Carga el plugin de Vuetify correctamente
    (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({ autoImport: true }))
      })
    }
  ],

  vite: {
  },
})

