<template>
	<div>
		<p>父子组件之间的数据的传递</p>
		<p>双向数据流动：父组件数据改变影响子组件数据，子组件数据改变影响父组件数据（不推荐，危险性太高一个父组件拥有众多的子组件，一个子组件数据改变影响了父组件，全部的子组件数据都改变）</p>
		<p>单向数据流动是vue推荐的，就是父组件改变影响子组件，反之则不影响一般用prop座位桥梁</p>
		<h1>这是父组件</h1>
		<p>input框是用来改变父组件数据的看看对子组件是否产生影响</p>
		<input type="text" name="" v-model='msg'>
		<!-- 利用v-bind:子组件数据名=‘父组件要发送的数据’ -->
		<p>子组件1</p>
		<callChildOne :msg="msg"></callChildOne>
		<h2>数组类型的数据msg3</h2>
		<ul>
			<li v-for='(list,index) in msg3'>{{index}}====={{list}}</li>
		</ul>	
		<p>子组件2</p>
		<callChildTwo :msg-string='msg1' :msg-array='msg3'></callChildTwo>
	</div>
</template>
<script>
	import callChildOne from './child/callChild.vue';
	import callChildTwo from './child/callchildtwo.vue';
	export default {
		name: 'PsendC',
		data() {
			return {
				msg: '--父组件的数据--',
				msg1: '父组件的数据',
				msg2: '1',
				msg3: ['one','two','tree']
			}
		},
		components: {callChildOne,callChildTwo}
	}
</script>