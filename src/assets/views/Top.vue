<!-- 推荐 -->
<template>
  <div>
  	<!-- 标题栏 -->
    <wxc-minibar
      title="推荐"
      right-button=""
      left-button=""
      background-color="#F2F3F4"
      text-color="#333333"></wxc-minibar>
    <!-- 内容部分 -->
  </div>
</template>

<style scoped>
	
</style>

<script>
  // 引入 UI组件
  import { WxcMinibar } from 'weex-ui';

  export default {
    components: {
      WxcMinibar
    },
    data () {
      return {
      }
    }
  }
</script>