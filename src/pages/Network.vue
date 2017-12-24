<!-- 网络异常页 -->
<template>
  <div class="wrapper">
    <!-- 标题栏 -->
    <wxc-minibar
      title="结果页"
      right-button=""
      left-button=""
      background-color="#F2F3F4"
      text-color="#333333"></wxc-minibar>
    <!-- 内容部分-->
    <wxc-result
      :type="type"
      padding-top="232"
      @wxcResultButtonClicked="resultButtonClick"
      :show="show"></wxc-result>
  </div>
</template>

<style scoped>
  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }
</style>

<script>
  // 弹窗
  const modal = weex.requireModule('modal');
  // 结果页
  import { WxcMinibar, WxcResult } from 'weex-ui';

  export default {
    components: {
      WxcMinibar,
      WxcResult
    },
    // props: {
    //   type: {
    //       type: String,
    //       default: 'noNetwork'
    //   },
    //   show: {
    //       type: Boolean,
    //       default: true
    //   }
    // },
    data(){
      return {
        type: 'noNetwork',
        show: true
      }
    },
    created(){
      if(this.$route.query.type){
        // 获取其他页面参数
        this.type = this.$route.query.type;
      }
    },
    methods: {
      resultButtonClick (e) {
        // 返回首页
        this.$router.push({ path: '/home'});
      }
    }
  };
</script>