// src/setting.ts

// 导出默认的设置状态
export default {
  // 是否显示设置的左侧面板
  sidebarClosed: false,
  // 侧边栏的宽度、头部的高度、底部的高度
  // 侧边栏的高度自适应屏幕高度
  // 头部的宽度 = 屏幕宽度 - 侧边栏的宽度
  // 底部的宽度 = 屏幕宽度 - 侧边栏的宽度
  // Main的宽度 = 屏幕宽度 - 侧边栏的宽度
  // Main的高度 = 屏幕高度 - 头部的高度 - 底部的高度
  asideWidth: 200,
  headerHeight: 50,
  footerHeight: 25,
  // 浏览器title
  title: 'vue3-element-admin',
};
