import { createRouter, createWebHistory } from 'vue-router'

import LoginModule from '../modules/LoginModule.vue'
import HomeModule from '../modules/HomeModule.vue'
import VacanciesModule from '../modules/VacanciesModule.vue'
import DefaultLayout from '../components/layouts/DefaultLayout.vue'

const routes = [
    {
        path: '/',
        redirect: { name: 'Home' },
        component: DefaultLayout,
        children: [
            { path: '/home', name: 'Home', component: HomeModule },
            { path: '/vagas', name: 'Vacancies', component: VacanciesModule }
        ]
    },
    { path: '/login', name: 'Login', component: LoginModule },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router