<template>
	<div class="childRouter">
		<h1>拥有字路由的页面和参数的页面；本也的参数是{{name}}</h1>
		<h2>子路由</h2>
		<div class="child">
			<router-link :to="{path:'/childRoute/childone',query:{name:'liusu'}}">childone</router-link>
			<router-view></router-view>
		</div>
		
	</div>
</template>
<script>
	export default {
		name: 'childRouter',
		data() {
			return this.$route.query;
		}
	}
</script>
<style type="text/css" media="screen">
	.child {
		width: 400px;
		height: 500px;
		margin: 50px auto;
		background-color: yellowgreen;
		font-size: 25px;
		font-weight: 700;
		color: black;
	}
</style>