<script setup lang="ts">
import { ref } from 'vue';
import { fetchLoginVerify, fetchSendCode, fetchLogin } from '../../api/user';
import { snackbar } from 'mdui/functions/snackbar.js';
import { encrypt_ecb } from '../../utils/SM4.js';
import { invoke } from '@tauri-apps/api/core';
import { useUserStore } from '../../stores/index';
import { createWindow } from '../../utils/windows/window';
import { Window } from '@tauri-apps/api/window';

import 'mdui/components/button.js';
import 'mdui/components/text-field.js';
import 'mdui/components/dialog.js';

const dialogRef = ref();
const activeTab = ref('account');
const username = ref('');
const password = ref('');
const card = ref('');
const code = ref('');
const uamtk = ref('');
const countdown = ref(0);
const isSending = ref(false);

// 创建主窗口
const createMainWindow = () => {
  createWindow({
    label: 'index',
    url: '#/index',
    title: '主界面',
    width: 1200,
    height: 700,
    decorations: false,
    resizable: true,
  });
};

// 开启弹窗
const openDialog = () => {
  dialogRef.value.open = true;
};

// 关闭弹窗
const closeDialog = () => {
  dialogRef.value.open = false;
};

// 检查登录验证
const handleLoginVerify = async () => {
  if (!username.value || !password.value) {
    snackbar({
      message: '用户名和密码不能为空',
      placement: 'top-end',
    });
    return;
  }

  const { data } = await fetchLoginVerify({
    username: username.value,
  });
  if (data.login_check_code === '3') {
    openDialog();
  }
};

// 发送验证码
const handleSendCode = async () => {
  if (isSending.value) return;

  const { data } = await fetchSendCode(username.value, card.value);

  if (data.result_code === 0) {
    isSending.value = true;
    countdown.value = 60;

    const timer = setInterval(() => {
      countdown.value--;
      if (countdown.value <= 0) {
        clearInterval(timer);
        isSending.value = false;
      }
    }, 1000);

    snackbar({
      message: '发送验证码成功',
      placement: 'top-end',
    });
  } else {
    snackbar({
      message: '发送验证码失败',
      placement: 'top-end',
    });
  }
};

// 加密密码
const encryptPassword = (password: string) => {
  return '@' + encrypt_ecb(password.trim(), 'tiekeyuankp12306');
};

// 登录
const handleLogin = async () => {
  if (code.value === '' || card.value === '') {
    snackbar({
      message: '证件号和验证码不能为空',
      placement: 'top-end',
    });
    return;
  }

  // 发送请求获取tk
  const { data } = await fetchLogin(
    code.value,
    username.value,
    encryptPassword(password.value),
  );
  console.log('证件号', card.value);
  console.log('验证码', code.value);
  console.log('用户名', username.value);
  console.log('密码', password.value);
  console.log('data', data);

  uamtk.value = data.uamtk;

  if (data.result_code === 0) {
    // 获取tk
    const res = await invoke('fetch_pwd_get_tk', { uamtk: uamtk.value });
    const JsonRes = JSON.parse(res as string);
    useUserStore().setTk(JsonRes.newapptk);
    snackbar({
      message: '登录成功',
      placement: 'top-end',
    });

    closeDialog();
    await createMainWindow();

    // 关闭当前窗口
    setTimeout(async () => {
      const currentWindow = await Window.getCurrent();
      currentWindow.close();
    }, 1000);
  } else {
    snackbar({
      message: data.result_message,
      placement: 'top-end',
    });
  }
};
</script>

<script lang="ts">
export default {
  name: 'LoginPassword',
};
</script>

<template>
  <transition name="fade" mode="out-in">
    <div class="form-container">
      <div v-if="activeTab === 'account'" class="tab-content">
        <mdui-text-field
          variant="outlined"
          label="用户名/邮箱/手机号"
          v-model="username"
          rows="1"
        />
        <mdui-text-field
          variant="outlined"
          label="密码"
          type="password"
          v-model="password"
        />
        <mdui-button @click="handleLoginVerify">登录</mdui-button>
      </div>
    </div>
  </transition>
  <!-- Dialog弹窗 -->
  <mdui-dialog close-on-overlay-click ref="dialogRef" :open="false">
    <span class="dialogTitle">短信验证</span>
    <mdui-text-field
      type="text"
      label="请输入登录账号绑定的证件号后四位"
      v-model="card"
      maxlength="4"
    />
    <mdui-text-field
      type="text"
      class="dialogCode"
      label="输入验证码"
      v-model="code"
      maxlength="6"
    />
    <mdui-button
      @click="handleSendCode"
      style="position: absolute; top: 160px; left: 350px"
      :disabled="isSending"
    >
      {{ isSending ? `${countdown}秒后重试` : '发送验证码' }}
    </mdui-button>
    <mdui-button class="dialogClose" @click="handleLogin">确定</mdui-button>
  </mdui-dialog>
</template>

<style lang="scss">
.dialogCode {
  width: 300px;
  margin-top: 25px;
}

.dialogTitle {
  margin-bottom: 20px;
  display: flex;
  font-size: 20px;
  justify-content: center;
}

.dialogClose {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
  width: 300px;
}
</style>
