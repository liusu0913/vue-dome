<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <helloworld></helloworld> -->
    <router-view/>
  </div>
</template>

<script>
// import helloworld from './components/HelloWorld.vue';
export default {
  name: 'app',
  // 引入组件的名称
  // components: {helloworld}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
