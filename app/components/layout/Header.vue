<script setup lang="ts">
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

const [DefineNavigationMenu, ReuseNavigationMenu] = createReusableTemplate();
const { general } = storeToRefs(useLinkGroupsStore());
const { locale, locales } = useI18n();

const availableLocales = computed(() =>
  locales.value.filter(({ code }) => code !== locale.value),
);
</script>

<template>
  <DefineNavigationMenu v-slot="{ sheetClose }">
    <NavigationMenu class="items-start">
      <NavigationMenuList>
        <NavigationMenuItem
          v-for="{ name, to } in general.links"
          :key="to"
          as-child
        >
          <SheetClose v-if="sheetClose">
            <NuxtLink :class="navigationMenuTriggerStyle()" :to="to">
              {{ name }}
            </NuxtLink>
          </SheetClose>
          <NuxtLink v-else :class="navigationMenuTriggerStyle()" :to="to">
            {{ name }}
          </NuxtLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </DefineNavigationMenu>
  <header class="fixed top-0 left-0 w-full py-3 bg-background border-b z-50">
    <nav
      class="container flex justify-between [&>div]:flex [&>div]:items-center [&>div]:gap-3"
    >
      <div>
        <LayoutLogo />
        <ReuseNavigationMenu class="hidden md:flex" />
      </div>
      <div>
        <ClientOnly>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button
                aria-label="Color Mode Menu"
                variant="outline"
                size="icon"
              >
                <Icon
                  :name="
                    $colorMode.preference === 'system'
                      ? 'lucide:monitor'
                      : $colorMode.preference === 'dark'
                        ? 'lucide:moon'
                        : 'lucide:sun'
                  "
                  size="18"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem @click="$colorMode.preference = 'light'">
                {{ $t("colorMode.light") }}
              </DropdownMenuItem>
              <DropdownMenuItem @click="$colorMode.preference = 'dark'">
                {{ $t("colorMode.dark") }}
              </DropdownMenuItem>
              <DropdownMenuItem @click="$colorMode.preference = 'system'">
                {{ $t("colorMode.system") }}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ClientOnly>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button size="icon" variant="outline" aria-label="Language Menu">
              <Icon name="lucide:globe" size="18" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              v-for="{ code, name } in availableLocales"
              :key="code"
              as-child
            >
              <NuxtLink :to="$switchLocalePath(code)">
                {{ name }}
              </NuxtLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Sheet>
          <SheetTrigger class="flex md:hidden" as-child>
            <Button variant="outline" size="icon" aria-label="Header Menu">
              <Icon name="lucide:menu" size="20" />
            </Button>
          </SheetTrigger>
          <SheetContent class="p-4">
            <ReuseNavigationMenu
              class="[&_ul]:flex-col [&_ul]:items-start"
              :sheet-close="true"
            />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </header>
</template>
