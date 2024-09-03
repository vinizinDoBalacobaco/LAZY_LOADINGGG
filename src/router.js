// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Defina a rota com lazy loading
const routes = [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue') // Lazy loading
  },
  // outras rotas
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;