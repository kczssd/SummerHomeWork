import Vue from 'vue'
import Vuex from '../vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age: 19
  },
  getters: {
    nowAge: (state) => {
      return state.age + 1
    }
  },
  mutations: {
    addAge(state, num) {
      state.age += num;
    }
  },
  actions: {
    addAgeAsync(context, num) {
      setTimeout(() => {
        context.commit('addAge', num)
      }, 1500)
    }
  },
  modules: {
  }
})
