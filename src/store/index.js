import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  actions: {
    LOG_IN: function ({ commit }) {
      commit('SET_LOGIN', { loggedIn: true })
    }
  },
  mutations: {
    SET_LOGIN: (state, { loggedIn }) => {
      state.isLoggedIn = loggedIn
    }
  },
  getters: {
    isLoggedIn (state) {
      return state.isLoggedIn
    }
  }
})

export default store
