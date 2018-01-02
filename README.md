# dome

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


## 分支

``` bash
# call分支是组件之间的传递的例子；
## PsendmsgtoC是父组件传递给子组件的例子，对应的子组件是callChild*这几个组件；
利用的prop和不同类型的数据的操作；

## CsendmsgtoP是子组件传递数据给父组件的例子，对应的子组件是childMsg组件；
利用父组件设置$on(v-on)的监听，子组件设置$emit触发函数来改变进行子组件影响父组件的操作

## border文件夹是兄弟组件之间的数据改变的传递；
利用一个公共的js来进行兄弟数据改变影响的操作；

```



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
