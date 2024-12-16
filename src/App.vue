<script setup>
// 引入登录组件
// import Login from './components/Login/Login.vue';
import { ref } from 'vue';
import LoginIndex from './components/Login/LoginIndex.vue';
import { snackbar } from 'mdui/functions/snackbar.js';
import { setColorScheme } from 'mdui/functions/setColorScheme.js';
import { Window } from '@tauri-apps/api/window';
import { zhCN, dateZhCN, NConfigProvider, darkTheme } from 'naive-ui';

// 图标库
import '@mdui/icons/close.js';
import '@mdui/icons/crop-square.js';
import '@mdui/icons/horizontal-rule.js';

// 获取当前窗口
const appWindow = Window.getCurrent();
setColorScheme('#00000000');
const themeOverrides = {
  common: {
    primaryColor: '#18A058', //浅绿色
  },
  Button: {
    textColor: '#18A058',
  },
  Select: {
    peers: {
      // 下拉框样式
      // InternalSelection: {
      //   textColor: '#18A058',
      // },
    },
  },
};

const isMaximized = ref(false);

// 监听窗口最大化状态
appWindow.onResized(() => {
  appWindow.isMaximized().then((maximized) => {
    isMaximized.value = maximized;
  });
});
</script>

<template>
  <div class="html">
    <!-- 右侧标题栏 -->
    <div data-tauri-drag-region class="titlebar">
      <div
        class="titlebar-button"
        id="titlebar-minimize"
        @click="() => appWindow.minimize()"
      >
        <mdui-icon-horizontal-rule></mdui-icon-horizontal-rule>
      </div>
      <div
        class="titlebar-button"
        id="titlebar-maximize"
        @click="() => appWindow.toggleMaximize()"
      >
        <template v-if="isMaximized">
          <!-- 还原图标  -->
          <svg
            t="1734255167103"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="19598"
            width="200"
            height="200"
          >
            <path
              d="M416 128a32 32 0 0 0 0 64h192A224 224 0 0 1 832 416v192a32 32 0 0 0 64 0v-192A288 288 0 0 0 608 128h-192z"
              p-id="19599"
            ></path>
            <path
              d="M288 256A160 160 0 0 0 128 416v320A160 160 0 0 0 288 896h320a160 160 0 0 0 160-160v-320A160 160 0 0 0 608 256h-320zM192 416A96 96 0 0 1 288 320h320A96 96 0 0 1 704 416v320A96 96 0 0 1 608 832h-320A96 96 0 0 1 192 736v-320z"
              p-id="19600"
            ></path>
          </svg>
        </template>
        <mdui-icon-crop-square v-else></mdui-icon-crop-square>
      </div>
      <div
        class="titlebar-button"
        id="titlebar-close"
        @click="() => appWindow.close()"
      >
        <mdui-icon-close />
      </div>
    </div>

    <n-config-provider
      :locale="zhCN"
      :theme-overrides="themeOverrides"
      :date-locale="dateZhCN"
      :theme="undefined"
    >
      <n-message-provider>
        <router-view></router-view>
      </n-message-provider>
      <!-- 全局样式 -->
      <n-global-style />
    </n-config-provider>
  </div>
</template>

<style lang="scss">
$primary-color: #006e1c;
$danger-color: #ff4d4f;

* {
  padding: 0;
  margin: 0;
  user-select: none; // 禁止用户选择文本
}

.titlebar {
  padding: 10px;
  height: 30px;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  &[data-tauri-drag-region] {
    -webkit-app-region: drag;
  }

  &-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    user-select: none;
    -webkit-user-select: none;
    position: relative;
    -webkit-app-region: no-drag;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: $primary-color;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }

    mdui-icon-horizontal-rule,
    mdui-icon-crop-square,
    mdui-icon-close {
      position: relative;
      z-index: 1;
    }
  }
}

#titlebar-close {
  &:hover {
    color: $danger-color;

    &::after {
      background-color: $danger-color;
    }
  }
}

.titlebar-button svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}
</style>
