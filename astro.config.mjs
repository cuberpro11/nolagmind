// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nolagmind.com',
  integrations: [sitemap()],
  redirects: {
    '/blog/first_post': '/blog',
    '/blog/seccond_post': '/blog/the-no-click-principle',
    '/blog/third_post': '/blog/perfect-ai-prompt-formula',
    '/blog/fourth_post': '/blog/full-travel-keyboards-explained',
    '/blog/fifth_post': '/blog/mastering-keyboard-shortcuts',
    '/blog/sixth_post': '/blog/my-vision-for-the-best-note-taking-app',
    '/blog/seventh_post': '/blog/why-use-a-tiling-window-manager',
    '/blog/eighth_post': '/blog/unstoppable-macos-productivity-toolkit',
  },
});