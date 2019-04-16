<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 使用组件 -->
    <!-- <HelloWorld/> -->
    <!-- <AddBlog/> 
    <ShowBolg/> -->
    <BlogHeader></BlogHeader>
    <!-- <router-view></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
//引入组件
import HelloWorld from './components/HelloWorld'
// import AddBlog from './components/AddBlog'
// import ShowBolg from './components/ShowBlog'
import BlogHeader from './components/BlogHeader'



export default {
  name: 'App',
  components: {
    // 注册
    HelloWorld,
    // AddBlog,
    // ShowBolg,
    BlogHeader
  }
}
</script>

<style>

</style>
