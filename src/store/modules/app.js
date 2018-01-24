// initial state
const state = {
    appWorks: true,
    vuexIsOn: true
}

// getters
const getters = {
    isAppWorks: function (state) {
        return state.appWorks
    },
    isVuexOn: function (state) {
        return state.vuexIsOn
    }
}

// actions
const actions = {
    appStateSetAppWorks: function (context, bool) {
        context.commit('APP_WORKS', bool)
    }
}

// mutations
const mutations = {
    APP_WORKS: function (state, bool) {
        state.appWorks = bool
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
