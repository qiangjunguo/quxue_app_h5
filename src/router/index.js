import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../views/operation_page/index'
Vue.use(VueRouter)

const routes = [
  {
    path:'/page',
    name:'page',
    component:Page
  },
  {
    path: '/',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/test/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  document.title = '趣学app';
  next()
})
export default router
