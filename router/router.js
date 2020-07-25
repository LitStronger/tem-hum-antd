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
            redirect: "/index",
            component: platform,
            // props: (route)=>({
            //     token: route.query.token
            // }),
            children:[
                {            
                    path: '/index',
                    name: 'index',
                    component: index,
                    props: (route)=>({
                        userInfo: route.query
                    })
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
                        userInfo: route.query
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

