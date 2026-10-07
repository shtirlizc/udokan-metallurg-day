// @ts-check
import { defineConfig, fontProviders } from "astro/config";

const base = "/udokan-metallurg-day";

// https://astro.build/config
export default defineConfig({
  site: "https://shtirlizc.github.io",
  base,
  trailingSlash: "always",
  // site: 'https://мы-удокан.рф',
  redirects: {
    "/404": `${base}/`,
  },
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
