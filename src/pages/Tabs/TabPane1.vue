<script setup lang="ts">
    defineProps<{
    tabId?: string
    }>()
</script>

<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-2">Tab 面板內容</h2>
    <p>這是 <strong>{{ tabId }}</strong> 的內容區塊。</p>
  </div>
</template>

<style scoped>
/* 你可以在這裡加入各個 tab 共用的樣式 */
</style>
