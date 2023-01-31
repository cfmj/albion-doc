import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebar from './config/sidebar'

export default defineConfig({
  base: '/', // 网站基本路径 默认'/'
  title: '阿尔比恩中文攻略', // 网站的标题。这将是所有页面标题的后缀，并显示在导航栏中
  titleTemplate: '阿尔比恩中文攻略站',
  description: '阿尔比恩中文攻略', // 首页的描述

  // appearance: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#a243dd' }],
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/easternwaves.png' }],
  ],
  // outDir: '../public', // 指定 vitepress build 的输出目录 默认docs/.vitepress/dist
  // 这将在 HTML 页面中呈现为一个 <HTML lang="en-us"> 标记。
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  // 主题配置
  themeConfig: {
    logo: '/logo2.png',
    // 不显示图标旁边的标题
    // siteTitle: false,

    sidebar: sidebar,
    nav: nav,

    // docsBranch: 'master',
    outlineTitle: '在本页面',
    /* 
    editLink
    编辑链接可让您显示链接以编辑 Git 管理服务（例如 GitHub 或 GitLab）上的页面。*/
    editLink: {
      pattern: 'https://github.com/wetok-admin-doc/-/edit/main/docs/:path',
      text: '欢迎帮助更新攻略!',
    },
    /* 
    右下角显示最近更新时间文案。 */
    lastUpdatedText: '最近更新',
    // 底部描述
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2022-present cfmj',
    },
    // 社交链接
    socialLinks: [{ icon: 'discord', link: '...' }],
    // 启动页面丝滑滚动
    smoothScroll: true,
    search: true,
    searchMaxSuggestions: 10,

    algolia: {
      appId: 'JXJ92XPO74',
      apiKey: '383d0da76be1bcc585a6c42d9be71174',
      indexName: 'albion',
    },
  },
})
