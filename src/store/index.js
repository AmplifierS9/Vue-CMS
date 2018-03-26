import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    aside: false,
    expanded: [false, false]
  },
  mutations: {
    aside (state) {
      state.aside = !state.aside
    },
    expanded (state, payload) {
      state.expanded[payload.index] = !state.expanded[payload.index]
    }
  }
})

export default store
