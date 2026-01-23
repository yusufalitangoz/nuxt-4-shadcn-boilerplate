import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/color-mode",
    "@vee-validate/nuxt",
    "@nuxtjs/fontaine",
    "nuxt-vitalizer",
    "nuxt-security",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/seo",
    "@nuxt/icon",
    "nuxt-svgo",
  ],
  i18n: {
    baseUrl: process.env.BASE_URL,
    defaultLocale: "tr",
    locales: [
      {
        language: "tr-TR",
        name: "Türkçe",
        file: "tr.ts",
        code: "tr",
      },
      {
        language: "en-US",
        name: "English",
        file: "en.ts",
        code: "en",
      },
    ],
  },
  css: ["~/assets/css/tailwind.css"],
  compatibilityDate: "2026-01-14",
  vite: {
    plugins: [tailwindcss()],
  },
  ogImage: {
    defaults: {
      renderer: "satori",
    },
  },
  robots: {
    blockNonSeoBots: true,
  },
  typescript: {
    typeCheck: true,
  },
  imports: {
    dirs: ["types"],
  },
  colorMode: {
    classSuffix: "",
  },
  devtools: {
    enabled: true,
  },
  icon: {
    mode: "svg",
  },
  shadcn: {
    prefix: "",
  },
});
