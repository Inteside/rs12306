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
      InternalSelection: {
        textColor: '#18A058',
      },
    },
  },
};
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
        <mdui-icon-crop-square></mdui-icon-crop-square>
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
      <router-view></router-view>
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

  &-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    user-select: none;
    -webkit-user-select: none;
    position: relative;

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
</style>
