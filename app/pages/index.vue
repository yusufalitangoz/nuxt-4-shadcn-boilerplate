<script setup lang="ts">
import { Field as VeeField } from "vee-validate";
import packageJson from "../../package.json";
import { toast } from "vue-sonner";
import { z } from "zod";

definePageMeta({
  description: "nuxtSiteConfig.description",
  title: "meta.home.title",
});

const loading = ref(false);

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(5).max(32),
  }),
);

const { handleSubmit, resetForm } = useForm({
  validationSchema,
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
    <Card class="overflow-auto w-full p-0 sm:max-w-[800px]">
      <pre class="overflow-auto w-full p-6">{{ packageJson }}</pre>
    </Card>
    <Card class="w-full sm:max-w-md mt-12">
      <CardHeader>
        <CardTitle>Example Form</CardTitle>
        <CardDescription> Example Form </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="example-form" @submit="onSubmit">
          <FieldGroup>
            <VeeField v-slot="{ field, errors }" name="name">
              <Field :data-invalid="!!errors.length">
                <FieldLabel for="example-form-name"> Name </FieldLabel>
                <Input
                  id="example-form-name"
                  :aria-invalid="!!errors.length"
                  placeholder="Your name"
                  type="password"
                  v-bind="field"
                />
                <FieldError v-if="errors.length" :errors="errors" />
              </Field>
            </VeeField>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" @click="resetForm">
            Reset
          </Button>
          <Button type="submit" form="example-form" :loading> Submit </Button>
        </Field>
      </CardFooter>
    </Card>
  </section>
</template>
