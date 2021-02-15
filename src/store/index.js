import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        USD: null,
        EUR: null,
        GBP: null,
        CZK: null
    },
    mutations:
        set
})