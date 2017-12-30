<!-- 首页 -->
<template>
  <div class="wrapper">
    <!-- 标题栏 -->
  	<wxc-minibar
      title="首页"
      right-button=""
      left-button=""
      background-color="#F2F3F4"
      text-color="#333333"></wxc-minibar>
    <!-- 滚动视图 scroller需要用一个div将内容包含 -->
    <scroller class="main-list">
      <!-- 轮播图 -->
      <kx-slider :imageList="Banners"></kx-slider>
      <!-- 顶部标签页 -->
      <wxc-tab-page
        ref="wxc-tab-page"
        :tab-titles="tabTitles"
        :tab-styles="tabStyles"
        title-type="text"
        :needSlider="needSlider"
        :is-tab-view="isTabView"
        :tab-page-height="tabPageHeight"
        :spm-c="4307989"
        @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
          <list
            v-for="(v,index) in tabList"
            :key="index"
            class="item-container">
            <cell class="border-cell"></cell>
            <cell
              class="cell"
              v-for="(demo,key) in v"
              :accessible="true"
              :aria-label="demo.title"
              :key="key">
                <wxc-pan-item
                  :ext-id="'1-' + (v) + '-' + (key)"
                  @wxcPanItemPan="wxcPanItemPan" >
                    <wxc-cell
                      label=""
                      :title="demo.title"
                      :has-arrow="true"
                      @wxcCellClicked="wxcCellClicked(webUrl+'/'+demo.inputtime.replace('-','').replace('-','')+'/'+demo.id+'.shtml')"
                      spm="181.12312312.12312.d01"
                      :has-top-border="false"
                      :price="demo.inputtime"></wxc-cell>
                </wxc-pan-item>
            </cell>
          </list>
      </wxc-tab-page>
    </scroller>   
  </div>
</template>

<script>
  // 弹窗
  const modal = weex.requireModule('modal');
  // 引入 工具类
  import util from '../../assets/util.js';
  // 引入 轮播图组件
  import Slider from '../../assets/components/Slider.vue';
  // 引入 UI组件
  import { WxcMinibar, WxcTabPage, WxcPanItem, WxcCell, Utils } from 'weex-ui';
  // 配置文件
  import Config from './config';
  // 引入 vuex 的两个方法
  import {mapGetters, mapActions} from 'vuex';

  export default {
    components: {
      'kx-slider': Slider,
      WxcMinibar,
      WxcTabPage,
      WxcPanItem,
      WxcCell,
      Utils
    },
    data () {
      return {
        // 轮播图
        Banners: [
          { title: '', src: 'http://app.kuitao8.com/images/banner/1.jpg'},
          { title: '', src: 'http://app.kuitao8.com/images/banner/2.jpg'},
          { title: '', src: 'http://app.kuitao8.com/images/banner/3.jpg'}
        ],
        // 顶部标签页(wxc-tab-page) 配置信息
        tabTitles: Config.tabTitles, // 顶部标签 标题
        tabStyles: Config.tabStyles, // 顶部标签 样式
        needSlider: true, // 是否需要滑动功能
        isTabView: true, // 当设置为false,同时 tab 配置 url 参数即可跳出
        tabPageHeight: 480, // Tab page 页面的高度
        // 内容部分
        tabList: [],
        demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        // 请求数据
        lists:[]
      }
    },
    // 计算属性
    computed:mapGetters([
      // 从 getters 中获取值
      'isLogin'
    ]),
    created () {
      // 字体图标初始化
      util.initIconFont();
      // 获取 类型数据
      this.getCategory();
      // 根据设备 设置Tab page 页面的高度
      this.tabPageHeight = Utils.env.getPageHeight();
      //如果不是首次启动,且没有登陆,则跳到登录页面
      // this.$router.currentRoute.path =='/home' && !this.isLogin && this.$router.push({path:'/login'});
      // 发起 数据请求
      var me = this;
      /*请求数据*/
      this.$api.get('webservice/Api/List?',{catid:10,pagesize:20},function(data) {
        me.lists = data.list;
      },function() {
        // 无网络
        me.$router.push({path:'/network',query:{type:'noNetwork'}});
      });
    },
    methods: {
      // 获取 类型数据
      getCategory(){
        var me = this;
        /*请求数据*/
        this.$api.get('webservice/Api/getCategoryArticle?',{catid:9,pagesize:10},function(data) {
          me.tabList = data.list;
        },function() {
          // 无网络
          me.$router.push({path:'/network',query:{type:'noNetwork'}});
        });

        var metest = this;
        var mylist = new Array();
        /*请求数据*/
        this.$api.get('webservice/Api/getCategory?',{catid:9},function(data) {
          if (Array.isArray(data.list)) {
            for(var i = 0; i < data.list.length; i++) {
              mylist[i] = [];
              mylist[i]['title'] = data.list[i]['catname'];
              mylist[i]['url'] = data.list[i]['catid'];
            }
          }
          // 顶部标签页 标题
          metest.tabTitles = mylist;
        },function() {
          // 无网络
          metest.$router.push({path:'/network',query:{type:'noNetwork'}});
        });
      },
      wxcTabPageCurrentTabSelected (e) {
        const self = this;
        const index = e.page;
        const id = e.url;
        // modal.toast({ message: id, duration: 1 });
        /* 未加载tab模拟数据请求 */
        if (!Utils.isNonEmptyArray(self.tabList[id])) {
          setTimeout(() => {
            // Vue.set(self.tabList[id], id, self.demoList);
          }, 100);
        }
      },
      wxcPanItemPan (e) {
        if (Utils.env.supportsEBForAndroid()) {
          // modal.toast({ message: _url, duration: 1 });
        }
      },
      wxcCellClicked(_url) {
        // 跳转视图
        var urls = encodeURIComponent(_url);
        this.$router.push({ path: '/webview',query:{url:urls}});
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .iconfont {
    font-family:iconfont;
  }
  .main-list{
    position: fixed;
    top: 91px;
    bottom: 90px;
    left: 0;
    right: 0;
  }
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
  }
  .border-cell {
    background-color: #f2f3f4;
    width: 750px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
  }
  .cell {
    background-color: #ffffff;
  }
</style>