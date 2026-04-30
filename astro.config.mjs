import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://capybarista.com",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
