module.exports = {
  title: '虚拟列表下拉框', // 设置网站标题
  base: '/ex-select/',
  description: 'Just for fun', //描述
  dest: './dist',   // 设置输出目录
  port: 2333, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '向导', link: '/baseComponents/' },
      {
        text: 'github',
        link: 'https://github.com/TaoXuSheng/focus-outside'
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/baseComponents/': [
        {
          title: '下拉组件',
          collapsable: true,
          children: [
            'base/test1',
            'base/test2'
          ]
        }
      ]
    }
  }
}