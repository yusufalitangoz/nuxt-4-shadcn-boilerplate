<script setup lang="ts">
import type { LabelProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { Label } from "reka-ui";

const props = withDefaults(
  defineProps<
    LabelProps & { class?: HTMLAttributes["class"]; asterisk?: boolean }
  >(),
  {
    asterisk: true,
  },
);

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <Label
    data-slot="label"
    v-bind="delegatedProps"
    :class="
      cn(
        'flex items-center text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        props.class,
      )
    "
  >
    <slot />
    <span v-if="props.asterisk" class="text-destructive -ml-1">*</span>
  </Label>
</template>
