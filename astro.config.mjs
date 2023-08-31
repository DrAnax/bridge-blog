import { defineConfig } from "astro/config";
import { changeSuits } from "./markdown-components/ChangeSuits.mjs";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    remarkPlugins: [changeSuits]
  }), tailwind()],
  markdown: {
    remarkPlugins: [changeSuits]
  }
});