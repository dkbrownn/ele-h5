import { createRouter, createWebHistory } from 'vue-router'
/* import HomeView from '../views/HomeView.vue' */
import TabsView from '@/views/tabs/TabsView.vue'
import HomeView from '@/views/home/Home.vue'
import OrderView from '@/views/order/OrderView.vue'
import MeView from '@/views/me/MeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsView,
      children: [
        { name: 'home', path: '/home', component: HomeView },
        { name: 'order', path: '/order', component: OrderView },
        { name: 'me', path: '/me', component: MeView }
      ]
    }
    /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } */
  ]
})

export default router
