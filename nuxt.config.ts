// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  components: [
    { path: '~/shared/icons', prefix: 'Icon' },
    '~/components',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/colors.scss" as *;'
        }
      }
    }
  }

})
