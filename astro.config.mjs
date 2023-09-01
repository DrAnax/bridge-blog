import { defineConfig } from "astro/config";
import { changeSuits } from "./src/helpers/ChangeSuits.mjs";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [changeSuits],
    }),
    tailwind(),
  ],
  markdown: {
    remarkPlugins: [changeSuits],
  },
});
