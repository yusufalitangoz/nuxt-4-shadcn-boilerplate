<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{ error: NuxtError }>();

defineOgImage("Default", {
  title: error.status?.toString(),
});
</script>

<template>
  <main class="h-screen flex justify-center items-center flex-col container">
    <h1 class="text-4xl mb-4 font-semibold">{{ error.status }}</h1>
    <Button @click="clearError({ redirect: $localePath('/') })">
      {{ $t("error.goHome") }}
    </Button>
    <DevOnly>
      <p class="mt-4">
        {{ error }}
      </p>
    </DevOnly>
  </main>
</template>
