import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

// ant-design-vue vite -> 按需加载配置
// https://2x.antdv.com/docs/vue/introduce-cn
import ViteComponents, { AntDesignVueResolver } from "vite-plugin-components"

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        // 路径别名配置
        alias: [
            // src根路径
            {
                find: "@",
                replacement: path.resolve(__dirname, "src"),
            },
            // components组件路径
            {
                find: "components",
                replacement: path.resolve(__dirname, "src/components"),
            },
            // views视图路径
            {
                find: "views",
                replacement: path.resolve(__dirname, "src/views"),
            },
        ],
    },
    plugins: [
        // vite vue config
        vue(),
        // vite 按需加载ant-design-vue
        ViteComponents({
            customComponentResolvers: [AntDesignVueResolver()],
        }),
    ],
})
