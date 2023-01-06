---
# index.md 声明
# 是否为主页
layout: home
sidebar: auto

head:
  - - meta
    - name: description
      content: albion-doc
# Hero Section
hero:
  name: 阿尔比恩攻略
  text:
  tagline: 阿尔比恩ol 攻略集合
  actions:
    - theme: brand
      text: 马上开始   ==>
      link: /views/profiles.html
    - theme: alt
      text: 简介
      link: /views/profiles.html

# 特性分栏
features:
  - icon: ⚡️
    title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - icon: 🖖
    title: Vue驱动
    details: 享受 Vue + vite 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
  - icon: 🛠️
    title: 高性能
    details: VitePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
---
