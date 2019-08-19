<template>
	<div>
		<h1>这是子组件</h1>
		<p class="c">这是子组件的数据,1秒后悔传递给父组件:{{msg}}</p>
	</div>
</template>
<script>
	export default {
		name: 'childMsg',
		data() {
			return {
				msg: '子组件数据'
			}
		},
		mounted() {
			setTimeout(()=>{
				// 设置触发事件，第一个参数是触发的时间的名称sendMsg,第二个是
				this.$emit('sendMsg',this.msg)
			},1000)
		}
	}
</script>
<style>
.c{
	background-color: black
}
	
</style>