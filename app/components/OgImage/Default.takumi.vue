<script setup lang="ts">
defineProps<{
  description: string;
  title: string;
}>();
</script>

<template>
  <main
    class="bg-white dark:bg-black text-black dark:text-white flex flex-col w-full h-full p-20 font-[Roboto]"
  >
    <h1 class="text-7xl">
      {{ title }}
    </h1>
    <p class="text-4xl">
      {{ description }}
    </p>
  </main>
</template>
