<script setup lang="ts">
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';
import { fetchBaseImg, fetchCheckqr } from '../../api/user';
import { snackbar } from 'mdui/functions/snackbar.js';
import { useUserStore } from '../../stores/index';
import { invoke } from '@tauri-apps/api/core';
import { createWindow } from '../../utils/windows/window';
import { Window } from '@tauri-apps/api/window';

// 添加API响应的接口定义
interface ApiResponse<T> {
  data: T;
}

interface QrImageData {
  image: string;
  uuid: string;
}

interface QrCheckResponse {
  result_code: string;
  uamtk: string;
  result_message: string;
  // 根据实际API响应添加其他必要的字段
}

const BaseImageData = ref<QrImageData>({ image: '', uuid: '' });
let timer: number | undefined = undefined;
const hasShownScanSuccess = ref(false);

const uamtk = ref('');

// 创建主窗口
const createMainWindow = async () => {
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

// 修改检查二维码状态的��数，添加类型声明
const checkQrStatus = async () => {
  const { data }: ApiResponse<QrCheckResponse> = await fetchCheckqr(
    BaseImageData.value.uuid,
    'otn',
  );
  console.log('二维码状态:', data);
  // 处理不同的状态码
  if (data.result_code === '2') {
    uamtk.value = data.uamtk || '';

    console.log('我是uamtk', uamtk.value);
    useUserStore().setUamtk(uamtk.value);

    // 发送请求获取tk
    const res = await invoke('fetch_qr_get_tk', { uamtk: uamtk.value });

    const resJson = JSON.parse(res as string);
    useUserStore().setTk(resJson.newapptk);
    // 扫码登录成功
    clearInterval(timer);
    timer = undefined;
    snackbar({
      message: data.result_message,
      placement: 'top-end',
    });

    await createMainWindow();

    setTimeout(async () => {
      const currentWindow = await Window.getCurrent();
      currentWindow.close();
    }, 1000);
  } else if (data.result_code === '1' && !hasShownScanSuccess.value) {
    // 只在第一次检测到扫码成功时显示提示
    hasShownScanSuccess.value = true;
    clearInterval(timer);
    // 设置新的定时器,以检查二维码是否过期
    timer = setInterval(checkQrStatus, 5000);
    snackbar({
      message: '扫码成功,等待确认',
      placement: 'top-end',
    });
  } else if (data.result_code === '3') {
    // 二维码已过期
    clearInterval(timer);
    timer = undefined;
    snackbar({
      message: '二维码已过期',
      placement: 'top-end',
    });
  }
};

// 修改onBeforeMount中的类型声明
onBeforeMount(async () => {
  const { data }: ApiResponse<QrImageData> = await fetchBaseImg('otn');
  BaseImageData.value = data;
  console.log(data);

  // 启动定时器，每秒检查一次
  timer = setInterval(checkQrStatus, 1000);
});

// 组件销毁前清除定时器
onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer);
    timer = undefined;
  }
});
</script>

<template>
  <!-- 扫码登录 -->
  <div class="tab-content">
    <img
      :src="'data:image/jpg;base64,' + BaseImageData.image"
      alt="登录二维码"
    />
    <p class="qrcode-tip">请使用APP扫码登录</p>
  </div>
</template>

<style lang="scss">
.tab-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
  }

  .qrcode-tip {
    color: #666;
    font-size: 14px;
  }
}
</style>

<script lang="ts">
export default {
  name: 'QrLogin',
};
</script>
