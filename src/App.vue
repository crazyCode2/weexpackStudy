<!-- 主页面 底部选项卡 -->
<template>
  <div class="app-wrapper">
    <router-view class="r-box"></router-view>
    <tab-bar @tabTo="onTabTo" v-show="tabbarShow"></tab-bar>
  </div>
</template>

<style>
  body{
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color:#333;
  }
</style>

<style scoped>
  .app-wrapper{
    background-color: #f4f4f4;
  }
  .r-box{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>

<script>
  // 弹窗
  var modal = weex.requireModule('modal');
  // 工具类
  import util from './assets/util';
  // 底部选项卡组件
  import tabBar from './assets/components/TabBar.vue';
  // 引入 vuex 的两个方法
  import {mapGetters, mapActions} from 'vuex'
  
  export default {
    data () {
      return { 
      }
    },
    components: {
      'tab-bar': tabBar
    },
    created () {
      util.initIconFont();
    },
    // 计算属性
    computed:mapGetters([
      // 从 getters 中获取值
      'tabbarShow'
    ]),
    // 监听,当路由发生变化的时候执行
    watch:{
      $route(to,from){
        if(to.path == '/' || to.path == '/home' || to.path == '/top' || to.path == '/demo' || to.path == '/all' || to.path == '/my'){
          /**
           * $store来自Store对象
           * dispatch 向 actions 发起请求
           */
          this.$store.dispatch('showTabBar');
        }else{
          this.$store.dispatch('hideTabBar');
        }
      }
    },
    methods: {
      onTabTo(_result){
        let _key = _result.data.key || '';
        this.$router && this.$router.push('/'+_key)
      }
    }
  }
</script>