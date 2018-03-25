import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    aside: false
  },
  mutations: {
    aside (state) {
      state.aside = !state.aside
    }
  }
})

export default store
