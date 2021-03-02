import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import('../components/login')
const platform = () => import('../platform')
const device = () => import('../device')
const index = () => import('../index')


Vue.use(VueRouter); // 注册路由

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: login,
        },
        {
            path: '/login',
            name: '',
            component: login
        },
        {
            path: '/platform',
            name: 'default',
            redirect: "/platform/index",
            component: platform,
            children: [
                {
                    path: 'index',
                    name: 'index',
                    component: index,
                    props: (route) => ({
                        userInfo: route.query
                    })
                },
                {
                    path: 'device',
                    name: 'device',
                    component: device,
                    props: (route) => ({
                        userInfo: route.query
                    })
                }
            ]
        },

    ]
})

