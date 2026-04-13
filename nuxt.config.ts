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
  css: ["~/assets/css/tailwind.css"],
  compatibilityDate: "2026-03-22",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      {
        weights: [400, 500, 600],
        name: "Inter",
        global: true,
      },
    ],
  },
  nitro: {
    preset: "cloudflare-module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: "nuxt-4-shadcn-boilerplate",
        vars: {
          NUXT_PUBLIC_I18N_BASE_URL: "https://boilerplate.yali.dev",
        },
      },
    },
  },
  i18n: {
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
  robots: {
    blockNonSeoBots: true,
  },
  veeValidate: {
    componentNames: {
      Field: "VeeField",
    },
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
