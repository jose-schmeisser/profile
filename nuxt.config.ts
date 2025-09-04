// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  app: {
    head: {
      script: [
        { innerHTML: `console.log('Jose Schmeisser');` },
        {
          src: '/init-theme.js',
          tagPosition: 'head',
        }
      ],
      link: [
        { rel: 'icon', href: '/favicon-light.png', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', href: '/favicon-dark.png', media: '(prefers-color-scheme: dark)' },
      ],
      title: 'Jose Schmeisser - Personal Website',
      meta: [
        { name: 'description', content: 'Senior Full Stack Developer & Tech Lead +14 years of experience' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/icon'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})