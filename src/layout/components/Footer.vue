<template>
  <div class="footer">
    作者：
    <a href="https://github.com/X-Mars" target="_blank" style="margin-right: 5px;">
      火星小刘
    </a>
    与
    <a href="https://chat.openai.com" target="_blank" style="margin-left: 5px;">
      ChatGPT
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'

export default defineComponent ({

  name: 'Footer',
  components: {
  },
  setup() {

  }
})
</script>

<style scoped>

.footer {
  display: flex;
  align-items: left;
}

</style>
