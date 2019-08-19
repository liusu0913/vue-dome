<template>
	<div>
		<h1>兄弟组件2</h1>
		<p>兄弟组件2的数据是：{{tMsg}}</p>
	</div>
</template>
<script>
	import Bus from './bus.js';
	export default {
		name: 'brotherTwo',
		data() {
			return {
				tMsg: '兄弟组件2'
			}
		},
		mounted(){
			setTimeout(()=> {
				this.tMsg = '嗨，我是改变的数据2';
				Bus.$emit('tMsg',this.tMsg);
			},1000);
		}
	}
</script>