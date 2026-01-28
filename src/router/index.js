import { createRouter, createWebHashHistory } from "vue-router";
import { nextTick } from 'vue'

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "Home", component: () => import("@/pages/HomePage.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: async (to) => {
    if (to.hash) {
      await nextTick()
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router;
