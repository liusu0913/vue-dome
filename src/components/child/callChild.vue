<template>
	<div class="child">
		<h1>这是子组件</h1>
		<p>子组件接收到的msg数据是{{msg}}</p>
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