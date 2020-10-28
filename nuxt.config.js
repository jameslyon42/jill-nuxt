export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'The Jill Pill',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Fitness and wellness coaching creating happy healthy habits',
      },
      {
        hid: 'image',
        name: 'image',
        content: '/jill_pill.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss'],

  styleResources: {
    scss: ['@/assets/css/main.scss'],
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    loaders: {
      cssModules: {
        modules: {
          // this is where you can alter the generated class names:
          localIdentName: '[local]--[Frida]_[hash:base64:4]',
        },
      },
    },
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  telemetry: false,

  googleFonts: {
    families: {
      Lobster: true,
      Spartan: [400, 500],
    },
    display: 'swap',
  },

  fontawesome: {
    icons: {
      solid: ['faEnvelope'],
      brands: ['faFacebookSquare', 'faInstagram'],
    },
    component: 'fa',
  },

  env: {
    CTF_SPACE_ID: 'v0e3sgaw815p',
    CTF_CDA_ACCESS_TOKEN: 'QQoRz_toF86Bxp61bNyvr7N18dW0c0OtVn8FwXaolpE',
  },
}
