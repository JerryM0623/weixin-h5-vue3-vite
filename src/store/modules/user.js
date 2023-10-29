import { defineStore } from 'pinia'

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
const useUserStore = defineStore('user', {
    // state 是存放数据的地方，所有的数据都应该存放在这里面
    state: () => {
        return {
            name: "",
            age: 0,
            gender: 0, // 0 为男性 1为女性
        }
    },

    // action 是以前 vuex 中 action 和 mutaion 的合体，可以异步发送请求，也可以直接修改 state 中的数据
    actions: {
        setUserInfo(info) {
            // 可以通过 this 直接访问整个实例数据
            this.name = info.name;
            this.age = info.age;
            this.gender = info.gender;
        },
        // 获取数据
        getUserInfo() {
            return {
                name: this.name,
                age: this.age,
                gender: this.gender
            }
        }
    },

    // getter 就是以前的 getter ，类似于组件中的 computed
    getters: {
        getDoubleAge() {
            // getter 也可以使用 this 直接访问整个 store 实例
            return this.age * 2;
        }
    }
})

export default useUserStore;