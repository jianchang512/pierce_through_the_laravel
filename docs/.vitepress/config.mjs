import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "穿透Laravel",
  description: "穿透Laravel",
  themeConfig: {
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '开始阅读', link: '/0.md' }
    ],

    sidebar: [
      {
        text: '穿透Laravel',
        link:"/0.md",
        items: [
          { text: '第一章：基础环境搭建', link: '/1.md' },
          { text: '第二章：核心代码结构分析', link: '/2.md' },
          { text: '第三章：实现自动加载', link: '/3.md' },
          { text: '第四章：艰难的开始', link: '/4.md' },
          { text: '第五章：陷入困境', link: '/5.md' },
          { text: '第六章：继续前行', link: '/6.md' },
          { text: '第七章：解析HTTP内核', link: '/7.md' },
          { text: '第八章：处理请求', link: '/8.md' },
          { text: '第九章：渲染页面', link: '/9.md' },
          { text: '第十章：终止程序', link: '/10.md' },
          { text: '附录一：断点测试和中断测试', link: '/11.md' },
          { text: '附录二：Container之instance方法', link: '/12.md' },
          { text: '附录三：Container之resolve方法', link: '/13.md' },
          { text: '附录四：Container之bind方法', link: '/14.md' },
          { text: '附录五：Container之resolveDependencies方法', link: '/15.md' },
          { text: '附录六：Application之register方法', link: '/16.md' },
          { text: '附录七：Dispatcher之dispatch方法', link: '/17.md' },
          { text: '附录八：扩展自动注册(Package auto discovery)', link: '/18.md' },
          { text: '附录九：Route之findRoute方法', link: '/19.md' },
          { text: '附录十：Route之run方法', link: '/20.md' },
          { text: '附录十一：ServiceProvider类的注册和引导', link: '/21.md' },
          { text: '结束语', link: '/22.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/youngtrix/pierce_through_the_laravel' }
    ]
  }
})
