import Api from '../../services/api'

const state = {
  data: {},
  date: null,
  policy: false
}

const getters = {
  data: (state) => state.data,
  date: (state) => state.date,
  policy: (state) => state.policy
}

const actions = {
  getDB ({ state, commit, dispatch, rootState }) {
    return new Promise((resolve, reject) => {
      Api.server.getDB()
        .then(({ data }) => {
          commit('save', data)
          resolve(data)
        }).catch(error => {
        reject(error)
      })
    })
  },
  getDate ({ state, commit, dispatch, rootState }) {
    return new Promise((resolve, reject) => {
      Api.server.getDate()
        .then(({ data }) => {
          commit('SET_DATE', data)
          resolve(data)
        }).catch(error => {
        reject(error)
      })
    })
  }
}

const mutations = {
  save (state, data) {
    state.data = data
  },
  SET_DATE (state, date) {
    state.date = date.date
  },
  ACCEPT_POLICY (state) {
    state.policy = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
