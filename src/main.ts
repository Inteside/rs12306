import { createApp } from "vue";
import pinia from "./stores";
import App from "./App.vue";
import 'mdui/mdui.css';
import router from './router/routes';

createApp(App).use(pinia).use(router).mount("#app");