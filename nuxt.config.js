const pkg = require("./package");

module.exports = {
  mode: "universal",
  server: {
    port: 5001
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/css/styles.css" },
      { rel: "stylesheet", href: "/css/wire/wire.min.css" }
    ],
    script: [
      {
        src: "/css/wire/wire.min.js"
      },
      {
        src: "/js/jquery-3.3.1.js"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["iview/dist/styles/iview.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "@/plugins/iview", ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa", "semantic-ui-vue/nuxt"],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
