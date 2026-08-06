<script setup lang="ts">
const localeHead = useLocaleHead();
const { t, te } = useI18n();
const route = useRoute();

const description = computed(() => {
  const value = route.meta.description as string | undefined;
  return value && te(value) ? t(value) : value;
});

const title = computed(() => {
  const value = route.meta.title as string | undefined;
  return value && te(value) ? t(value) : value;
});

useHead(() => ({
  htmlAttrs: localeHead.value.htmlAttrs,
  link: localeHead.value.link,
  title: title.value,
  meta: [
    ...localeHead.value.meta,
    {
      content: description.value,
      name: "description",
    },
  ],
}));

defineOgImage("Default", {
  description: description.value,
  title: title.value,
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <ClientOnly>
      <SonnerToaster />
    </ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
