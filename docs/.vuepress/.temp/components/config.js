import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/dxm/git/MyNotes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.166_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "/Users/dxm/git/MyNotes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.166_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import FontIcon from "/Users/dxm/git/MyNotes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.166_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "/Users/dxm/git/MyNotes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.166_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "/Users/dxm/git/MyNotes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.166_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import VideoPlayer from "/Users/dxm/git/MyNotes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.166_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import YouTube from "/Users/dxm/git/MyNotes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.166_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import BackToTop from "/Users/dxm/git/MyNotes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.166_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "/Users/dxm/git/MyNotes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.166_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("VideoPlayer")) app.component("VideoPlayer", VideoPlayer);
    if(!hasGlobalComponent("YouTube")) app.component("YouTube", YouTube);
    
  },
  setup: () => {
      useStyleTag(`\
      @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
      `);
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
