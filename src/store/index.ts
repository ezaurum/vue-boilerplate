import Vue from "vue"
import Vuex from "vuex"
import i18n from "@/i18n"

Vue.use(Vuex)

export default new Vuex.Store({
  state: { session: null, locale: "ko" },
  mutations: {
    login(state, s) {
      state.session = s
    },
    locale(state, s) {
      state.locale = s
      i18n.locale = s
    },
  },
  actions: {},
  modules: {},
})
