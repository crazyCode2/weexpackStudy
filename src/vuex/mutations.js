/**
 * 步骤四
 * 突变(处理状态改变)
 */
// 显示 底部tab栏
export function SHOW_TABBAR (state) {
  state.tabbar = true;
}
// 隐藏 底部tab栏
export function HIDE_TABBAR (state) {
  state.tabbar = false;
}
// 设置登录状态
export function SET_LOGIN (state, data) {
  state.login = data;
}