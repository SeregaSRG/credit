import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import server from './modules/server'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    server
  },
  plugins: [createPersistedState({
    paths: ['server']
  })],
  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})
