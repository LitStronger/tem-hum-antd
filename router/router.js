import Vue from 'vue'
import VueRouter from 'vue-router'


const device = ()=>import('../src/device')
const index = ()=>import('../src/index')

Vue.use(VueRouter); // 注册路由

export default new VueRouter({
    routes:[
        {
            path: '/',
            name: 'default',
            component: index
        },
        {
            path:'/index',
            name: 'index',
            component: index,
        },
        {
            path:'/device',
            name: 'device',
            component: device,
        },
    ]
})

