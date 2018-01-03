// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false
// 引用vuex；
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		// 计数器声明
		count: 0
	},
	// 操作声明
	// 同步操作
	mutations: {
		add(state,obj) {
			// 这里的state就代表了store.state对象
			console.log(state);
			state.count += obj.step;
		}
	},
	// 异步操作
	actions: {
		addAsync(state, obj) {
			// 这里的异步的函数的state代表了store对象
			console.log(state);
			setTimeout(()=>{
				state.commit('add',obj);//这里的state.commit指定了用同步方法：第一个参数确定的是方法名字；这个方法会触发vue-devtools的记录
				// state.state.count += obj.step; // 不会触发vue-devtools的记录
			},1000);
		}
	}

})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注册store全局变量
  store,
  router,
  template: '<App/>',
  components: { App }
})
