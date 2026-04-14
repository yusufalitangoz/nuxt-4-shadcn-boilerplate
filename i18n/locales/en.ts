export default {
  nuxtSiteConfig: {
    name: "Nuxt 4 + Shadcn Boilerplate",
    description: "Nuxt 4 boilerplate with Shadcn.",
  },
  meta: {
    home: {
      title: "Home",
      description: "Home page description.",
    },
    about: {
      title: "About",
      description: "About page description.",
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
      links: ["Home", "About"],
    },
    {
      name: "Social Media",
    },
  ],
};
