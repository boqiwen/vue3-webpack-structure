import { createApp, ref } from "vue";
import router from "@/router/index";
import MyUi from "./libs/MyUi";

// 从一个单文件组件中导入根组件
import App from '@/app.vue';

const app = createApp(App);

const a = ref(11)
app.config.globalProperties = {
  testGlobal : a
};

setTimeout(() => {
  a.value = 10000
}, 1000);


app.use(MyUi, {
  components: [
    'MyInput',
    'MyButton'
  ]
})

app.use(router);
app.mount("#app");