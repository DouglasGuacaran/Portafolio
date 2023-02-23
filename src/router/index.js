import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: 'home',
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/sobremi",
    name: "Sobremi",
    component: () => import("../views/Sobremi.vue"),
  },
  {
    path: "/portafolio",
    name: "Portafolio",
    component: () => import("../views/Portafolio.vue"),
  },
  {
    path: "/contactame",
    name: "Contactame",
    component: () => import("../views/Contactame.vue"),
  },
  {
    path: "/*",
    name: "Error404",
    component: () => import("../views/Error404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
