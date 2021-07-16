import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router/router"
import store from "@/store/store"

// antd
import antd from "ant-design-vue"

// 实例化Vue-App
const app = createApp(App)

// 使用中间件配置处
app.use(antd)
app.use(router)
app.use(store)

// 挂载至#app元素中
app.mount("#app")
