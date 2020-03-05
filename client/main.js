import Vue from "vue";
import App from "./App.vue";
import "./main.html";
import Quasar from 'quasar'
import VueRouter from "vue-router";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.min.css";
import router from './router.js'

Vue.use(Quasar)
Vue.use(VueRouter);


Meteor.startup(() => {
  new Vue({
    el: "#app",
    router,
    ...App
  });
});
