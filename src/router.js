import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import About from './views/About.vue'
import ProjectDetails from './components/ProjectDetails.vue' // importa il nuovo componente

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/projects/:id', // aggiungi la nuova rotta parametrica
        name: 'ProjectDetails',
        component: ProjectDetails,

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
