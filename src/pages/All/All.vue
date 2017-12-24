<!-- PHP教程 -->
<template>
  <div class="wrapper">
  	<!-- 标题栏 -->
    <wxc-minibar
      title="PHP教程"
      right-button=""
      left-button=""
      background-color="#F2F3F4"
      text-color="#333333"></wxc-minibar>
    <!-- 内容部分 -->
    <scroller class="scroller">
      <!-- 单程日历 -->
      <div class="btn"
           @click="showCalendar">
        <text class="btn-txt">单程日历</text>
      </div>
      <!-- 往返日历 -->
      <div class="btn btn-margin yellow"
           @click="showReturnCalendar">
        <text class="btn-txt">往返日历</text>
      </div>
      <!-- 当前日期 -->
      <div class="panel">
        <text v-if="currentDate"
              class="text">当前日期: {{currentDate}}</text>
      </div>
      <!-- 日历 -->
      <wxc-page-calendar
        :date-range="dateRange"
        :selected-date="selectedDate"
        :selected-note="selectedNote"
        :is-range="isRange"
        :needDestroy="false"
        :minibar-cfg="minibarCfg"
        :desc-list="descList"
        @wxcPageCalendarBackClicked="wxcPageCalendarBackClicked"
        @wxcPageCalendarDateSelected="wxcPageCalendarDateSelected"
        ref="wxcPageCalendar"></wxc-page-calendar>
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
    background-color: #FFFFFF;
  }
  .scroller {
    flex: 1;
  }
  .btn {
    width: 600px;
    height: 80px;
    margin-top: 300px;
    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-radius: 6px;
    background-color: rgb(92, 184, 92);
    border-color: rgb(76, 174, 76);
  }
  .text {
    font-size: 32px;
  }
  .yellow {
    background-color: #ffc300;
    border-color: #ffc300;
  }
  .btn-txt {
    font-size: 32px;
    color: #ffffff;
  }
  .btn-margin {
    margin-top: 40px;
  }
  .panel {
    align-self: center;
    height: 300px;
    margin-top: 40px;
  }
</style>

<script>
  // 引入 UI组件
  import { WxcMinibar, WxcPageCalendar } from 'weex-ui';
   
  export default {
    components: {
      WxcMinibar,
      WxcPageCalendar
    },
    data () {
      return {
        currentDate: '', // 当前日期
        dateRange: ['2017-08-01', '2018-07-30'], // 日历范围
        selectedDate: ['2017-12-20', '2017-12-30'], // 选中日期
        selectedNote: ['出发', '到达', '往返'], // 选中提示语
        isRange: true, // 是否是往返日历
        minibarCfg: { // 导航栏配置
          title: '日期选择'
        },
        descList: [ // 附加信息
          { date: '2017-12-23', value: '￥200' },
          { date: '2017-12-24', value: '￥200' },
          { date: '2017-12-25', value: '￥200' },
          { date: '2017-12-26', value: '￥200' },
          { date: '2017-12-27', value: '￥222' },
          { date: '2017-12-28', value: '￥341' },
          { date: '2017-12-29', value: '￥230' },
          { date: '2017-12-06', value: '￥2000', emphasize: true }
        ]
      }
    },
    created() {
    },
    methods: {
      // 日期选择
      wxcPageCalendarDateSelected (e) {
        this.selectedDate = e.date;
        this.currentDate = e.date;
      },
      // 返回按钮点击
      wxcPageCalendarBackClicked () {
        modal.toast({
          message: '你按了返回按钮'
        })
      },
      // 单程日历
      showCalendar () {
        this.isRange = false;
        setTimeout(() => {
          this.$refs['wxcPageCalendar'].show();
        }, 1);
      },
      // 往返日历
      showReturnCalendar () {
        this.isRange = true;
        setTimeout(() => {
          this.$refs['wxcPageCalendar'].show();
        }, 1);
      }
    }
  }
</script>