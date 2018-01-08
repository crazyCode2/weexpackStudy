/**
 * 配置路由
 */
import Router from 'vue-router'
// // 引导页
// import ViewGuide from './pages/Guide/Guide.vue'
// // splash页面
// import ViewSplash from './pages/Guide/Splash.vue'
// 登录页
import ViewLogin from './pages/Login/Login.vue'
// 首页
import ViewHome from './pages/Home/Home.vue'
// 关于
import ViewMy from './pages/My/My.vue'
// 视频列表
import ViewCartoon from './pages/My/Cartoon.vue'
// 视频
import ViewVideo from './pages/My/Video.vue'
// PHP教程
import ViewAll from './pages/All/All.vue'
// 分类
import ViewDemo from './pages/Demo/Demo.vue'
// 推荐
import ViewTopbvive from './pages/Top/Top.vue'
// 公用webview
import ViewWebvive from './pages/webview.vue'
// 网络异常页
import ViewNetwork from './pages/Network.vue'

Vue.use(Router)


export default new Router({
    // mode: 'abstract',
    routes: [
    	// 默认页面 首页
        {
        	path: '/',
        	redirect: '/home'
        },
        // // 引导页
        // {
        //     path: '/guide',
        //     component: ViewGuide
        // },
        // // splash页面
        // {
        //     path: '/splash',
        //     component: ViewSplash
        // },
        // 登录页
        {
            path: '/login',
            component: ViewLogin
        },
        // 首页
        {
        	path: '/home',
        	component: ViewHome
        },
        // 推荐
        {
            path: '/top',
            component: ViewTopbvive
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
        // 关于
        {
        	path: '/my',
        	component: ViewMy
        },
        // 视频列表
        {
            path: '/cartoon',
            component: ViewCartoon
        },
        // 视频
        {
            path: '/video',
            component: ViewVideo
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