// 从 Tauri API 导入 WebviewWindow 组件
import { WebviewWindow } from '../../../node_modules/@tauri-apps/api/webviewWindow.js';
import type { WebviewWindowOptions } from './types';

// 定义创建窗口所需的参数接口，继承自 WebviewWindowOptions
interface CreateWindowParams extends WebviewWindowOptions {
    label: string;  // 窗口唯一标识
}

/**
 * 创建新的窗口实例
 * @param params 创建窗口的参数，包含标签和其他窗口选项
 * @param width 窗口宽度
 * @param height 窗口高度
 * @param x 窗口 x 坐标
 * @param y 窗口 y 坐标
 * @returns 返回创建的 WebviewWindow 实例
 */
export const createWindow = (params: CreateWindowParams) => {
    // 解构参数，分离出 label 和其他选项
    const { label, ...options } = params;

    // 设置窗口的默认属性
    const defaultOptions = {
        width: 1200,    // 默认窗口宽度
        height: 750,   // 默认窗口高度
        x: 100,        // 默认窗口 x 坐标
        y: 100,        // 默认窗口 y 坐标
        minWidth: 1200, // 最小宽度
        minHeight: 750, // 最小高度
        decorations: false,
        resizable: true,
    };

    // 创建新的 WebviewWindow 实例
    // 使用展开运算符合并默认选项和用户自定义选项
    const webView = new WebviewWindow(label, {
        ...defaultOptions,
        ...options,
    });

    // 监听窗口创建成功事件
    webView.once('tauri://created', () => {
        console.log(`窗口 ${label} 创建成功`);
    });

    // 监听窗口创建失败事件
    webView.once('tauri://error', (error) => {
        console.log(`窗口 ${label} 创建失败`, error);
    });

    return webView;
};
