// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery';
import '../static/js/UE/ueditor.config'
import '../static/js/UE/ueditor.all.min'
import  '../static/js/UE/lang/zh-cn/zh-cn'
import  '../static/js/UE/ueditor.parse'

Vue.config.productionTip = false;
Vue.prototype.$ = jquery;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
