<template>
	<div>
		<p>父子组件之间的数据的传递</p>
		<p>双向数据流动：父组件数据改变影响子组件数据，子组件数据改变影响父组件数据（不推荐，危险性太高一个父组件拥有众多的子组件，一个子组件数据改变影响了父组件，全部的子组件数据都改变）</p>
		<p>单向数据流动是vue推荐的，就是父组件改变影响子组件，反之则不影响一般用prop座位桥梁</p>
		<h1>这是父组件</h1>
		<p></p>
		<!-- 利用v-bind:子组件数据名=‘父组件要发送的数据’ -->
		<callChildOne :msg="msg"></callChildOne>
	</div>
</template>
<script>
	import callChildOne from './child/callChild.vue'
	export default {
		name: 'PsendC',
		data() {
			return {
				msg: '--父组件的数据--'
			}
		},
		components: {callChildOne}
	}
</script>