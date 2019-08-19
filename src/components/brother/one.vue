<template>
	<div>
		<h1>兄弟组件1</h1>
		<p>{{msg}}</p>
	</div>
</template>
<script>
	import Bus from './bus.js';
	export default {
		name: 'brotherOne',
		data(){
			return {
				msg: '兄弟一的数据'
			}
		},
		mounted(){
			Bus.$on('tMsg',(msg)=>{
				this.msg = msg;
			})
		}
	}
</script>