import Vue from 'vue'
import 'babel-polyfill' // 解决set is no defined
import Antd from 'ant-design-vue/lib';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';

//引入路由
import router from '../router/router' 

//图片查看
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'

Vue.use(VueDirectiveImagePreviewer)
Vue.use(Antd)


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
