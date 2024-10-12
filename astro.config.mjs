import { defineConfig } from "astro/config";
import react from "@astrojs/react"
import vue from "@astrojs/vue"

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), vue(), tailwind()],
})