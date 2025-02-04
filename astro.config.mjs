// astro.config.mjs
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
// import tailwind from "@astrojs/tailwind";
// import sitemap from "@astrojs/sitemap";
// import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://omarastro.netlify.app/",
  integrations: [preact()],
});
