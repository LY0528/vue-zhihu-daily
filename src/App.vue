<template>
  <div id="app">
    <router-view :key="key"></router-view>
  </div>
</template>
<script>

export default {
  computed: {//来保证路由切换时都会重新渲染触发钩子了
    key() {
        return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
 }
}
</script>
<style>
    
</style>
