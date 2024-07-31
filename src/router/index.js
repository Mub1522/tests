import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../components/Counter.vue')
    },
    {
      path: '/TaskList',
      name: 'TaskList',
      component: () => import('../components/TaskList.vue')
    }
  ]
})

export default router
