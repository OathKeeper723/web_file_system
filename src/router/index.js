import Vue from "vue";
import Router from "vue-router";
import pages from "./pages.js";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: pages.main_page
    }
  ]
});
