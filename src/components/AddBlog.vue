<template>
<!-- 填写 添加博客 -->
    <div class="add-blog">
        <h2>添加博客</h2>
        <form v-if="submmited" action="">
            <label>博客标题</label>
            <input type="text" v-model="blog.title" required>

            <label>博客内容</label>
           <textarea v-model="blog.content"></textarea>
            <div id="checkboxes">
                <label >Vue.js</label>
                <input type="checkbox" v-model="blog.categories"
                value="Vue.js">
                <label >Node.js</label>
                <input v-model="blog.categories" type="checkbox" value="Node.js">
                <label >React.js</label>
                <input v-model="blog.categories" type="checkbox" value="React.js">
                <label >Angular4.js</label>
                <input v-model="blog.categories" type="checkbox" value="Angular4.js">
            </div>
            <label>作者:</label>
            <select v-model="blog.author">
                <option v-for="(author,index) in authors" :key="index">{{author}}</option>
            </select>
            <!--prevent取消btn默认刷新  -->
            <button v-if="!key" @click.prevent="post">添加博客</button>
            <button v-else @click.prevent="put">编辑博客</button>
        </form>
        <div v-if="!submmited">
            <h3>您的博客发布成功!</h3>
        </div>
        <!-- <hr> -->
        <div id="preview">
            <h3>博客总览</h3>
            <p>博客标题：{{blog.title}}</p>
            <p>博客内容</p>
            <p>{{blog.content}}</p>
            <p>博客分类：</p>
            <ul v-for="categories in blog.categories" :key="categories">
                <li >{{categories}}</li>
            </ul>
            <p>作者：{{blog.author}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            blog:{
                title:'',
                content:'',
                categories:[],
                author:''
            },
            authors:['yu','jia','rui'],
            submmited:true,
            key:this.$route.params.id
        }
    },
    methods:{
        post(){
            // console.log('post')
            this.$axios.post("https://wd6722557241mhrlvs.wilddogio.com/posts.json",this.blog)
                    .then(res=>{
                        // 已经成功添加
                        console.log(res,res.config.data);
                        this.submmited = false;
                    })
        },
        put(){
           this.$axios.put("https://wd6722557241mhrlvs.wilddogio.com/posts/"+this.key+'.json',this.blog)
                      .then(res=>{
                       this.submmited = false;
                        
                      })
        }
       

    },
    created(){
      console.log(this.$route.params.id,'gouzi');
        let key = this.$route.params.id;
      if(key){
          this.$axios.get("https://wd6722557241mhrlvs.wilddogio.com/posts/"+key+'.json')
                    .then(res=>{
                      // console.log(res.data,'haha')
                      this.blog = res.data;
                    })
      }
    }
}
</script>

<style scoped>
.add-blog *{
  box-sizing: border-box;
}

.add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}

textarea{
  height: 200px;
}

#checkboxes label{
  display: inline-block;
  margin-top: 0;
}

#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}

</style>

