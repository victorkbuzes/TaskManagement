import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tasks',
      name: 'tasks',
     
      component: () => import('../views/TasksList.vue')
    },
    {
      path: '/addTask',
      name: 'addTask',
     
      component: () => import('../views/AddTasks.vue')
    },
    {
      path: '/editTask/:id',
      name: 'editTask',
      params: true,
      props:true,
      component: () => import('../views/EditTask.vue')
    },
    {
      path: '/completeTask',
      name: 'completeTask',
     
      component: () => import('../views/CompleteTasks.vue')
    },
    {
      path: '/incompleteTask',
      name: 'incompleteTask',
     
      component: () => import('../views/IncompleteTask.vue')
    },

  ]
})

export default router
