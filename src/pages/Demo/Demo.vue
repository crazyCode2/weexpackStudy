<!-- 分类 -->
<template>
  <div class="wrapper">
  	<!-- 标题栏 -->
    <wxc-minibar
      title="分类"
      right-button=""
      left-button=""
      background-color="#F2F3F4"
      text-color="#333333"></wxc-minibar>
    <!-- 搜索框 -->
    <scroller class="scroller">
      <div class="search">
        <wxc-searchbar
          ref="wxc-searchbar"
          theme="yellow"
          @wxcSearchbarCancelClicked="wxcSearchbarCancelClicked"
          @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
          @wxcSearchbarCloseClicked="wxcSearchbarCloseClicked"
          @wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"
          @wxcSearchbarInputOnBlur="wxcSearchbarInputOnBlur"></wxc-searchbar>
        <text class="value-text">{{value}}</text>
      </div>
    </scroller>
  </div>
</template>

<style scoped>
	.wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #F6F9F8;
  }
  .scroller {
    flex: 1;
  }
  .search {
    height: 160px;
  }
</style>

<script>
  // 弹窗
  const modal = weex.requireModule('modal');
  // 引入 UI组件
  import { WxcMinibar, WxcSearchbar } from 'weex-ui';

  export default {
    components: {
      WxcMinibar,
      WxcSearchbar
    },
    data () {
      return {
        value: ''
      }
    },
    methods: {
      wxcSearchbarCancelClicked () {
        // 取消按钮点击事件
        modal.toast({ 'message': 'cancel.click', 'duration': 1 });
      },
      wxcSearchbarInputOnInput (e) {
        // 监听输入内容
        this.value = e.value;
      },
      wxcSearchbarCloseClicked () {
        // 关闭按钮点击事件
        modal.toast({ 'message': 'close.click', 'duration': 1 });
      },
      wxcSearchbarInputOnFocus () {
        // 输入框聚集焦点事件
        modal.toast({ 'message': 'onfocus', 'duration': 1 });
      },
      wxcSearchbarInputOnBlur () {
        // 输入框失去焦点事件
        modal.toast({ 'message': 'onbulr', 'duration': 1 });
      }
    }
  }
</script>