export const useLinkGroupsStore = defineStore("link-groups", () => {
  const localePath = useLocalePath();
  const { t } = useI18n();

  const general = computed<LinkGroup>(() => ({
    name: t("linkGroups.0.name"),
    links: [
      { name: t("linkGroups.0.links.0"), to: localePath("/") },
      { name: t("linkGroups.0.links.1"), to: localePath("/error") },
    ],
  }));

  const social = computed<LinkGroup>(() => ({
    name: t("linkGroups.1.name"),
    links: [
      {
        to: "https://www.x.com",
        icon: "bi:twitter-x",
        name: "X",
      },
      {
        to: "https://www.instagram.com",
        icon: "bi:instagram",
        name: "Instagram",
      },
      {
        to: "https://www.linkedin.com",
        icon: "bi:linkedin",
        name: "LinkedIn",
      },
    ],
  }));

  return { general, social };
});
