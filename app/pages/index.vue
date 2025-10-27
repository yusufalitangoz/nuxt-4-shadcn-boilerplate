<script setup lang="ts">
import packageJson from "../../package.json";
import { toast } from "vue-sonner";
import z from "zod";

definePageMeta({
  description: "nuxtSiteConfig.description",
  title: "meta.home.title",
});

const loading = ref(false);

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
  }),
);

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  loading.value = false;

  toast("Form Submitted!", {
    description: JSON.stringify(values),
  });
});
</script>

<template>
  <section class="container my-16 grid place-items-center">
    <div class="grid text-center">
      <h1 class="text-5xl font-bold mb-3">
        {{ $t("nuxtSiteConfig.name") }}
      </h1>
      <p class="text-3xl text-muted-foreground">
        {{ $t("nuxtSiteConfig.description") }}
      </p>
      <div class="flex flex-wrap justify-center gap-3 my-10">
        <Button as-child>
          <NuxtLink target="_blank" to="https://nuxt.com">
            <Icon name="logos:nuxt-icon" />
            Nuxt
          </NuxtLink>
        </Button>
        <Button as-child>
          <NuxtLink target="_blank" to="https://www.shadcn-vue.com">
            <Icon name="simple-icons:shadcnui" class="mr-2 text-green-500" />
            Shadcn
          </NuxtLink>
        </Button>
        <Button as-child>
          <NuxtLink
            to="https://github.com/yusufalitangoz/nuxt-shadcn-boilerplate"
            target="_blank"
          >
            <Icon name="simple-icons:github" size="18" />
            GitHub
          </NuxtLink>
        </Button>
      </div>
    </div>
    <pre class="text-xs border p-5 rounded-lg overflow-auto w-full max-w-max">{{
      packageJson
    }}</pre>
    <form class="space-y-6 mt-12" @submit="onSubmit">
      <FormField
        v-slot="{ componentField }"
        name="username"
        :validate-on-blur="!isFieldDirty"
      >
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input
              type="password"
              placeholder="Username"
              v-bind="componentField"
            />
          </FormControl>
          <FormDescription> Username description. </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit" :loading> Submit </Button>
    </form>
  </section>
</template>
