<script setup lang="ts">
import "vue-sonner/style.css";

const head = useLocaleHead();
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

defineOgImageComponent("Default", {
  description,
  title,
});
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
    <Head>
      <Title>{{ title }}</Title>
      <Meta :content="description" name="description" />
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :hreflang="link.hreflang"
          :href="link.href"
          :rel="link.rel"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <NuxtLoadingIndicator />
      <NuxtRouteAnnouncer />
      <ClientOnly>
        <Toaster />
      </ClientOnly>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
