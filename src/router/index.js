import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import GamePage from '@/views/GamePage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/numberduel',
    component: GamePage,
  }
  
]

const router = new VueRouter({
  routes
})

export default router
