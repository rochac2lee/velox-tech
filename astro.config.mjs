import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from "url";

export default defineConfig({
  integrations: [react(), tailwind()],
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
