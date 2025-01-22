// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  //   site: "https://omarastro.netlify.app/",
  site: "https://omarastro.netlify.app/",

  integrations: [preact()],
});