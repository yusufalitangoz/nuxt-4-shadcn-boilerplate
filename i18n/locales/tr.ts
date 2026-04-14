export default {
  nuxtSiteConfig: {
    name: "Nuxt 4 + Shadcn Başlangıç Şablonu",
    description: "Shadcn ile Nuxt 4 başlangıç şablonu.",
  },
  meta: {
    home: {
      title: "Ana Sayfa",
      description: "Ana sayfa açıklaması.",
    },
    about: {
      title: "Hakkımızda",
      description: "Hakkımızda sayfası açıklaması.",
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
      links: ["Ana Sayfa", "Hakkımızda"],
    },
    {
      name: "Sosyal Medya",
    },
  ],
};
