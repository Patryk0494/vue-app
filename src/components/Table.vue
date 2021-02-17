<template>
    <div class="content">
        <table class="table">
            <tr class="table--headline">
                <th class="col1">Currency</th>
                <th class="col2">Currency Rate</th>
            </tr>
            <tr v-for="(value, name) in tableData" v-bind:key="name" class="table--row">
                <td v-if="value !== null">{{ value && name }}</td>
                <td v-if="value !== null">{{ value }}</td>
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

<style scoped>
    table {
        width: 80%;
        border-collapse: collapse;
        line-height: 180%;
        text-align: center;
    }
    table, td, tr, th {
        border: 1px solid black;
    }

    th.col1, th.col2 {
        width: 50%;
    }


</style>