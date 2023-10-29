<script setup>
import {onMounted} from 'vue'

onMounted(() => {
  console.log("现在运行的模式是：", import.meta.env.MODE)
  console.log("现在运行的环境是不是开发环境：", import.meta.env.DEV)
  console.log("现在运行的环境是不是生产环境：", import.meta.env.PROD)
  console.log("现在的baseUrl是", import.meta.env.VITE_APP_BASE_URL)
  console.log("现在number是", import.meta.env.VITE_APP_NUMBER)
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss">
</style>
