// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Textcheck from '../views/Textcheck.vue';
import Datatable from '../views/Datatable.vue';
import CPOEDemo from '../views/CPOEDemo.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Textcheck',
    name: 'Textcheck',
    component: Textcheck,
  },
  {
    path: '/CPOEDemo',
    name: 'CPOEDemo',
    component: CPOEDemo,
  },
  {
    path: '/Datatable',
    name: 'Datatable',
    component: Datatable,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
