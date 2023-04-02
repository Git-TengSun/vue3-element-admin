// router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CommonLayout from '../layout/index.vue';


// 导入路由组件
import Home from '../views/Home.vue';
import Menu1 from '../views/Menu1.vue';
import Menu2 from '../views/Menu2.vue';

const routes: Array<RouteRecordRaw> = [
  // 定义路由
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    meta: {
      title: '首页',
      icon: 'HomeFilled'
    },
    component: CommonLayout, // 将 CommonLayout 组件作为路由页面的布局
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页',
          icon: 'HomeFilled'
        }
      },
    ]
  },
  {
    path: '/menu',
    name: 'Menu',
    redirect: '/menu/menu1',
    meta: {
      title: '菜单',
      icon: 'Menu'
    },
    component: CommonLayout, // 将 CommonLayout 组件作为路由页面的布局
    children: [
      {
        path: '/menu/menu1',
        name: 'Menu1',
        component: Menu1,
        meta: {
          title: '菜单1',
          icon: 'Menu'
        }
      },
      {
        path: '/menu/menu2',
        name: 'Menu2',
        component: Menu2,
        meta: {
          title: '菜单2',
          icon: 'Menu'
        }
      }
    ]
  }
];

const router = createRouter({
  // 使用 HTML5 History 模式
  history: createWebHistory(),
  routes
});

// 路由拦截器
router.beforeEach((to, from, next) => {
  // TODO: 在这里可以添加一些逻辑来拦截路由，比如检查用户是否已经登录
  next();
});

export default router;
