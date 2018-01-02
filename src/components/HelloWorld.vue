<template>
  <div>
    <h1 class="helloworld">{{ msg }}</h1>
    <p>链接跳转</p>
    <router-link :to="{path:'/hello'}">(无参数)hello</router-link>
    <br>
    <router-link :to="{path:'/linkP/111',query:{userid:9527,name:'周星星'}}">（有参数）linkP</router-link>
    <br>
    <router-link :to="{path:'/msg'}">数据请求页面msg用vue-resoure</router-link>
    <br>
    <router-link :to="{path:'/call'}">利用prop进行父子组件之间通讯</router-link>
    <br>
    <router-link :to="{path:'/send'}">利用$on和$emit进行子组件传递数据给父组件</router-link>
    <br>
    <p @click="go">进入childRoute</p>
    <div class="brother">
      <h1>兄弟组件之间的数据传递的方法</h1>
      <p>利用一个公共的vue对象来传递数据</p>
      <div class="brother-one">
        <h2>兄弟一</h2>
        <bOne></bOne>
      </div>
      <div class="brother-two">
        <h2>兄弟二</h2>
        <bTwo></bTwo>        
      </div>
    </div>
  </div>  
  

</template>

<script>
import bOne from './brother/one.vue';
import bTwo from './brother/two.vue';
export default {
  // 组件名称
  name: 'HelloWorld',
  // 组件的渲染的数据
  data () {

    return {
      msg: '这是第一个测试vue'
    }
  },
  methods: {
    go() {
      this.$router.push({path:'/childRoute',query:{name:'刘粟'}});
    }
  },
  components: {bOne,bTwo}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
.brother {
  width: 500px;
  margin: 50px auto;
  background-color: yellow;
}
.brother-one {
  margin-bottom: 10px;
  border: 2px solid black;
}
.brother-two{
  border: 2px solid red;
}
</style>
