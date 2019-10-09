import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Component1 = () => import('../component/Component1')
const Component2 = () => import('../component/Component2')
const Cart = () => import('../component/Cart')
const Router = () => import('../component/Router')
const RouterTest1 = () => import('../component/RouterTest1')
const Child1 = () => import('../component/Child1')
const Child2 = () => import('../component/Child2')
const Login = () => import('../component/Login')
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/com1'

        },
        {
            path: '/com1',
            component: Component1
        },
        {
            path: '/com2',
            component: Component2
        },
        {
            path: '/cart',
            meta: {needLogin: true},
            component: Cart
        },
        {
            path: '/router',
            component: Router,
            children: [
                {
                    path: 'child1',
                    component: Child1
                },
                {
                    path: 'child2',
                    component: Child2
                }
            ]
        },
        {
            path: '/routertest1/:id',
            component: RouterTest1
        },
        {path: '/login', component: Login}
    ]
})
router.beforeEach((to, from, next) => {
    if (to.fullPath) {
        sessionStorage.setItem('path', to.fullPath)
    }
    if (to.meta.needLogin) {
        // 模拟异步操作,验证用户是否已经登陆
        setTimeout(() => {
            let state = {
                isLogin: true
            }
            if (state.isLogin) {
                next()
            } else {
                router.push('/login')
            }
        }, 200)
    } else {
        next()
    }

})
export default router
