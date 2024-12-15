// 用户信息
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const tk = ref('');
    const uamtk = ref('');
    const setTk = (newTk: string) => {
        tk.value = newTk;
    }
    const removeTk = () => {
        tk.value = ''
    }

    const setUamtk = (newUamtk: string) => {
        uamtk.value = newUamtk;
    }
    const removeUamtk = () => {
        uamtk.value = ''
    }

    return { setTk, removeTk, tk, setUamtk, uamtk, removeUamtk }
}, {
    persist: true
})