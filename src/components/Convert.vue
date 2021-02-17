<template>
    <div>
        <h2>Convert</h2>
        <div>
            <input type="number" v-model="quantity" @change="convertQuantity">
            <select name="currenc" v-model="chooseCurrenc">
                <option v-for="(value, name) in tableData" v-bind:key=" name">{{ value && name }}</option>
            </select>
            <span>{{result}}</span>
        </div>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'Convert',
    data() {
        return {
            quantity: null,
            result: null,
            chooseCurrenc: ''
        }
    },
        computed: {
        ...mapGetters([
            'tableData',
        ])
    },
    methods: {
        convertQuantity() {
            this.result = this.quantity * this.$store.state.currenc[this.chooseCurrenc]
            console.log(this.result, this.quantity)
            console.log(this.$store.state.currenc[this.chooseCurrenc])
        }
    }
}
</script>

<style>

</style>