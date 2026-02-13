import { createRouter, createWebHistory } from 'vue-router';
import Reviews from './pages/Reviews.vue';
import Settings from './pages/Settings.vue';
import Login from './pages/Login.vue';

const routes = [
  {
    path: '/',
    redirect: '/reviews'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: Reviews
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;