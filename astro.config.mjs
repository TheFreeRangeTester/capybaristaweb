import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://capybarista.studio",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
