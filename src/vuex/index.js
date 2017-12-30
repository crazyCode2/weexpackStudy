/**
 * 步骤一
 * vuex 入口文件
 */
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

// vuex在Web自动安装
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
  actions,
  mutations,

  state: {
    tabbar:true, // 底部tab栏
    login:false
  },

  getters: {
    tabbarShow (state) {
      return state.tabbar;
    },
    isLogin(state){
      return state.login;
    }
  }
})

export default store