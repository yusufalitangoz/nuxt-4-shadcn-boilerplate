<script setup lang="ts">
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

const { social, general } = storeToRefs(useLinkGroupsStore());
</script>

<template>
  <footer class="border-t w-full text-sm bg-background">
    <div class="container pt-12 pb-8">
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div class="md:col-span-1 space-y-4">
          <LayoutLogo />
          <p class="text-muted-foreground text-xs leading-relaxed max-w-50">
            {{ $t("nuxtSiteConfig.description") }}
          </p>
        </div>
        <div
          v-for="{ name, links } in [general, social]"
          :key="name"
          class="space-y-4"
        >
          <h1 class="font-medium">{{ name }}</h1>
          <NavigationMenu>
            <NavigationMenuList class="grid -ml-4 gap-0">
              <NavigationMenuItem
                v-for="{ name: linkName, to, icon } in links"
                :key="to"
              >
                <NuxtLink
                  :class="
                    navigationMenuTriggerStyle({
                      class: 'text-muted-foreground flex items-center gap-2',
                    })
                  "
                  :to
                >
                  <Icon v-if="icon" :name="icon" />
                  {{ linkName }}
                </NuxtLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <Separator class="my-8" />
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground"
      >
        <span>
          © {{ new Date().getFullYear() }} | {{ $t("nuxtSiteConfig.name") }}
        </span>
      </div>
    </div>
  </footer>
</template>
