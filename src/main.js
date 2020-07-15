import Vue from 'vue'
import 'babel-polyfill' // 解决set is no defined
import Antd from 'ant-design-vue/lib';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from '../router/router' //引入路由
import echarts from 'echarts'
Vue.use(Antd)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
