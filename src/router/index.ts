import { createRouter, createWebHistory } from 'vue-router';
6;
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
        },
    ],
});

export default router;
