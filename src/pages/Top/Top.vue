<!-- 推荐 -->
<template>
  <div class="wrapper">
  	<!-- 标题栏 -->
    <wxc-minibar
      title="推荐"
      right-button=""
      left-button=""
      background-color="#F2F3F4"
      text-color="#333333"></wxc-minibar>
    <!-- 内容部分 -->
    <scroller class="container" v-if="network" @loadmore="fetch" loadmoreoffset="10">      
      <wxc-cell
        label=""
        v-for="num in lists"
        key="num.id"
        :title="num.title"
        :has-arrow="true"
        @wxcCellClicked="wxcCellClicked(webUrl+'/'+num.inputtime.replace('-','').replace('-','')+'/'+num.id+'.shtml')"
        spm="181.12312312.12312.d01"
        :has-top-border="false"></wxc-cell>
    </scroller>
    <!-- 没有数据 -->
    <div v-if="network == 0">
      <net-work
        :type="type"
        :show="show"></net-work>
    </div> 
  </div>
</template>

<style scoped>
	.wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .container {
    /*flex: 1;*/
    position: fixed;
    top: 91px;
    bottom: 86px;
    left: 0;
    right: 0;
  }
</style>

<script>
  // 引入 UI组件
  import { WxcMinibar, WxcCell } from 'weex-ui';
  // 请求数据组件
  var stream = weex.requireModule('stream');
  import jwtdecode from 'jwt-simple';
  // 结果页 组件
  import NetWork from '../Network.vue';

  export default {
    components: {
      WxcMinibar,
      WxcCell,
      NetWork
    },
    data () {
      return {
        network: 1, // 显示'网络异常页'
        lists: [], // 数据列表
        count: 0, // 页码
        page: 1, // 当前页码
        type: 'noNetwork', // 结果页类型
        show: true // 是否显示结果页
      }
    },
    created (){
      var me = this;
      // 首次请求数据
      // stream.fetch({
      //   method: 'GET',
      //   type: 'text',
      //   url: this.webUrl+'/webservice/Api/List?catid=10&pagesize=20',
      // }, function(ret) {
      //   if(ret.ok){
      //     // 解密
      //     var test = jwtdecode.decode(ret.data, 'michahzdee2016', 'HS256');
      //     me.lists = test.list;
      //     me.count = test.count/20;
      //     me.network = 1;
      //   } else {
      //     me.network = 0;
      //     modal.toast({ 'message': '没有网络', 'duration': 1 });
      //     return false;
      //   }
      // })
      
      /*请求数据*/
      this.$api.get('webservice/Api/List?',{catid:10,pagesize:20},function(data) {
        me.lists = data.list;
        me.count = data.count/20;
        me.network = 1;
      })
    },
    methods: {
      // 加载更多
      fetch (event) {
        var me = this;
        setTimeout(() => {
          me.page += 1;
          if(this.count > me.page){
            var metest= this;
            stream.fetch({
              method: 'GET',
              type: 'text',
              url: this.webUrl+'/webservice/Api/HotList?catid=10&pagesize=20&page=' + me.page,
            }, function(ret) {
              if(ret.ok){
                var test = jwtdecode.decode(ret.data, 'michahzdee2016', 'HS256');
                if (Array.isArray(test.list)) {
                  for(var i = 0; i < test.list.length; i++) {
                    metest.lists.push(test.list[i])
                  }
                }
                me.network = 1;
              } else {
                me.network = 0;
              }
            })
          } else {
            modal.toast({ message: '没有数据了', duration: 1 })
          }
        }, 800)
      },
      // cell点击
      wxcCellClicked(_url){
        var urls = encodeURIComponent(_url);
        // 页面跳转
        this.$router.push({ path: '/webview',query:{url:urls}});
      }
    }
  }
</script>