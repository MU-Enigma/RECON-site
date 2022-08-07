import { createRouter, createWebHistory } from "vue-router"

import Home from './Home.vue'
const Contributors = () => import('./Contributors.vue')

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/contributors',
      component: Contributors,
      name: 'contributors'
    },
    {
      path: '/gallery',
      component: Home,
      name: 'gallery'
    },
    {
      path: '/stats',
      component: Home,
      name: 'stats'
    }
  ]
})