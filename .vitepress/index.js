const themeConfig = {
    sidebar: [
        {
            text: 'Examples',

            items: [
                {
                    text: '学习笔记',
                    // 开启折叠按钮
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: 'Vue学习笔记', link: '/study/vue.md' },
                        { text: 'Node学习笔记', link: '/study/node.md' },
                        { text: 'React学习笔记', link: '/study/react.md' }
                    ]
                },
                { text: 'Markdown Examples', link: '/markdown-examples' },
                { text: 'Runtime API Examples', link: '/api-examples' }
            ]
        }
    ],

}  