<script setup lang="ts">
import { ref } from 'vue';
import LoginPassword from './LoginPassword.vue';
import QrLogin from './QrLogin.vue';

const activeTab = ref('account');
const loginType = ref('password');

const switchTab = (tab: string) => {
  activeTab.value = tab;
};
</script>

<template>
  <div class="login">
    <div class="tabBar">
      <div class="tabs">
        <span
          :class="{ active: activeTab === 'account' }"
          @click="switchTab('account')"
          >账号登录</span
        >
        <span
          class="qrLogin"
          :class="{ active: activeTab === 'qrcode' }"
          @click="switchTab('qrcode')"
          >扫码登录</span
        >
        <div class="slider" :class="activeTab"></div>
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="activeTab === 'account'">
          <LoginPassword />
        </div>
        <div v-else-if="activeTab === 'qrcode'">
          <QrLogin />
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
.login {
  display: flex;
  width: 100%;
  height: 100vh;
  .tabBar {
    margin: 10% auto;
    width: 400px;

    .tabs {
      display: flex;
      margin-bottom: 20px;
      position: relative;

      span {
        flex: 1;
        text-align: center;
        padding: 10px;
        cursor: pointer;

        &.active {
          color: #006e1c;
        }
      }

      span:hover {
        color: #006e1c;
        transition: all 0.4s ease-in-out;
      }

      .slider {
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 50%;
        background-color: #006e1c;
        transition: transform 0.3s ease-in-out;

        &.account {
          transform: translateX(0);
        }

        &.qrcode {
          transform: translateX(100%);
        }
      }
    }
  }
}

// 过渡动画样式
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
