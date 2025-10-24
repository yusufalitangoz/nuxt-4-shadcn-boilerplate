export default {
  nuxtSiteConfig: {
    name: "Nuxt 4 + Shadcn Başlangıç Şablonu",
    description: "Shadcn ile bir Nuxt 4 başlangıç şablonu",
  },
  meta: {
    home: {
      title: "Ana Sayfa",
    },
  },
  error: {
    goHome: "Ana sayfaya dön",
  },
  colorMode: {
    light: "Açık",
    dark: "Koyu",
    system: "Sistem",
  },
  linkGroups: [
    {
      name: "Genel",
      links: ["Ana Sayfa", "Hata Sayfası"],
    },
    {
      name: "Sosyal Medya",
    },
  ],
};
