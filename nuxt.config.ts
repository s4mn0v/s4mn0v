// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],

  icon: {
    provider: "none",
    clientBundle: {
      scan: true,
      icons: [
        "material-symbols:arrow-downward-rounded",
        "material-symbols:arrow-upward-rounded",
        "material-symbols:fingerprint",
        "material-symbols:arrow-forward-rounded",
        "material-symbols:code-rounded",
        "material-symbols:description-outline-rounded",
        "material-symbols:folder-data-outline-rounded",
        "material-symbols:fork-right-rounded",
        "material-symbols:palette",
        "material-symbols:palette-outline",
        "material-symbols:person-outline-rounded",
        "material-symbols:person-rounded",
        "material-symbols:star-outline-rounded",
        "material-symbols:terminal-rounded",
      ],
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Codystar&family=Megrim&family=Monoton&family=Nabla&family=Rubik+Beastly&family=Rubik+Glitch&family=VT323&display=swap",
        },
      ],
    },
  },
});
