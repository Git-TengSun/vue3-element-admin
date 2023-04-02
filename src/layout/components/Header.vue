<template>
  <div class="navbar">
    <div class="left">
      <el-icon v-if="sidebarClosed" @click="toggleSidebar"><Expand /></el-icon>
      <el-icon v-else @click="toggleSidebar"><Fold /></el-icon>
    </div>
    <div class="right">
      <img src="../../assets/images/logo.png" alt="logo" class="logo">
      <el-dropdown trigger="click" class="dropdown-option">
        <span class="el-dropdown-link username">
          {{ username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="changePassword">修改密码</el-dropdown-item>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { RootState } from '../../store/index';

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      username: '火星小刘'
    };
  },
  setup() {
    const store = useStore<RootState>();
    const { headerHeight } = store.state.setting;
    document.documentElement.style.setProperty('--logo-height', headerHeight + 'px' || '');
    const sidebarClosed = computed(() => store.state.setting.sidebarClosed);
    function toggleSidebar() {
      store.commit('toggleSidebar');
      if (sidebarClosed.value) {
        console.log('sidebarClosed.value', sidebarClosed.value);
        store.commit('setAsideWidth', 100);
      } else {
        store.commit('setAsideWidth', 200);
      }
    }

    function logout() {
      // Logout logic here
    }

    function changePassword() {
      // Change password logic here
    }

    return {
      logout,
      changePassword,
      sidebarClosed,
      toggleSidebar
    };
  },
});
</script>

<style scoped>

.navbar {
}

.dropdown-option {
  line-height: 50px;
  font-size: 16px;
}

.left {
  position: fixed;
  font-size: 30px;
  float: left;
}

.right {
  position: relative;
  height: 100%;
  float: right;
  margin-right: 20px;
}

.logo {
  height: var(--logo-height);
  margin-right: 10px;
}

.username {
  color: #000;
  cursor: pointer;
}

.divider {
  top: 30px;
}

</style>
