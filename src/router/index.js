import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: MainView
    },*/
    {
      path: '/register',
      name: 'register',
      component: () => import('../modules/register/views/registerView.vue')
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../modules/counter/components/Counter.vue')
    },
    {
      path: '/taskList',
      name: 'taskList',
      component: () => import('../modules/taskList/components/TaskList.vue')
    }
  ]
})

export default router
