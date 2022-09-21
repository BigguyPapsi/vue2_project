import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../components/DashBoard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/Alluser',
    name: 'Alluser',
    component: () => import('../components/UserData.vue')
  },
  {
    path: '/Room',
    name: 'Room',
    component: () => import('../components/Room.vue')
  },
  {
    path: '/RoomType',
    name: 'RoomType',
    component: () => import('../components/RoomType.vue')
  },

  {
    path: '/Edit',
    name: 'Edit',
    component: () => import('../components/Edit.vue')
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
