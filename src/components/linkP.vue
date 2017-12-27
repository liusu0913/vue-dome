<template>
	<div>
		<h1>传递的参数是：<br>userid={{userid}}------name={{name}}</h1>
		<router-link :to="{path: '/'}">返回首页</router-link>	

	</div>
</template>
<script>
	export default {
		name: 'linkP',
		data() {
			//console.log(this.$route.query);//这是传递过来的参数的获取
			return this.$route.query
		}
	}
</script>