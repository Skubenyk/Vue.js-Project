import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    {
      path: '/todos',
      name: 'Todos',
      component: () => import('./views/Todos.vue'),
    },
  ],
});

createApp(App).use(router).mount('#app');
