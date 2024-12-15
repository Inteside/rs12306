// 用户相关接口

import request from '../utils/request';

// 登录接口返回数据类型
interface LoginResponse {
    login_check_code: string;
}

// 获取二维码
export const fetchBaseImg = (appid: string) => request.post('/create-qr64', { appid });

// 检查二维码状态
export const fetchCheckqr = (uuid: string, appid: string) => request.post('/checkqr', { uuid, appid });

// 检查登录验证
export const fetchLoginVerify = ({ username }: any) =>
    request.post<LoginResponse>('/checkLoginVerify', { username, appid: 'otn' });

// 发送验证码
export const fetchSendCode = (username: string, castNum: string) => request.post('/getMessageCode', { appid: 'otn', username, castNum });

// 登录
export const fetchLogin = (randCode: string, username: string, password: string) => request.post('/login', { appid: 'otn', checkMode: 0, randCode, username, password });


