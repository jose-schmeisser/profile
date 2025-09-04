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
        { name: 'description', content: 'Senior Full Stack Developer & Tech Lead with +14 years of experience' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Jose Schmeisser - Senior Full Stack Developer & Tech Lead' },
        { property: 'og:description', content: 'Senior Full Stack Developer & Tech Lead with +14 years of experience' },
        { property: 'og:image', content: '/images/avatar2.png' },
        { property: 'og:url', content: 'https://jose-schmeisser.dev' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Jose Schmeisser - Senior Full Stack Developer & Tech Lead' },
        { name: 'twitter:description', content: 'Senior Full Stack Developer & Tech Lead with +14 years of experience' },
        { name: 'twitter:image', content: '/images/avatar2.png' },
        // Additional meta tags
        { name: 'author', content: 'Jose Schmeisser' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#1f2937' }
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