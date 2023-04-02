<template>
  <div class="page">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElButton, ElMessage } from 'element-plus';

export default defineComponent({
  name: 'AppMain',
  components: {
    ElButton,
  },
  setup() {
    const showMessage = () => {
      ElMessage.success('这是一条成功消息');
    };

    return {
      showMessage,
    };
  },
});
</script>

<style>
.page {
  padding: 2rem;
}
</style>
