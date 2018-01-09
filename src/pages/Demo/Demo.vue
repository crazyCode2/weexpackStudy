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
    <!-- 列表 -->
    <!-- 引导页 -->
    <wxc-cell
      title="引导页"
      :has-arrow="true"
      @wxcCellClicked="goGuide"
      :has-top-border="false"></wxc-cell>
    <!-- splash页 -->
    <wxc-cell
      title="splash页"
      :has-arrow="true"
      @wxcCellClicked="goSplash"
      :has-top-border="false"></wxc-cell>
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
  import { WxcMinibar, WxcSearchbar, WxcCell } from 'weex-ui';

  export default {
    components: {
      WxcMinibar,
      WxcSearchbar,
      WxcCell
    },
    data () {
      return {
        value: '',
        catid: 10,
        pagesize: 20
      }
    },
    created () {
      this.getData();
    },
    methods: {
      // 取消按钮点击事件
      wxcSearchbarCancelClicked () {
        modal.toast({ 'message': '取消按钮点击事件', 'duration': 1 });
      },
      // 监听输入内容
      wxcSearchbarInputOnInput (e) {
        this.value = e.value;
      },
      // 关闭按钮点击事件
      wxcSearchbarCloseClicked () {
        modal.toast({ 'message': '关闭按钮点击事件', 'duration': 1 });
      },
      // 输入框聚集焦点事件
      wxcSearchbarInputOnFocus () {
        modal.toast({ 'message': '聚集焦点事件', 'duration': 1 });
      },
      // 输入框失去焦点事件
      wxcSearchbarInputOnBlur () {
        modal.toast({ 'message': '失去焦点事件', 'duration': 1 });
      },
      // 获取数据
      getData(){
        let params = {
          catid: this.catid,
          pagesize: this.pagesize
        };
        // 请求数据
        this.$api.get('webservice/Api/List?',params,function(data) {
          if(data.list.length > 1){
            modal.toast({ 'message': '获取数据成功!', 'duration': 1 });
          }
        })
      },
      // 跳转引导页
      goGuide(){
        this.$router.push({path:'/guide'});
      },
      // 跳转splash页
      goSplash(){
        this.$router.push({path:'/splash'});
      }
    }
  }
</script>