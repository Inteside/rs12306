import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'LoginIndex',
        component: () => import('../components/Login/LoginIndex.vue')
    },
    {
        path: '/index',
        name: 'Index',
        component: () => import('../components/Main/Main.vue'),
        redirect: '/index/GrabTickets',
        children: [
            {
                path: 'GrabTickets',
                name: 'GrabTickets',
                component: () => import('../components/Main/components/Body/GrabTickets.vue')
            },
            {
                path: 'Administration',
                name: 'Administration',
                component: () => import('../components/Main/components/Body/Administration.vue')
            },
            {
                path: 'SetUp',
                name: 'SetUp',
                component: () => import('../components/Main/components/Body/SetUp.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;