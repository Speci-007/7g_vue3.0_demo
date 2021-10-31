import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path:'/',
    name:"api",
    component:()=>import('../app2/page/api.vue')
  },
  {
    path:'/api',
    name:"api",
    component:()=>import('../app2/page/api.vue')
  },
  {
    path:'/onchange',
    name:"onchange",
    component:()=>import('../app2/page/onchange.vue')
  },
  {
    path:'/use',
    name:"use",
    component:()=>import('../app2/page/use.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
