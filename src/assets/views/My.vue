<!-- 关于 -->
<template>
  <div class="wrapper">
    <!-- 标题栏 -->
    <wxc-minibar
      title="关于"
      :left-button="leftButton"
      :right-button="rightButton"
      background-color="#F2F3F4"
      text-color="#333333"
      @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>
    <!-- 内容部分 -->
  	<scroller class="scroller">
      <title title="张三"></title>
      <category title="常用功能"></category>
    </scroller>
    <!-- 侧滑菜单 -->
    <wxc-popup
      width="400"
      :show="isRightShow"
      pos="right"
      ref="wxcPopup"
      @wxcPopupOverlayClicked="popupOverlayRightClick">
      <text>侧滑菜单内容</text>
    </wxc-popup>
  </div>
</template>

<style scoped>
  .wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
  }
  .scroller {
    position: fixed;
    top: 91px;
    bottom: 90px;
    left: 0;
    right: 0;
  }
</style>

<script>
  // 头像左边文字
  import Title from './_mods/title.vue';
  // 说明抬头
  import Category from './_mods/category.vue';
  // 引入 UI组件
  import { WxcMinibar, WxcPopup  } from 'weex-ui';

  export default {
    components: {
      Title,
      Category,
      WxcMinibar,
      WxcPopup
    },
    data () {
      return {
        leftButton: "",
        rightButton: "https://gw.alicdn.com/tfs/TB1HrvtbBTH8KJjy0FiXXcRsXXa-32-32.png",
        isRightShow: false
      }
    },
    methods: {
      minibarRightButtonClick(){
        // 显示侧滑菜单
        this.isRightShow = true;
      },
      popupOverlayRightClick () {
        // 隐藏侧滑菜单
        this.isRightShow = false;
      }
    }
  }
</script>