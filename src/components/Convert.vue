<template>
    <div class="content ">
        <input type="number" v-model="quantity" @input="convertQuantity">
        <select name="currenc" v-model="chooseCurrenc" @change="convertQuantity">
            <option v-for="(value, name) in tableData" v-bind:key="name">{{ value && name }}</option>
        </select>
        <span>In PLN {{result}}</span>
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
            chooseCurrenc: '',
        }
    },
        computed: {
        ...mapGetters([
            'tableData',
        ])
    },
    methods: {
        convertQuantity() {
            setTimeout(() => {this.result = this.quantity * this.$store.state.currenc[this.chooseCurrenc]}, 800 )
        }
    }
}
</script>

<style scoped>
    .convert {
        display: flex;
        flex-direction: row;
    }
</style>