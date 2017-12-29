// 配置API接口地址
const baseUrl = 'http://www.kuitao8.com/';

// 引入 弹窗组件
var modal = weex.requireModule('modal');
// 引入 请求数据组件
var stream = weex.requireModule('stream');
// 身份验证
import jwtdecode from 'jwt-simple';

// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

// 工具方法
function toParams(obj) {
  var param = ""
  for(const name in obj) {
    if(typeof obj[name] != 'function') {
      param += "&" + name + "=" + encodeURI(obj[name])
    }
  }
  return param.substring(1)
};

/**
 * 接口处理函数
 */
function apiStream (method, url, params, success, failure) {
  // 过滤参数
  if (params) {
    params = filterNull(params)
  }

  /*** stream ***/
  if(method === 'GET'){
    // GET 方法
    stream.fetch({
      method: 'GET',
      type: 'text',
      url: baseUrl + url + toParams(params)
    }, function(res) {
      if (res.ok) {
        // 解密
        let currentData = jwtdecode.decode(res.data, 'michahzdee2016', 'HS256');
        success(currentData);
      }else {
        modal.toast({
          message: '请求失败,请检查网络!',
          duration: 2
        })
      }
    })
  }else if(method === 'POST'){
    // POST 方法
    stream.fetch({
      method: 'POST',
      type: 'text',
      url: baseUrl + url,
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: toParams(params)
    }, function(res) {
      if (res.ok) {
        // 解密
        let currentData = jwtdecode.decode(res.data, 'michahzdee2016', 'HS256');
        success(currentData);
      }else {
        modal.toast({
          message: '请求失败,请检查网络!',
          duration: 2
        })
      }
    },function(progress) {
      //
    })
  }
};

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiStream('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiStream('POST', url, params, success, failure)
  }
}