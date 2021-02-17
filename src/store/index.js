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
        selected: 'select'
    },
    getters: {
        tableData: state => state.currenc
    },
    mutations: {
        setCurrenc(state, value) {state.selected = value},
        setRate(state, value) { state.currenc[state.selected] = value}
    }
})
export default store;