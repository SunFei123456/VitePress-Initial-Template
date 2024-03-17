import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config

export default defineConfig({
  // 站点标题 就是网站的名字
  title: "测试1",
  description: "xxxxxxx",
  themeConfig: {
    // nav导航栏 左边的logo旁边的文字
    siteTitle: 'Sun_Fei',
    // 网站左上角的logo图标
    logo: '/planet.svg',


    // 右上角导航配置(路由)
    nav: [
      { text: '首页', link: '/' },
      { text: '样例', link: '/markdown-examples' },
      { text: '学习笔记', link: '/study/studyNotes' }
    ],


    sidebar: [
      {
        items: [
          {
            text: '学习笔记',
            // 开启折叠按钮
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Vue学习笔记', link: '/study/vue.md' },
              { text: 'React学习笔记', link: '/study/react.md' },
              { text: 'Node学习笔记', link: '/study/node.md' },

            ]
          },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
   

    // 配置成自己的的github地址, 当然也可以配置掘金的icon 和 掘金的地址
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 底部版权部分
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present SunFei',
    },
  },
  markdown: {
    // 代码块风格
    theme: 'material-theme-palenight',
    // theme:'github-light',
    // 代码块显示行数
    lineNumbers: true,
  },

})