import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currenc: {
            USD: null,
            EUR: null,
            GBP: null,
            CZK: null
        },
        selected: ''
    },
    getters: {
        currenc: state => Object.keys(state.currenc)
    },
    mutations: {
        setCurrenc(state, value) {state.selected = value},
        // setRate(state, rate) {state.currency.selected = rate}
    }
})
export default store;