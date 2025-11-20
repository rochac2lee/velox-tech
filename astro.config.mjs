import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";

export default defineConfig({
  site: "https://veloxtech.com.br",
  integrations: [
    react(),
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        "https://veloxtech.com.br/",
        "https://veloxtech.com.br/about",
        "https://veloxtech.com.br/terms",
        "https://veloxtech.com.br/privacy-policy",
      ],
    }),
  ],
  vite: {
    envPrefix: "VITE_",
    resolve: {
      alias: {
        "@axios": fileURLToPath(
          new URL("./src/plugins/axios.js", import.meta.url)
        ),
      },
    },
    ssr: {
      noExternal: ["smart-webcomponents-react"],
    },
  },
});
