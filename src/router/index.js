import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
// import Home from "@/components/Home";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/Home"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
