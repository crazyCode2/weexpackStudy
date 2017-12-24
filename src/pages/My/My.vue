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
      <!-- 我的账户 -->
      <wxc-cell
        title="我的账户"
        :has-arrow="true"
        :has-top-border="false"></wxc-cell>
      <!-- 我的消息 -->
      <wxc-cell
        title="我的消息"
        :has-arrow="true"
        :has-top-border="false"></wxc-cell>
      <!-- 我的账户 -->
      <wxc-cell
        title="我的任务"
        :has-arrow="true"
        :has-top-border="false"></wxc-cell>
      <!-- 出错啦 -->
      <wxc-cell
        title="出错啦"
        @wxcCellClicked="errorPageClicked"
        :has-arrow="true"
        :has-top-border="false"></wxc-cell>
      <!-- 暂无商品 -->
      <wxc-cell
        title="暂无商品"
        @wxcCellClicked="noGoodsClicked"
        :has-arrow="true"
        :has-top-border="false"></wxc-cell>
      <!-- 无网络 -->
      <wxc-cell
        title="无网络"
        @wxcCellClicked="noNetworkClicked"
        :has-arrow="true"
        :has-top-border="false"></wxc-cell>
      <!-- 定位失败 -->
      <wxc-cell
        title="定位失败"
        @wxcCellClicked="errorLocationClicked"
        :has-arrow="true"
        :has-top-border="false"></wxc-cell>
    </scroller>
    <!-- 侧滑菜单 -->
    <wxc-popup
      width="500"
      :show="isRightShow"
      pos="right"
      ref="wxcPopup"
      @wxcPopupOverlayClicked="popupOverlayRightClick">
      <!-- 侧滑菜单 内容部分 -->
      <title title="是否还能红着脸"></title>
      <category title="常用功能"></category>
      <!-- 动漫 -->
      <wxc-cell
        :has-arrow="true"
        :cell-style="cellStyle"
        :has-top-border="false"
        @wxcCellClicked="wxcCellClicked"
        :auto-accessible="false">
        <image
          class="image"
          slot="label"
          src="http://ico.58pic.com/iconset02/naruto_vol_1/gif/39118.gif"></image>
          <text
            class="red"
            slot="title">动漫</text>
        </wxc-cell>
      <!-- 音乐 -->
      <wxc-cell
        :has-arrow="true"
        :cell-style="cellStyle"
        :has-top-border="false"
        @wxcCellClicked="wxcCellClicked"
        :auto-accessible="false">
        <image
          class="image"
          slot="label"
          src="http://ico.58pic.com/iconset02/naruto_vol_1/gif/39122.gif"></image>
          <text
            class="red"
            slot="title">音乐</text>
        </wxc-cell>
      <!-- 视频 -->
      <wxc-cell
        :has-arrow="true"
        :cell-style="cellStyle"
        :has-top-border="false"
        @wxcCellClicked="wxcCellClicked"
        :auto-accessible="false">
        <image
          class="image"
          slot="label"
          src="http://ico.58pic.com/iconset02/naruto_vol_1/gif/39126.gif"></image>
          <text
            class="txt"
            slot="title">视频</text>
        </wxc-cell>
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
  .image {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
  .txt{
  }
</style>

<script>
  // 头像左边文字
  import Title from '../../assets/_mods/title.vue';
  // 说明抬头
  import Category from '../../assets/_mods/category.vue';
  // 引入 UI组件
  import { WxcMinibar, WxcPopup, WxcCell } from 'weex-ui';

  export default {
    components: {
      Title,
      Category,
      WxcMinibar,
      WxcPopup,
      WxcCell
    },
    data () {
      return {
        // 左边按钮
        leftButton: "",
        // 右边按钮
        rightButton: "https://gw.alicdn.com/tfs/TB1HrvtbBTH8KJjy0FiXXcRsXXa-32-32.png",
        // 是否显示侧滑菜单
        isRightShow: false,
        // 侧滑菜单 列表样式
        cellStyle: {
          backgroundColor: '#FFFFFF'
        }
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
      },
      wxcCellClicked(){
        // 侧滑菜单点击
      },
      errorPageClicked(){
        // 出错啦
        this.$router.push({path:'/network',query:{type:'errorPage'}});
      },
      noGoodsClicked(){
        // 暂无商品
        this.$router.push({path:'/network',query:{type:'noGoods'}});
      },
      noNetworkClicked(){
        // 无网络
        this.$router.push({path:'/network',query:{type:'noNetwork'}});
      },
      errorLocationClicked(){
        // 定位失败
        this.$router.push({path:'/network',query:{type:'errorLocation'}});
      }
    }
  }
</script>