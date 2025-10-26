<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{ error: NuxtError }>();
const statusCode = error.statusCode.toString();

defineOgImageComponent("Default", {
  title: statusCode,
});
</script>

<template>
  <main class="h-screen flex justify-center items-center flex-col">
    <h1 class="text-4xl font-extrabold mb-5">{{ statusCode }}</h1>
    <Button @click="clearError({ redirect: $localePath('/') })">
      {{ $t("error.goHome") }}
    </Button>
    <DevOnly>
      {{ error }}
    </DevOnly>
  </main>
</template>
