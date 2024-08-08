const path = require('node:path');

module.exports = {
  title: '组件库文档',
  description: '这是一个使用 VuePress 和 vue-docgen-cli 生成的组件库文档',
  base: '/zyd-charts/',
  configureWebpack: {
    node: {
      global: true,
    },
  },
  themeConfig: {
    sidebarDepth: 1,
    sidebar: [
      {
        title: '组件',
        collapsable: false,
        children: ['/components/ZydLine'],
      },
    ],
  },
  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, '../../src/previews'),
      },
    ],
  ],
};
