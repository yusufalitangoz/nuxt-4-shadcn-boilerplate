import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "@typescript-eslint/unified-signatures": "off",
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "vue/html-self-closing": "off",
  },
});
