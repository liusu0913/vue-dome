<template>
	<div>
		<h1>这是子页面one无参数</h1>
		<p>{{name}}</p>
	</div>
</template>

<script>
	export default {
		name: 'childone',
		data() {
			return this.$route.query;
		}
	}
</script>