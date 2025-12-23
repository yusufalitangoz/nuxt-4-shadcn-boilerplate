<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <h1
    data-slot="card-title"
    :class="cn('leading-none font-semibold', props.class)"
  >
    <slot />
  </h1>
</template>
