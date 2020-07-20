import Vue from 'vue'
import VueRouter from 'vue-router'

const login = ()=>import('../src/components/login')
const platform = ()=>import('../src/platform')
const device = ()=>import('../src/device')
const index = ()=>import('../src/index')


Vue.use(VueRouter); // 注册路由

export default new VueRouter({
    routes:[
        {
            path: '/',
            component: login
        },
        {
            path: '/login',
            name: '',
            component: login
        },
        {
            path: '/platform',
            name: 'default',
            component: platform,
            children:[
                {            
                    path: '/index',
                    name: 'index',
                    component: index,
                },
                // {
                //     path: 'device',
                //     name: 'device',
                //     component: device,
                // },
                {
                    path: '/device',
                    name: 'device',
                    component: device,
                    props: (route)=>({
                        id: route.query.id
                    })
                }
            ]
        },
        // {
        //     path:'/index',
        //     name: 'index',
        //     component: index,
        // },
        // {
        //     path:'/device',
        //     name: 'device',
        //     component: device,
        // },
    ]
})

