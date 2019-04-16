<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类：</p>
        <ul>
            <li  v-for="item in blog.categories" :key="item">
                {{item}}
            </li>
        </ul>
        <button @click="add()">编辑</button>
        <button @click="del()">删除</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 根据路由传来的哈希值
           id:this.$route.params.id,
           blog:{} 
        }
    },
    created(){
        console.log('sa')
        this.$axios.get("https://wd6722557241mhrlvs.wilddogio.com/posts/"+this.id+'.json')
                    .then(res=>{
                        console.log(res.data,'sing');
                        this.blog = res.data;
                    })
    },
    methods:{
        del(){
            this.$axios.delete("https://wd6722557241mhrlvs.wilddogio.com/posts/"+this.id+'.json')
                        .then(res=>{
                            // console.log('shanchu')
                            //删除之后跳转到主页
                            this.$router.push({path:'/'})
                        })
        },
        add(){
            this.$router.push({name:'add',
            params:{id:this.id}
            })
        }

    }
}
</script>

<style>

</style>
