import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello'
import linkP from '@/components/linkP'
import msg from '@/components/msg'
import call from '@/components/PsendmsgtoC'
import send from '@/components/CsendmsgtoP'
import childRoute from '@/components/childRoute'
import childone from '@/components/child/childone.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 新路由
    {
    	path: '/hello',
    	name: 'hello',
    	component: hello
    },
    {
    	path: '/linkP/:id',
    	name: 'linkP',
    	component: linkP
    },
    {
        path: '/msg',
        name: 'msg',
        component: msg
    },
    {
    	path: '/childRoute',
    	name: 'childRoute',
    	component: childRoute,
    	children: [ //子路由的设置
    		{path:'childone/',component: childone}
    	]
    },
    {
        path: '/call',
        name: 'call',
        component: call,
    },
    {
        path: '/send',
        name: 'send',
        component: send,
    }
  ]
})
