import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../App.vue'
import Add from '@/components/Add.vue'
import Convert from '@/components/Convert.vue'
import Table from '@/components/Table.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/convert',
    name: 'Convert',
    component: Convert
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
