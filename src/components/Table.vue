<template>
    <div>
        <h2>Table</h2>
        <table>
            <tr>
                <th>Currency</th>
                <th>Currency Rate</th>
            </tr>
            <tr v-for="value in tableData" v-bind:key="value[0]">
                <td>{{ value[1] && value[0] }}</td>
                <td>{{ value[1] }}</td>
            </tr>
        </table>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    name: 'Table',
    computed: {
        ...mapGetters([
            'tableData',
        ])
    }
}
</script>

<style>

</style>