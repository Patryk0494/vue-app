<template>
  <div class="content">
    <span> {{(selected === 'select') ? 'select currenc' : `selected currenc: `}} </span>
    <select v-model="selected" >
      <option disabled >select</option>
      <option v-for="(value, name)  in tableData" :value="name" :key="name">{{ name }}</option>
    </select>
    <input type="number" v-model="inputVal" />
    <button @click="addCurrencyRate">Save Currency</button>
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
      'tableData'
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
      this.inputVal= null;
      this.selected = "select"
    },
  },
}

</script>

<style scoped>
</style>
