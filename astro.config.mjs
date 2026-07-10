// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.npm({ remote: false }),
      name: "Onest Variable",
      cssVariable: "--font-onest",
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
      fallbacks: ["sans-serif"],
      options: {
        package: "@fontsource-variable/onest",
      },
    },
  ],
});
