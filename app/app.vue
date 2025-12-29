<script setup lang="ts">
import "vue-sonner/style.css";

const head = useLocaleHead();
const route = useRoute();
const { t } = useI18n();

const description = computed(() =>
  route.meta.description ? t(route.meta.description as string) : undefined,
);
const title = computed(() =>
  route.meta.title ? t(route.meta.title as string) : undefined,
);

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
      <Toaster />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
