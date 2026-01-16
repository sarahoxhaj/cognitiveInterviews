// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import FirstView from "./components/FirstView.vue";
import ConsentForm  from "./components/ConsentForm.vue";
import BackgroundView from "./components/BackgroundView"
import ItemValidation from "./components/ItemValidation.vue"

const routes = [
  {
    path: "/",
    name: "FirstView",
    component: FirstView,
  },
  {
    path: "/ConsentForm",
    name: "ConsentForm",
    component: ConsentForm,
  },
  {
    path: "/BackgroundView",
    name: "BackgroundView",
    component: BackgroundView,
  },
  {
    path: "/ItemValidation",
    name: "ItemValidation",
    component: ItemValidation,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;