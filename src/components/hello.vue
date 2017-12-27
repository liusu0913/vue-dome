<template>
	<div>
		<h1 class="hello">{{msg}}</h1>
		<router-link :to="{path: '/'}">返回首页</router-link>	
	</div>
	
</template>
<script>
	export default {
		name: 'hello',
		data () {
			return {
				msg : 'Hello（无出传递参数）'
			}
		}
	}
</script>
<style>
h1 {
	color: red;
}
	
</style>