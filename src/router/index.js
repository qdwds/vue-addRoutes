import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store/index";
import { generateRouters } from "../utils/index";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:"*",
    component:()=>import(`@/views/404.vue`)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to,from,next)=>{
  //  如果没有权限就去后端获取
  if(!store.state.hashAuth){
    await store.dispatch('setUserRoutes');
    const newroutes = generateRouters(store.state.userRoutes);
    console.log(newroutes);
    router.addRoutes(newroutes)
    next({
      path:to.path
    })
  }else{
    next();
  }
})
export default router
