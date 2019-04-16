// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import VueRouter from 'vue-router'
import Routers from './routers'

Vue.use(VueRouter);
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

// 自定义指令  指令名字
// 每次dom渲染都会执行这个函数  被执行了14次
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     // console.log(el,binding.value)
//     // el:元素  binding： vnode：
//     el.style.color = "#" + Math.random().toString(16).slice(2,8);
//   }
// })
Vue.directive('theme',{
  bind(el,binding,vnode){
    // 接收传来的参数
    // console.log(binding.value)
    if(binding.value== 'wide'){
      el.style.maxWidth = '1260px'
    }
  }
})
// 全局 自定义过滤器
// Vue.filter('to-uppercase',function(value){
//   // 第一个参数就是数据里面的文本
//   // console.log(value,'guolv') 
//   // 让文本都大写
//   return value.toUpperCase();
// })
Vue.filter('snippet',function(value){
  return value.slice(0,50) + '...'
})
// 创建路由
  const router = new VueRouter({
    
    routes:Routers,
    // 去掉#号
    mode:'history',
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
