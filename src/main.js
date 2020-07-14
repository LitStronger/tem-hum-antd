import Vue from 'vue'
import Antd from 'ant-design-vue/lib';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from '../router/router' //引入路由

Vue.use(Antd)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
