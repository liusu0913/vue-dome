<template>
	<div>
		<h1>this.$http.get方法请求的数据渲染</h1>
		<ul>
			<li v-for="list in lists">{{list}}</li> <!-- 数据渲染利用v-for -->
		</ul>	
	</div>
</template>
<script>
	export default {
		name: 'msg',
		data() {
			return {
				lists:[]
			}
		},
		/*
			这里是vue的生命周期
		*/
		mounted () {
			// vue-resource的后台请求数据的方法；可以查看文档
			this.$http.get('http://localhost:8080/static/score.json').then((data)=>{
				this.lists = data.body.data;
			});
		}
	}
</script>