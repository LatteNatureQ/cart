import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const ModuleA = {
    // 定义状态
    state: {
        count: 1,
        list: [{id: 1, text: "提莫"}, {id: 2, text: "盖伦"}, {id: 3, text: "剑圣"}]
    },
    // 写方法
    mutations: {
        addCount(state) {
            state.count++
        },
        fitterList(state) {
            state.list = state.list.filter(value => value.id != 2)
        },
        reduceCount(state) {
            state.count--
        }
    },
    // store的计算属性
    getters: {
        get: state => {
            return state.list.filter(item => item.id != 2)
        }
    },
    actions: {
        actionsMethods1({commit}) {
            setTimeout(() => {
                commit('reduceCount')
            }, 200)
        }
    }
}
const ModuleB = {
    state: {
        count: 0,
        num1: 0,
        num2: 0,
        price1: 100,
        price2: 200
    },
    getters: {
        price1: state => {
            return state.price1 * state.num1
        },
        price2: state => {
            return state.price2 * state.num2
        },
        count: state => {
            return state.price1 * state.num1 + state.price2 * state.num2
        }
    },
    mutations: {
        addCount(state) {
            state.count++
        },
        addNum1(state) {
            state.num1++
        },
        addNum2(state) {
            state.num2++
        },
        reduceNum1(state) {
            state.num1--
        },
        reduceNum2(state) {
            state.num2--
        }
    }
}
const store = new Vuex.Store({
    modules: {
        a: ModuleA,
        b: ModuleB
    }
})
export default store
