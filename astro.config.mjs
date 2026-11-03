// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { loadEnv } from "vite";

// Environment variables (no prefix filter), without relying on Node typings.
const env = loadEnv("production", ".", "");

// The hosting build (мы-удокан.рф) overrides these, see .github/workflows/deploy-hosting.yml
const base = env.SITE_BASE ?? "/udokan-metallurg-day";

// https://astro.build/config
export default defineConfig({
  site: env.SITE_URL ?? "https://shtirlizc.github.io",
  base,
  trailingSlash: "ignore",
  // site: 'https://мы-удокан.рф',
  redirects: {
    "/404": `${base.replace(/\/$/, "")}/`,
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
