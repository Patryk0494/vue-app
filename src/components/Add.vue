<template>
  <div>
    <select v-model="selected">
      <option v-for="elem in currenc" :value="elem" :key="elem">{{ elem }}</option>
    </select>
    <input type="number" :value="(e)=> rate = event.target.value"  />
    <button @click="addCurrencyRate">Save Currency</button>
    <span>wybrana waluta: {{selected}} </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Add',
  data: function() {
    return {
      rate: ''
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
    // setCurrency() {
    //   this.$store.commit('setCurrency', this.selected)
    //   // console.log(selected.target.value)
    // },
    addCurrencyRate(rate) {
      this.$store.commit('setRate', rate)
    }
  },
}

</script>

<style scoped lang="sass">

</style>
