<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Icon
    name="lucide:loader-circle"
    role="status"
    aria-label="Loading"
    size="18"
    :class="cn('animate-spin', props.class)"
  />
</template>
