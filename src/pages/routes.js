import { createRouter, createWebHistory } from "vue-router"

import Home from './Home.vue'
const Contributors = () => import('./Contributors.vue')
const Gallery = () => import('./Gallery.vue')

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
      component: Gallery,
      name: 'gallery'
    },
    {
      path: '/stats',
      component: Home,
      name: 'stats'
    }
  ]
})