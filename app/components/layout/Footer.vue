<script setup lang="ts">
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

const { social, general } = storeToRefs(useLinkGroupsStore());
</script>

<template>
  <footer class="border-t w-full text-sm">
    <nav class="container pt-10 pb-7 grid md:grid-cols-2 items-start">
      <div class="grid place-items-start gap-3 h-full">
        <LayoutLogo />
        <div class="flex flex-wrap gap-2 mt-auto">
          <Button
            v-for="{ name, icon, to } in social.links"
            :key="icon"
            :aria-label="name"
            variant="outline"
            class="size-8"
            size="icon"
            as-child
          >
            <NuxtLink target="_blank" :to="to">
              <Icon :name="icon!" size="17" />
            </NuxtLink>
          </Button>
        </div>
      </div>
      <div class="flex flex-wrap gap-10 md:justify-end">
        <div v-for="{ name, links } in [general]" :key="name" class="space-y-3">
          <h1 class="font-medium text-muted-foreground">{{ name }}</h1>
          <NavigationMenu>
            <NavigationMenuList class="grid -ml-4 gap-0">
              <NavigationMenuItem
                v-for="{ name: linkName, to } in links"
                :key="to"
                as-child
              >
                <NuxtLink :class="navigationMenuTriggerStyle()" :to="to">
                  {{ linkName }}
                </NuxtLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <Separator class="md:col-span-2 my-6" />
      <span class="text-center md:col-span-2 text-muted-foreground">
        © {{ new Date().getFullYear() }}
      </span>
    </nav>
  </footer>
</template>
