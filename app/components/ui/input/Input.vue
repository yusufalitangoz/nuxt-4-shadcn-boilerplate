<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  defaultValue?: string | number;
  modelValue?: string | number;
  type?: string;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  defaultValue: props.defaultValue,
  passive: true,
});
const showPassword = ref(false);
</script>

<template>
  <div class="relative">
    <input
      v-model="modelValue"
      :type="showPassword ? 'text' : type"
      data-slot="input"
      v-bind="$attrs"
      :class="
        cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          type === 'password' && 'pr-9',
          props.class,
        )
      "
    />
    <div
      v-if="type === 'password'"
      class="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center cursor-pointer text-gray-400 hover:text-gray-500 transition-colors"
      @click="showPassword = !showPassword"
    >
      <Icon
        :name="showPassword ? 'lucide:eye-closed' : 'lucide:eye'"
        class="size-4"
      />
    </div>
  </div>
</template>
