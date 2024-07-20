// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Breezy demo',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        /* SEO */
        { name: 'robots', content: 'noindex, nofollow' },
        { name: 'description', content: 'Página de demo' },
        { name: 'keywords', content: 'proyecto, demo, etc' },
        { name: 'google', content: 'notranslate' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    }
  },

  modules: ['@nuxt/content', "nuxt-icon", "@nuxt/image"],
  plugins: ['~/plugins/scroll.js'],

  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  
  compatibilityDate: '2024-07-11'
})