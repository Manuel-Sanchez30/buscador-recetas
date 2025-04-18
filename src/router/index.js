import { createRouter, createWebHistory } from 'vue-router'
import inicio from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio
    }, 
    {
      path: '/favoritos',
      name: 'favoritos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FavoritosView.vue'),
    },
    {
      path: '/ia',
      name: 'ia',
      component: () => import('../views/IAView.vue'),
    },
  ],
})

export default router
