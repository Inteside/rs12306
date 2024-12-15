<script setup>
import TabBar from './components/TabBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// 获取当前路由并打印出来
console.log(router.currentRoute.value.path);
</script>

<template>
  <div class="main-container">
    <TabBar />
    <div class="content-container" style="margin-top: 50px">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.main-container {
  display: flex;
  width: 100%;
  height: 100vh;

  .content-container {
    flex: 1;
    overflow: auto;
  }
}
</style>
