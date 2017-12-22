/**
 * 配置路由
 */
import Router from 'vue-router'
// 首页
import ViewHome from './assets/views/Home.vue'
// 关于
import ViewMy from './assets/views/My.vue'
// PHP教程
import ViewAll from './assets/views/All.vue'
// 分类
import ViewDemo from './assets/views/Demo.vue'
// 推荐
import ViewTopbvive from './assets/views/Top.vue'
// 公用webview
import ViewWebvive from './page/Webview.vue'
// 网络异常页
import ViewNetwork from './assets/views/Network.vue'

Vue.use(Router)


export default new Router({
    // mode: 'abstract',
    routes: [
    	// 默认页面 首页
        {
        	path: '/',
        	redirect: '/home'
        },
        // 首页
        {
        	path: '/home',
        	component: ViewHome
        },
        // 关于
        {
        	path: '/my',
        	component: ViewMy
        },
        // 分类
        {
        	path: '/demo',
        	component: ViewDemo
        },
        // PHP教程
        {
        	path: '/all',
        	component: ViewAll
        },
        // 推荐
        {
        	path: '/top',
        	component: ViewTopbvive
        },
        // 公用 webview
        {
            path: '/webview',
            component: ViewWebvive
        },
        // 网络异常页
        {
            path: '/network',
            component: ViewNetwork
        }
    ]
})