<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <SideBar />
      </el-aside>
      <el-container>
        <el-header class="header" :height="headerHeight + 'px'">
          <Header />
        </el-header>
        <el-main class="main">
          <AppMain />
        </el-main>
        <el-footer class="footer" :height="footerHeight + 'px'">
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed, watch } from 'vue';
import { RootState } from '../store/index';
import { AppMain, SideBar, Footer, Header } from './components';

export default {
  name: 'CommonLayout',

  components: {
    AppMain,
    SideBar,
    Footer,
    Header
  },

  setup() {
    const store = useStore<RootState>();
    var { asideWidth, headerHeight, footerHeight } = store.state.setting;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const asideHeight = screenHeight;
    const headerWidth = screenWidth - asideWidth;
    const footerWidth = screenWidth - asideWidth;
    const mainWidth = screenWidth - asideWidth;
    const mainHeight = screenHeight - headerHeight - footerHeight;
    document.documentElement.style.setProperty('--header-width', headerWidth + 'px' || '');
    document.documentElement.style.setProperty('--footer-width', footerWidth + 'px' || '');
    document.documentElement.style.setProperty('--aside-width', asideWidth + 'px' || '');
    document.documentElement.style.setProperty('--main-width', mainWidth + 'px' || '');
    document.documentElement.style.setProperty('--main-height', mainHeight + 'px' || '');

    const app = document.querySelector('#app') as HTMLElement;
    if (app) {
      app.style.margin = '0';
      app.style.padding = '0';
    }

    watch(
      () => store.state.setting.asideWidth,
      (newVal, oldVal) => {
        asideWidth = newVal;
        console.log('asideWidth', asideWidth);
        changeSize();
      }
    );

    function changeSize() {
      // Change password logic here
      console.log('changeSize');
      const asideHeight = screenHeight;
      const headerWidth = screenWidth - asideWidth;
      const footerWidth = screenWidth - asideWidth;
      const mainWidth = screenWidth - asideWidth;
      const mainHeight = screenHeight - headerHeight - footerHeight;
      document.documentElement.style.setProperty('--header-width', headerWidth + 'px' || '');
      document.documentElement.style.setProperty('--footer-width', footerWidth + 'px' || '');
      document.documentElement.style.setProperty('--aside-width', asideWidth + 'px' || '');
      document.documentElement.style.setProperty('--main-width', mainWidth + 'px' || '');
      document.documentElement.style.setProperty('--main-height', mainHeight + 'px' || '');
    }

    return {
      asideWidth,
      headerHeight,
      footerHeight,
      headerWidth,
      footerWidth
    };
  },
};
</script>

<style scoped>
.aside {
  height: 100vh;
  background-color: #545c64;
  width: var(--aside-width);
}
.header {
  background-color: rgba(255, 255, 255, 0);
  width: var(--header-width);
  border-bottom: 1px solid rgb(208, 201, 201);
}
.main {
  /* background-color: rgb(239, 14, 171); */
  width: var(--main-width);
  height: var(--main-height);
}
.footer {
  background-color: #d3d7db;
  width: var(--footer-width);
}
</style>
