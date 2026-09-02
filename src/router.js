// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import FirstView from "./components/FirstView.vue";
import ConsentForm  from "./components/ConsentForm.vue";
import BackgroundView from "./components/BackgroundView"
import ItemValidation from "./components/ItemValidation"
import LastView from "./components/LastView.vue"
import PostQuestionnaire from "./components/PostQuestionnaire.vue";
import TrainingTask from "./components/TrainingTask.vue";
import OverviewView from "./components/OverviewView.vue";
import OtherItems from "./components/OtherItems.vue";

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
  {
    path: "/LastView",
    name: "LastView",
    component: LastView,
  },
  {
    path: "/PostQuestionnaire",
    name: "PostQuestionnaire",
    component: PostQuestionnaire,
  },
  {
    path: "/TrainingTask",
    name: "TrainingTask",
    component: TrainingTask,
  },
  {
    path: "/OverviewView",
    name: "OverviewView",
    component: OverviewView,
  },
  {
    path: "/OtherItems",
    name: "OtherItems",
    component: OtherItems
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;