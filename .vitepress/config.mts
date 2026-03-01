import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'a2ac',
  description: 'An open guide to how AI agents talk to each other',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'a2ac',

    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Landscape', link: '/landscape' },
      { text: 'Open Questions', link: '/open-questions' },
      {
        text: 'Projects',
        collapsed: false,
        items: [
          { text: 'A2A', link: '/projects/a2a' },
          { text: 'ACP / BeeAI', link: '/projects/acp-beeai' },
          { text: 'AGNTCY', link: '/projects/agntcy' },
          { text: 'AMTP', link: '/projects/amtp' },
          { text: 'ANP', link: '/projects/anp' },
          { text: 'aWeb', link: '/projects/aweb' },
          { text: 'FIPA-ACL', link: '/projects/fipa-acl' },
          { text: 'MCP', link: '/projects/mcp' },
          { text: 'MCP Agent Mail', link: '/projects/mcp-agent-mail' },
          { text: 'NANDA', link: '/projects/nanda' },
          { text: 'NLIP', link: '/projects/nlip' },
          { text: 'Pi-Messenger', link: '/projects/pi-messenger' },
        ]
      }
    ],

    nav: [
      { text: 'GitHub', link: 'https://github.com/awebai/a2ac' }
    ],

    search: { provider: 'local' },
  },

  appearance: 'dark',
  cleanUrls: true,

  srcExclude: [
    'reddit-post.md',
    'AGENTS.md',
  ],
})
