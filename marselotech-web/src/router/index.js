import { createRouter, createWebHistory } from 'vue-router'
import HomeMarselotech from '../views/HomeMarselotech.vue'
import LoginDashboard from '../views/LoginDashboard.vue'
import DashboardMarselotech from '../views/DashboardMarselotech.vue'

const routes = [
  {
    path: '//',
    name: 'home',
    component: HomeMarselotech
  },
  {
    path: '/login',
    name: 'login',
    component: LoginDashboard
  },
  {
    path: '/dashboard/:userId',
    name: 'dashboard',
    component: DashboardMarselotech
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
