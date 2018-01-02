<template>
	<div>
		<h1>这是父组件</h1>
		<p>1秒后会接收子组件的数据：{{msg}}</p>
		<childMsg v-on:sendMsg="getChildMsg"></childMsg>
	</div>
</template>
<script>
	import childMsg from './child/childMsg.vue';
	export default {
		name: 'CsendmsgtoP',
		data() {
			return {
				msg: '无数据'
			};
		},
		methods: {
			getChildMsg(cmsg) {
				console.log(this.msg);
				this.msg = cmsg;
			}
		},
		components:{childMsg}
	}
</script>
<style>
	p {
		background-color: red;
		color: white;
	}
</style>