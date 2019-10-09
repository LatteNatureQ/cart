import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Component1 = () => import('../component/Component1')
const Component2 = () => import('../component/Component2')
const Cart = () => import('../component/Cart')
// import Component1 from '../component/Component1'
// import Component2 from '../component/Component2'

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
            component: Cart
        }
    ]
})
export default router
