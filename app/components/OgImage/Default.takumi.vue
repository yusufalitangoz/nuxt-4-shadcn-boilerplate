<script setup lang="ts">
defineProps<{
  description: string;
  title: string;
}>();
</script>

<template>
  <main class="bg-white flex flex-col w-full h-full p-20">
    <h1 class="text-7xl font-semibold mb-6">
      {{ title }}
    </h1>
    <p class="text-4xl">
      {{ description }}
    </p>
  </main>
</template>
