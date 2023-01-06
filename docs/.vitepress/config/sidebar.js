/* 
    网站侧边导航栏选项，'/'代表默认匹配路径
    如不设置其他匹配默认所有页面按照'/'匹配下的侧边导航栏展示。
    text代表标题，items代表子集 
*/
const sidebar = {
  '/views': [
    {
      text: '开始',
      items: [
        {
          text: '简介',
          link: '/views/profiles.html',
        },
        {
          text: '目录结构',
          link: '/views/catalogs.html',
        },
        {
          text: '关于文档',
          link: '/views/about_docs.html',
        },
      ],
    },
    {
      text: '规范',
      items: [
        {
          text: '规范',
          link: '/views/specification/specification.html',
        },
        {
          text: '代码规范',
          link: '/views/specification/code_style.html',
        },
        {
          text: 'git 规范',
          link: '/views/specification/git.html',
        },
      ],
    },
    {
      text: '组件',
      items: [
        {
          text: '组件',
          link: '/views/components/',
        },
      ],
    },
    {
      text: 'markdown',
      items: [
        {
          text: 'markdown',
          link: '/views/markdown.html',
        },
      ],
    },
    {
      text: '相关链接',
      items: [
        {
          text: '相关链接',
          link: '/views/links.html',
        },
      ],
    },
    {
      text: '相关链接222',
      items: [
        {
          text: '相关链接222',
          link: '/views/thirdPartyPlugins/thirdPartyPlugins.html',
        },
      ],
    },
    {
      text: 'Node前置知识',

      items: [
        {
          text: 'Node前置知识',
          link: '/views/specification/specification.html',
        },
        {
          text: '第三方插件',
          link: '/views/specification/code_style.html',
        },
        {
          text: '第三方插件',
          link: 'https://baidu.com',
          target: '_self',
          rel: '',
        },
      ],
    },
    {
      text: '第三方插件',
      items: [
        {
          text: '第三方插件2',
          link: '/views/specification/specification.html',
        },
        {
          text: '第三方插件',
          link: '/views/specification/code_style.html',
        },
        {
          text: '第三方插件',
          link: 'https://google.com',
          target: '_self',
          rel: '',
        },
      ],
    },
  ],
  '/links/': [
    {
      text: '组件',
      items: [
        {
          text: '组件',
          link: '/links/docs.html',
        },
      ],
    },
  ],
  '/project/': [
    {
      text: '项目链接',
      items: [
        {
          text: '',
          link: '/project/links.html',
        },
      ],
    },
  ],
}

export default sidebar
