<template>
	<div class="two">
		<p>次组建研究的是同步的情况：</p>
		<p>子组件进行强制类型检测，类型不对会报错</p>
		<p>input是将接收到的数组的数据输出</p>
		<p>字符串型的数据string：{{msgString}}</p>
		<input type="text" name="" v-model="msgString">
		<p>数值类型的数据number：{{msgNumber}}</p>
		<input type="text" name="" v-model="msgNumber">
		<p>数组类型的数据Array：{{msgArray}}</p>
		<input type="text" v-for="(list,index) in msgArray" v-model="msgArray[index]">
		<p>经过验证复杂的数据类型数据，父子组件会共用一个内存；所以改变子组件的传递数据会改变父组件的数据；解决办法是将父组件传递过来的数据利用data在进行保存在进行数据的处理</p>
		<p>简单的数据类型的传递如果在子组件改变会报错处理方法和上边一样</p>
	</div>
</template>

<script>
	export default {
		name: 'callChildTwo',
		props: {
			'msgString' : {
				type: String,
				default: '未传递数据'
			},
			'msgNumber': {
				type: Number,
				default: 0
			},
			'msgArray': {
				type: Array,
				default:[]
			}
		}
	}
</script>

<style>
	.two{
		padding:50px; 
		color: red;
		background-color: yellow;
	}
	
</style>