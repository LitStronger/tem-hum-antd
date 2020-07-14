import Vue from 'vue'
import VueRouter from 'vue-router'


const overview = ()=>import('../src/overview')
const index = ()=>import('../src/index')

Vue.use(VueRouter); // 注册路由

export default new VueRouter({
    routes:[
        {
            path:'/overview',
            name: 'overview',
            component: overview,
        },
        {
            path:'/index',
            name: 'index',
            component: index,
        }
    ]
})

