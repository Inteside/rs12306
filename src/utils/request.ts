import axios from 'axios';
import { useUserStore } from '../stores/index';

const instance = axios.create({
    baseURL: 'https://kyfw.12306.cn',
    timeout: 1000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
});

instance.interceptors.request.use(
    (config) => {
        const userStore = useUserStore();
        // 获取所有已保存的Cookie
        const cookies = window.document.cookie;

        console.log('我是cookies', cookies);

        // 如果存在Cookie，则添加到请求头
        if (cookies) {
            config.headers['Cookie'] = cookies;
        }

        return config;
    }
)


export default instance;
