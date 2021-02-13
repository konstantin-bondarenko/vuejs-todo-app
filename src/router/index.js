import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../views/Todos.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'nav.todos', // Todos
    component: Todos
  },
  {
    path: '/edit',
    name: 'nav.edit', // edit
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
