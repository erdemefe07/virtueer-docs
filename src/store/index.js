import { createStore } from 'vuex'

import models from './models'
import roles from './roles'
import types from './types'
import requests from './requests'
import responses from './responses'
import project from './project'
import endpoints from './endpoints'

const store = createStore({
  modules: {
    models,
    roles,
    types,
    requests,
    responses,
    project,
    endpoints,
  },
  state() {
    return {
      user: null,
      modalHistory: [],
    }
  },
  mutations: {
    authenticate(state, user) {
      state.user = user
    }
  }
})

export default store