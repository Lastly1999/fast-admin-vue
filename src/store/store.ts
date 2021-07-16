import { createStore } from "vuex"

/**
 * vuex中央仓库
 * @param state 状态
 * @param mutations 提交state方法
 * @param action 提交mutations方法
 * @param getters 获取state状态
 * @param modules 派生modules模块
 */
const store = createStore({
    state: {},
    mutations: {},
    getters: {},
    actions: {},
    modules: {},
})

export default store
