<script lang="ts" setup>
import type { Theme } from "vue-sonner/src/packages/types.js";
import type { ToasterProps } from "vue-sonner";
import { Toaster as Sonner } from "vue-sonner";

const props = withDefaults(defineProps<ToasterProps>(), {
  closeButton: true,
});
</script>

<template>
  <ClientOnly>
    <Sonner
      :class="cn('toaster group', props.class)"
      v-bind="props"
      :theme="$colorMode.preference as Theme"
    >
      <template #success-icon>
        <Icon name="lucide:circle-check" class="size-4" />
      </template>
      <template #info-icon>
        <Icon name="lucide:info" class="size-4" />
      </template>
      <template #warning-icon>
        <Icon name="lucide:triangle-alert" class="size-4" />
      </template>
      <template #error-icon>
        <Icon name="lucide:octagon-x" class="size-4" />
      </template>
      <template #loading-icon>
        <div>
          <Icon name="lucide:loader" class="size-4 animate-spin" />
        </div>
      </template>
      <template #close-icon>
        <Icon name="lucide:x" class="size-4" />
      </template>
    </Sonner>
  </ClientOnly>
</template>
