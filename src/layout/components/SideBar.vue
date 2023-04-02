<template>

  <div class="logo">
    <img src="../../assets/images/logo.png" alt="logo">
    <p class="name" v-if="!sidebarClosed">
      火星小刘
    </p>
  </div>
  
  <el-menu
      :default-active="activePath"
      class="el-menu-vertical-demo"
      :collapse="sidebarClosed"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
    >
      <template v-for="route in routes" :key="route.path">
        <el-sub-menu v-if="route.children.length > 1" :index="route.path">
          <template #title>
            <el-icon>
              <component :is="route.meta.icon"></component>
            </el-icon>
            <span>{{ route.meta.title }}</span>
          </template>

          <el-menu-item-group v-if="route.children">
            <el-menu-item v-for="child in route.children" :key="child.path" :index="child.path" @click="handleClickChild(route, child)">
              <el-icon>
                <component :is="child.meta.icon"></component>
              </el-icon>
              <span>{{ child.meta.title }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-menu-item v-else :index="route.children[0].path" @click="handleClick(route.children[0])">
          <el-icon>
            <component :is="route.children[0].meta.icon"></component>
          </el-icon>
          <template #title>{{ route.children[0].meta.title }}</template>
        </el-menu-item>
      </template>
    </el-menu>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Sidebar',
  components: {
  },
  setup() {
    const router = useRouter()
    const routes = computed(() => router.options.routes)

    const store = useStore();
    const sidebarClosed = ref(store.state.setting.sidebarClosed);
    const title = ref(store.state.setting.title);

    const handleClick = (item: any) => {
      router.push(item.path)
    }

    const handleClickChild = (route: any, child: any) => {
      if (route.redirect && route.redirect === route.path) {
        router.push(route.redirect)
      } else {
        router.push(child.path)
      }
    }

    watch(
      () => store.state.setting.sidebarClosed,
      (newVal, oldVal) => {
        sidebarClosed.value = newVal;
      }
    );

    const activePath = ref(router.currentRoute.value.path)

    router.afterEach((to, from) => {
      activePath.value = to.path;
      document.title = to.meta.title  + ' - ' + title.value
    });

    return {
      routes,
      activePath,
      handleClick,
      handleClickChild,
      sidebarClosed,
    }
  },
})
</script>

<style scoped>

.logo {
  box-sizing: border-box;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 30px;
}

.logo img {
  height: 100%;
}

.name {
  color: #fff;
  font-size: 20px;
  margin-left: 10px;
}

.el-menu {
  border-right: none;
}

</style>

