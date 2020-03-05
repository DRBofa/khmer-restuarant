import Home from "./pages/Home.vue";
import Customer from "./pages/Customer.vue";
import Item from "./pages/Item.vue";
import Table from "./pages/Table.vue";
import Food from "./pages/Food.vue";
import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    { path: "/home", component: Home },
    { path: "/customer", component: Customer },
    { path: "/item", component: Item},
    { path: "/table", component: Table},
    // { path: "/food", component: Food},
   
  ];
  
  const router = new VueRouter({
    routes // short for `routes: routes`
  });
  export default router
  