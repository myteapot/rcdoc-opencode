import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

import theme from "./theme.js";

const base = "/docs/";

export default defineUserConfig({
  base,
  lang: "zh-CN",
  title: "Right Code文档",
  theme,
  bundler: viteBundler({
    viteOptions: {
      base,
    },
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
