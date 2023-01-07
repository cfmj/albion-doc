/* 
    网站侧边导航栏选项，'/'代表默认匹配路径
    如不设置其他匹配默认所有页面按照'/'匹配下的侧边导航栏展示。
    text代表标题，items代表子集 
*/

function walkthrough() {
  return [
    {
      text: '说明书',
      collapsible: true,
      items: [
        {
          text: '简介',
          link: '/walkthrough/instructions/',
        },
        {
          text: '游戏特色',
          link: '/walkthrough/instructions/1.md',
        },
        {
          text: '角色成长系统',
          link: '/walkthrough/instructions/2.md',
        },
        {
          text: '世界地图与阵营',
          link: '/walkthrough/instructions/3.md',
        },
        {
          text: '地图区域与玩家对战规则',
          link: '/walkthrough/instructions/4.md',
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
