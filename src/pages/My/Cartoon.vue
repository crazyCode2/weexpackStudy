<template>
  <div>
    <!-- 标题栏 -->
    <wxc-minibar
      title="视频"
      :left-button="leftButton"
      :right-button="rightButton"
      background-color="#F2F3F4"
      text-color="#333333"
      @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"></wxc-minibar>
    <!-- 视频播放器 -->
    <video class="video" :src="src" autoplay controls
      @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
    <text class="info">state: {{state}}</text>
  </div>
</template>

<style scoped>
  .video {
    /*width: 100%;
    height: 350px;*/
  }
  .info {
    margin-top: 30px;
    font-size: 30px;
    text-align: center;
  }
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
        leftButton: 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png',
        rightButton: '',
        state: '----',
        src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
      }
    },
    methods:{
      minibarLeftButtonClick(){
        //
      },
      onstart (event) {
        this.state = '开始';
      },
      onpause (event) {
        this.state = '暂停';
      },
      onfinish (event) {
        this.state = '结束';
      },
      onfail (event) {
        this.state = '失败';
      }
    }
  }
</script>