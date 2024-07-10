import HomePage from "@/components/HomePage.vue";
import Introduction from "@/components/Introduction.vue";
import { createRouter,createWebHashHistory } from "vue-router";

const routes = [
  {
    path:'/',
    component:HomePage
  },
  {
    path:'/mainPage',
    component:Introduction
  },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router