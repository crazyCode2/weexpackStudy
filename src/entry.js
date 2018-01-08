/**
 * 入口文件
 */
import App from './App.vue'
import router from './router'
// import { sync } from 'vuex-router-sync'
import * as filters from './filters'
import mixins from './mixins'
// 引入 接口文件
import api from './api'
// 引入 vuex入口文件
import store from './vuex/index'

//在入口文件中引入文件并将变量挂到全局
import defines from './defines'
Object.keys(defines).forEach((key)=>{
    Vue.prototype[key] = defines[key]
})

// sync the router with the vuex store.
// this registers `store.state.route`
// sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// register global mixins.
Vue.mixin(mixins)
// 将API方法绑定到全局
Vue.prototype.$api = api

import VueResource from 'vue-resource'
Vue.use(VueResource)
// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue(Vue.util.extend({ el: '#root', router, store }, App));

// 默认跳转的页面
router.push('/');