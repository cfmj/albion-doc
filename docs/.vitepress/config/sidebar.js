/* 
    网站侧边导航栏选项，'/'代表默认匹配路径
    如不设置其他匹配默认所有页面按照'/'匹配下的侧边导航栏展示。
    text代表标题，items代表子集 
*/

function walkthrough() {
  return [
    {
      text: '简介',
      items: [
        {
          text: '攻略介绍',
          link: '/walkthrough/',
        },
      ],
    },
    {
      text: '说明书',
      collapsible: true,
      items: [
        {
          text: '说明书',
          link: '/walkthrough/instructions',
        },
        {
          text: '附录一 - 名词对照表',
          link: '/walkthrough/appendix-1',
        },
        {
          text: '附录二 - 完成自己的Build',
          link: '/walkthrough/appendix-2',
        },
      ],
    },
    {
      text: '采集',
      collapsible: true,
      items: [
        {
          text: '钓鱼',
          link: '/links/docs.html',
        },
      ],
    },
    {
      text: '工匠',
      collapsible: true,
      items: [
        {
          text: '钓鱼',
          link: '/links/docs.html',
        },
      ],
    },
    {
      text: '地图',
      collapsible: true,
      items: [
        {
          text: '阿瓦隆',
          link: '/links/docs.html',
        },
      ],
    },
  ]
}

const sidebar = {
  '/walkthrough/': walkthrough(),
}

export default sidebar
