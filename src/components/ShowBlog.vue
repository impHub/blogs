<template>

<!-- 自定义指令传参  -->
    <div v-theme="'wide'" id="show-blogs">
      <h1>博客总览</h1>
      <!-- 搜索框 -->

      <input type="text" v-model="search" placeholder="搜索">
        <div v-for="(blog,index) in filter" class="single-blog" :key="index">

            <!-- 每一次渲染都要执行指令函数   自定义过滤器-->
        <router-link :to="'/blog/'+blog.id">
    <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        </router-link>
            

            <article >
                {{blog.content | snippet}}
            </article>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            blogs:[],
            search:''
        }
    },
    created(){
        this.$axios.get("https://wd6722557241mhrlvs.wilddogio.com/posts.json")
                    .then(res=>{
                        
                        console.log(res.data,'data');
                        let data = res.data;
                        let arr = [];
                        // 遍历对象
                          for(let key in data){
                              data[key].id = key;
                            //   console.log(key,data[key]);
                            arr.push(data[key]);
                        }
                        this.blogs = arr;
                        console.log(arr,'arr')
                    })
    },
    computed:{
        filter(){
            // console.log('faliter')
            return this.blogs.filter(blog=>{
                    // console.log(blog.title.match(this.search))
                return blog.title.match(this.search);
            })
        }
    },
    // 局部过滤器
    filters:{
        "to-uppercase":function(value){
            return value.toUpperCase();
        }
    },
    // 局部自定义指令
    directives:{
        'rainbow':{
            bind(el,binding,vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2,8)
            }
        }
    }
}
</script>

<style>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
}

.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a{
  color: #444;
  text-decoration: none;
}

input[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}


</style>
