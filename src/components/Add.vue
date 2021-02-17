<template>
  <div>
    <select v-model="selected">
      <option disabled >select</option>
      <option v-for="elem in currenc" :value="elem" :key="elem">{{ elem }}</option>
    </select>
    <input type="number" v-model="inputVal" />
    <button @click="addCurrencyRate">Save Currency</button>
    <span> {{(selected === 'select') ? 'wybierz walutę' : `wybrana waluta: ${selected}`}} </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Add',
  data: function() {
    return {
      inputVal: null
    }
  },
  computed: {
    ...mapGetters([
      'currenc'
    ]),
    selected: {
      get() {
        return this.$store.state.selected
      },
      set(value) {
        this.$store.commit("setCurrenc", value)
      }
    }
  },
  methods: {
    addCurrencyRate() {
      this.$store.commit('setRate', this.inputVal)
      this.inputVal= 0;
      this.selected = "select"
    },
  },
}

</script>

<style scoped lang="sass">

</style>
