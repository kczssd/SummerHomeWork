let Vue;
class Store {
    constructor(options) {//获取实例时用户传入的属性
        this.vm = new Vue({//保证状态更新刷新视图
            data: {
                state: options.state
            }
        })
        //getters
        let getters = options.getters;
        this.getters = {}
        Object.keys(getters).forEach(Name => {//拿到getters里的键名
            Object.defineProperty(this.getters, Name, {//在this.getters中添加属性方法
                get: () => {
                    return getters[Name](this.state)//函数->属性
                }
            })
        })
        //mutations
        let mutations = options.mutations;
        this.mutations = {}
        Object.keys(mutations).forEach(Name => {
            this.mutations[Name] = (num) => {//Name为string,muttations['...']
                mutations[Name](this.state, num)
            }
        })
        //actions
        let actions = options.actions;
        this.actions = {}
        Object.keys(actions).forEach(Name => {
            this.actions[Name] = (num) => {
                actions[Name](this, num)
            }
        })
    }
    commit = (funcName, num) => {
        this.mutations[funcName](num)
    }
    dispatch = (funcName, num) => {
        this.actions[funcName](num)
    }
    //类访问器
    get state() {
        return this.vm.state
    }
}

const install = (_Vue) => {
    Vue = _Vue;

    Vue.mixin({//为根实例的所有子组件加上$store
        beforeCreate() {
            if (this.$options.store) {
                this.$store = this.$options.store
            } else {
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}

export default {
    Store,
    install
}