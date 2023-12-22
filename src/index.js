import { createApp } from "vue";
import router from "@/router/index";

// 从一个单文件组件中导入根组件
import App from '@/app.vue';

const app = createApp(App);

app.use(router);
app.mount("#app");