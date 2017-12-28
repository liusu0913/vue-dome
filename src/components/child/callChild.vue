<template>
	<div class="child">
		<h1>这是子组件</h1>
		<p>子组件接收到的msg数据是{{msg}}</p>
	</div>
</template>
<script>
	export default {
		name: 'callChildOne',
		props: ['msg']
	}
</script>
<style>
	.child {
		padding: 30px 0;
		background-color: #ccc;
	}
</style>