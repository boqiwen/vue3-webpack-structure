import { createRouter, createWebHashHistory } from 'vue-router';

const DefaultRoutes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import("@/views/login/index")
  },
  {
    name: 'Home',
    path: '/',
    component: () => import("@/views/home/index")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: DefaultRoutes
});

export default router;