# Nuxt 4 + Shadcn Boilerplate

A modern, full-featured boilerplate for building web applications with Nuxt 4 and Shadcn UI. This project provides a solid foundation with TypeScript, Tailwind CSS, internationalization, form validation, and more.

## ✨ Features

- **Nuxt 4**: Latest version of Nuxt with Vue 3 and TypeScript support
- **Shadcn UI**: Beautiful, accessible UI components built on Radix UI primitives
- **Tailwind CSS 4**: Utility-first CSS framework with modern features
- **TypeScript**: Full type safety throughout the application
- **Internationalization (i18n)**: Multi-language support
- **State Management**: Pinia with persisted state
- **Form Validation**: Vee-validate with Zod schemas
- **Dark Mode**: Built-in light/dark/system theme switching
- **SEO Ready**: SEO configuration with Nuxt SEO module
- **Security**: Nuxt Security module for enhanced security
- **Performance**: Optimized with Nuxt Vitalizer and other performance modules
- **Developer Experience**: ESLint and Prettier

## 🛠️ Tech Stack

### Core

- **Framework**: [Nuxt 4](https://nuxt.com)
- **UI Library**: [Shadcn Vue](https://shadcn-vue.com)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)

### State & Data

- **State Management**: [Pinia](https://pinia.vuejs.org) with persisted state
- **Form Validation**: [Vee-validate](https://vee-validate.logaretm.com) + [Zod](https://zod.dev)
- **Internationalization**: [@nuxtjs/i18n](https://i18n.nuxtjs.org)

### UI & UX

- **Icons**: [Lucide](https://lucide.dev) via [@nuxt/icon](https://github.com/nuxt-modules/icon)
- **Fonts**: [@nuxt/fonts](https://github.com/nuxt-modules/fonts)
- **Images**: [@nuxt/image](https://image.nuxt.com)
- **Notifications**: [Vue Sonner](https://vue-sonner.vercel.app)
- **Color Mode**: [@nuxtjs/color-mode](https://github.com/nuxt-modules/color-mode)

### Development & Build

- **Package Manager**: [Bun](https://bun.sh)
- **Linting**: [ESLint](https://eslint.org/) via [@nuxt/eslint](https://github.com/nuxt/eslint)
- **Formatting**: [Prettier](https://prettier.io)
- **Type Checking**: Built-in TypeScript support

### Modules & Plugins

- **Security**: [Nuxt Security](https://nuxt-security.vercel.app)
- **SEO**: [@nuxtjs/seo](https://nuxtseo.com)
- **SVG Optimization**: [Nuxt SVGO](https://github.com/nuxt-modules/svgo)
- **Performance**: [Nuxt Vitalizer](https://github.com/nuxt-modules/vitalizer)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org)
- [Bun](https://bun.sh)

### Installation & Configuration

1. Clone the repository:

```bash
git clone https://github.com/yusufalitangoz/nuxt-4-shadcn-boilerplate.git
cd nuxt-4-shadcn-boilerplate
```

2. Install dependencies:

```bash
bun i
```

3. Create `.env` file and write the values ​​from `.env.example`:

```bash
BASE_URL="http://localhost:3000"
```

4. Start development:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── app.vue                 # Main app component
│   ├── error.vue               # Error page
│   ├── assets/
│   │   └── css/
│   │       └── tailwind.css    # Tailwind CSS entry
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.vue
│   │   │   ├── Footer.vue
│   │   │   └── Logo.vue
│   │   ├── ui/                 # Shadcn UI components
│   │   │   ├── button/
│   │   │   ├── card/
│   │   │   ├── input/
│   │   │   └── ...
│   │   └── OgImage/            # Open Graph image components
│   ├── layouts/
│   │   └── default.vue         # Default layout
│   ├── pages/
│   │   └── index.vue           # Home page
│   ├── stores/                 # Pinia stores
│   │   └── link-groups.ts
│   ├── types/                  # TypeScript types
│   └── utils/                  # Utility functions
├── i18n/
│   └── locales/                # Translation files
│       ├── en.ts
│       └── tr.ts
├── public/                     # Static assets
├── server/                     # Server-side code
├── components.json             # Shadcn configuration
├── nuxt.config.ts              # Nuxt configuration
├── package.json
└── tsconfig.json
```

## 🏃 Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun generate` - Generate static site
- `bun preview` - Preview production build
- `bun lint:fix` - Lint and format code
- `bun postinstall` - Creates .nuxt directory and generates types

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Built with ❤️ using Nuxt 4 and Shadcn UI
