export default {
  nuxtSiteConfig: {
    name: "Nuxt 4 + Shadcn Boilerplate",
    description: "Nuxt 4 boilerplate with Shadcn",
  },
  meta: {
    home: {
      title: "Home",
    },
  },
  error: {
    goHome: "Go back to home",
  },
  colorMode: {
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  linkGroups: [
    {
      name: "General",
      links: ["Home", "Error Page"],
    },
    {
      name: "Social Media",
    },
  ],
};
