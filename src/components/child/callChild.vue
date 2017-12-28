<template>
	<div class="child">
		<h1>这是子组件</h1>
		<p>子组件接收到的msg数据是<br>{{msg}}</p>
		<p>下边的input是改变父组件传递过来的数据，看看是否影响父组件的原始数据</p>
		<input type="text" name="" v-model="msg">
	</div>
</template>
<script>
	export default {
		name: 'callChildOne',
		// 子组件利用props来接受父组件传递的数据
		props: ['msg']
	}
</script>
<style>
	.child {
		padding: 30px 0;
		background-color: #ccc;
	}
</style>