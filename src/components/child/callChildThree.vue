<template>
	<div class="three">
		<h1>异步传递数据</h1>
		<p>传递过来的数据利用watch监听来进行处理：{{msgSync}}</p>
	</div>
</template>
<script>
	export default {
		name: 'callChildThree',
		props: ['msgSync'],
		watch: {
			msgSync (newval,oldval) {
				console.log(1111);
				console.log(newval,oldval);
			}
		}
	}
</script>