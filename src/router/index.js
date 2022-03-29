import Vue from 'vue'
import VueRouter from 'vue-router'
import Preview from '../views/Preview.vue'
import Form from '../views/Form.vue'
Vue.use(VueRouter)

const routes = [
  {
    alias: '/',
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview

    //component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
