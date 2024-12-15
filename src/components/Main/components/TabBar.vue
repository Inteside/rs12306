<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Train, Settings, List } from '@vicons/ionicons5';

const router = useRouter();
const route = useRoute();

// 当前激活的导航项
const activeTab = ref(route.path);

// 导航配置
const navItems = [
  { path: '/index/GrabTickets', icon: Train, text: '抢票' },
  { path: '/index/Administration', icon: List, text: '管理' },
  { path: '/index/SetUp', icon: Settings, text: '设置' },
];

// 处理导航点击
const handleNavClick = (path: string) => {
  activeTab.value = path;
  router.push(path);
};
</script>

<template>
  <section class="TabBar">
    <n-flex vertical size="large" class="nav-btn-container">
      <n-button
        v-for="item in navItems"
        :key="item.path"
        text
        class="nav-btn"
        :class="{ active: activeTab === item.path }"
        @click="handleNavClick(item.path)"
      >
        <div class="btn-content">
          <n-icon
            size="30"
            :color="activeTab === item.path ? '#006e1c' : '#61666D'"
          >
            <component :is="item.icon" />
          </n-icon>
          <span>{{ item.text }}</span>
        </div>
      </n-button>
    </n-flex>
  </section>
</template>

<style lang="scss">
.TabBar {
  width: 65px;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f6f7f8;

  .nav-btn-container {
    display: flex;
    flex-direction: column;
    padding-top: 80px;

    .nav-btn {
      margin-bottom: 15px;

      &.active {
        .btn-content {
          span {
            color: #006e1c;
          }
        }
      }

      .btn-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
      }

      span {
        font-size: 12px;
        color: #61666d;
      }
    }
  }
}
</style>
