<template>
	<div>
		<h1>{{tit}}</h1>
		<p>自用数据：{{tit}}</p>
		<div class="tochild">
	   传递给儿子组件的数据：<span class="hint">{{prop}}</span>
	  </div>
	  <div class="toeverywhere">
	   随意流动的数据：<span class="hint">{{stat}}</span>
	  </div>
	  <div class="count">
	  	<h1>计数器利用Vuex的</h1>
	  	<p>{{count}}</p>
	  	<button @click="one">同步点击</button>
	  	<button @click="two">异步点击</button>
	  </div>
	  <bOne></bOne>
	  <two></two>
	</div>
</template>
<script>

	import bOne from './brother/one.vue';
	import two from './brother/two.vue';

	export default {
		name: 'vuexIndex',
		data() {
			// 数据划分：将数据分为3类，按照数据的传递的方向来划分；自用数据，流向子组件的数据prop，和不知流向的数据starte数据（就是不确定数据下一步流向那个组件可能是孙组件啥的）
			return {
				tit: 'Vuex主页',
				prop: 1234,
				stat: 0
			}
		},
		computed: {
			count() {
				return this.$store.state.count;
			}
		},
		methods: {
			one() {
				// this.$store其中的commit代表的是同步的函数的对象集合；
				// dispatch代表的是异步的函数的对象集合
				// 选定特定的函数利用type函数名来确定用的函数
				this.$store.commit({
					type: 'add',
					step: 1
				})
			},
			two() {
				this.$store.dispatch({
					type: 'addAsync',
					step: 10
				})
			}
		},
		components: { bOne, two }
		

	}
</script>
<style>
.count {
	width: 500px;
	margin: 50px auto;
	background-color: greenyellow;
}
	
</style>