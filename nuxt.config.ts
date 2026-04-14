import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/color-mode",
    "@vee-validate/nuxt",
    "@nuxtjs/fontaine",
    "nuxt-vitalizer",
    "nuxt-security",
    "nuxt-ai-ready",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/seo",
    "@nuxt/icon",
    "nuxt-svgo",
  ],
  css: ["~/assets/css/tailwind.css"],
  compatibilityDate: "2026-03-22",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      {
        weights: [400, 500, 600],
        name: "Inter",
        global: true,
      },
    ],
  },
  nitro: {
    preset: "cloudflare-module",
    cloudflare: {
      wrangler: {
        name: "nuxt-4-shadcn-boilerplate",
        vars: {
          NUXT_PUBLIC_I18N_BASE_URL: "https://boilerplate.yali.dev",
        },
        d1_databases: [
          {
            database_id: "d33a4598-7226-41c4-86a6-b0d79f256baf",
            database_name: "ai-ready-db",
            binding: "AI_READY_DB",
          },
        ],
        observability: {
          logs: { enabled: true, invocation_logs: true },
          enabled: true,
        },
      },
      deployConfig: true,
      nodeCompat: true,
    },
  },
  aiReady: {
    llmsTxt: {
      sections: [
        {
          title: "Pages",
          description: "Application routes and pages",
          links: [
            {
              title: "Home",
              href: "/",
              description:
                "Main landing page with external links to Nuxt, Shadcn, and GitHub. Includes package.json display and example form.",
            },
            {
              title: "Error",
              href: "/error",
              description: "Error page displaying HTTP status code.",
            },
          ],
        },
        {
          title: "Layout Components",
          description: "Core layout components for page structure",
          links: [
            {
              title: "Header",
              href: "/components/layout/header",
              description:
                "Fixed header with navigation menu, logo, color mode toggle, language switcher dropdown, and mobile responsive sheet menu.",
            },
            {
              title: "Footer",
              href: "/components/layout/footer",
              description:
                "Footer with logo, social media links, navigation links, and copyright year.",
            },
            {
              title: "Logo",
              href: "/components/layout/logo",
              description: "Logo component with link to home page.",
            },
          ],
        },
        {
          title: "State Management",
          description: "Pinia stores for application state",
          links: [
            {
              title: "Link Groups Store",
              href: "/stores/link-groups",
              description:
                "Pinia store managing general navigation links and social media links.",
            },
          ],
        },
        {
          title: "Types",
          description: "TypeScript type definitions",
          links: [
            {
              title: "Link",
              href: "/types",
              description:
                "Link type with optional icon, required name and to path.",
            },
            {
              title: "LinkGroup",
              href: "/types",
              description:
                "LinkGroup type containing array of links and group name.",
            },
          ],
        },
        {
          title: "UI Components - Shadcn Vue",
          description:
            "Accessible UI components built on Reka UI primitives, styled with Tailwind CSS and using class-variance-authority for variants",
          links: [
            {
              title: "Shadcn Vue Components",
              href: "/components/ui",
              description: "Collection of accessible UI components.",
            },
          ],
        },
        {
          title: "Utilities",
          description: "Helper functions and utilities",
          links: [
            {
              title: "cn() - Class Name Utility",
              href: "/utils",
              description:
                "Combines clsx and tailwind-merge for optimal className handling. Merges Tailwind classes intelligently.",
            },
          ],
        },
        {
          title: "Internationalization",
          description: "Multi-language support.",
          links: [
            {
              title: "Turkish (tr)",
              href: "/",
              description:
                "Default language. Translations for site name, descriptions, navigation, color modes, and error messages.",
            },
            {
              title: "English (en)",
              href: "/en",
              description:
                "Secondary language. Complete translation coverage for all UI strings.",
            },
          ],
        },
        {
          title: "Core Technologies",
          description: "Main framework and language",
          links: [
            {
              title: "Nuxt",
              href: "/",
              description:
                "Vue based full-stack framework with file-based routing, auto-imports, server-side rendering, and hybrid rendering modes.",
            },
            {
              title: "Vue",
              href: "/",
              description:
                "Progressive JavaScript framework with Composition API, reactive refs, computed properties, and template syntax.",
            },
            {
              title: "TypeScript",
              href: "/",
              description:
                "Typed superset of JavaScript with strict typeCheck enabled.",
            },
          ],
        },
        {
          title: "Styling & CSS",
          description: "Styling technologies",
          links: [
            {
              title: "Tailwind CSS",
              href: "/",
              description:
                "Utility-first CSS framework, oklch color system, CSS variables, and @theme inline configuration.",
            },
            {
              title: "CSS Variables",
              href: "/",
              description:
                "Design tokens defined as CSS variables for background, foreground, card, primary, secondary, muted, destructive, border, input, ring, and chart colors.",
            },
            {
              title: "Dark Mode",
              href: "/",
              description:
                "Dark mode via .dark class on html element. Uses color mode for preference management (light/dark/system).",
            },
            {
              title: "Inter Font",
              href: "/",
              description: "Google Font loaded, applied globally to body.",
            },
          ],
        },
        {
          title: "State & Forms",
          description: "State management and form handling",
          links: [
            {
              title: "Pinia",
              href: "/",
              description:
                "Official Vue state management with setup stores syntax. Integrates with pinia-plugin-persistedstate for localStorage persistence.",
            },
            {
              title: "Vee-validate + Zod",
              href: "/",
              description:
                "Form validation using useForm, handleSubmit, and toTypedSchema. Zod schemas with jitless mode enabled via z.config().",
            },
            {
              title: "VueUse",
              href: "/",
              description:
                "Vue composition utilities via @vueuse/nuxt for common Vue patterns.",
            },
          ],
        },
        {
          title: "UI & Icons",
          description: "UI components and icon libraries",
          links: [
            {
              title: "Shadcn Vue",
              href: "/",
              description:
                "Accessible component library built on Reka UI primitives. Configured with 'new-york' style and zinc base color.",
            },
            {
              title: "Reka UI",
              href: "/",
              description:
                "Headless UI primitives providing accessible components without styling.",
            },
            {
              title: "Lucide Icons",
              href: "/",
              description:
                "Icon library via @nuxt/icon in SVG mode. Includes lucide and bootstrap icon sets (bi, simple-icons).",
            },
            {
              title: "Nuxt Image",
              href: "/",
              description:
                "Image optimization via @nuxt/image with NuxtImg component for automatic srcset and format conversion.",
            },
          ],
        },
        {
          title: "Developer Tools",
          description: "Development and build tools",
          links: [
            {
              title: "Nuxt DevTools",
              href: "/",
              description:
                "Built-in development tools enabled for debugging and inspection.",
            },
            {
              title: "ESLint",
              href: "/",
              description:
                "Code linting. lint:fix script runs eslint --fix, prettier --write, and typecheck.",
            },
            {
              title: "Prettier",
              href: "/",
              description:
                "Code formatting with consistent style across the project.",
            },
            {
              title: "Nuxt SVGO",
              href: "/",
              description:
                "SVG optimization plugin for Nuxt to compress and optimize SVG files.",
            },
          ],
        },
        {
          title: "Performance & Security",
          description: "Optimization and security modules",
          links: [
            {
              title: "Nuxt Vitalizer",
              href: "/",
              description:
                "Performance optimization module for reducing bundle size.",
            },
            {
              title: "Nuxt Security",
              href: "/",
              description:
                "Security headers and protections. robots blockNonSeoBots enabled.",
            },
            {
              title: "Nuxt SEO",
              href: "/",
              description:
                "SEO toolkit with defineOgImage, useLocaleHead, and other SEO utilities.",
            },
            {
              title: "Nuxt Fonts",
              href: "/",
              description:
                "Font optimization with automatic font subsetting and display swap.",
            },
            {
              title: "Nuxt Fontaine",
              href: "/",
              description:
                "Font metrics fallback generation to prevent CLS from web fonts.",
            },
          ],
        },
        {
          title: "Deployment",
          description: "Deployment platforms and configuration",
          links: [
            {
              title: "Cloudflare Workers",
              href: "/",
              description:
                "Configured via wrangler.jsonc for Cloudflare Workers deployment.",
            },
            {
              title: "Package Manager",
              href: "/",
              description:
                "Bun as the primary package manager for faster installs and builds.",
            },
          ],
        },
        {
          title: "Project Scripts",
          description: "Available npm/bun scripts",
          links: [
            {
              title: "bun dev",
              href: "/",
              description: "Start development server with hot reload.",
            },
            {
              title: "bun build",
              href: "/",
              description: "Build for production.",
            },
            {
              title: "bun generate",
              href: "/",
              description: "Generate static site.",
            },
            {
              title: "bun preview",
              href: "/",
              description: "Preview production build locally.",
            },
            {
              title: "bun lint:fix",
              href: "/",
              description:
                "Run ESLint with --fix, Prettier write, and typecheck.",
            },
            {
              title: "bun postinstall",
              href: "/",
              description:
                "Run nuxt prepare to generate .nuxt directory and types.",
            },
          ],
        },
      ],
      notes: [
        "Contributing: This is an open source boilerplate project. Fork the repository, create a feature branch, commit changes, and open a Pull Request.",
        "License: MIT License - see LICENSE file for details.",
        "Repository: https://github.com/yusufalitangoz/nuxt-shadcn-boilerplate",
      ],
    },
    database: {
      bindingName: "AI_READY_DB",
      type: "d1",
    },
    contentSignal: {
      aiInput: true,
      search: true,
    },
    runtimeSync: true,
    indexNow: true,
  },
  i18n: {
    defaultLocale: "tr",
    locales: [
      {
        language: "tr-TR",
        name: "Türkçe",
        file: "tr.ts",
        code: "tr",
      },
      {
        language: "en-US",
        name: "English",
        file: "en.ts",
        code: "en",
      },
    ],
  },
  ogImage: {
    security: {
      secret: "override-at-runtime",
      strict: true,
    },
  },
  robots: {
    blockNonSeoBots: true,
  },
  veeValidate: {
    componentNames: {
      Field: "VeeField",
    },
  },
  typescript: {
    typeCheck: true,
  },
  imports: {
    dirs: ["types"],
  },

  devtools: {
    enabled: true,
  },
  icon: {
    mode: "svg",
  },
  shadcn: {
    prefix: "",
  },
});
