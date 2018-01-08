export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    push (path) {
      console.log(process.env.COMPILE_ENV);
      if (process.env.COMPILE_ENV === 'weex') {
        const toUrl = weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/' + path + '.js' // 将a.js的绝对地址转为b.js的绝对地址
        weex.requireModule('navigator').push({
          url: toUrl,
          animated: 'true'
        })
      } else {
        this.$router.push(path); // 使用vue-router
      }
    },
    pop () {
      if (process.env.COMPILE_ENV === 'weex') {
        weex.requireModule('navigator').pop({
          animated: 'true'
        })
      } else {
        window.history.back();
      }
    }
  }
}
