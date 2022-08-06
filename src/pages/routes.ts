import { createRouter, createWebHistory } from "vue-router"

import Home from './Home.vue'

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
      component: Home,
      name: 'contributors'
    },
    {
      path: '/gallery',
      component: Home,
      name: 'gallery'
    }
  ]
})