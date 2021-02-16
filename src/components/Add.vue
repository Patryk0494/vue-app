<template>
  <div>
    <select v-model="selected" @input="setCurrency" >
      <option v-for="elem in currenc" v-bind:value="elem" :key="elem">{{ elem }}</option>
    </select>
    <input type="number" :value="rate" @input="addCurrencyRate" />
    <button>Save Currency</button>
    <span>wybrana waluta: {{selected}} </span>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Add',
  data: function() {
    return {
      selected: '',
    }
  },
  computed: {
    ...mapGetters([
      'currenc'
    ]),
    ...mapState([
      'selected'
    ])
  },
  methods: {
    setCurrency(selected) {
      this.$store.commit('setCurrency', selected.target.value)
      console.log(selected.target.value)
    },
    addCurrencyRate(e) {
      this.$store.commit('setRate', e.target.value)
    }
  },
}

</script>

<style scoped lang="sass">

</style>
