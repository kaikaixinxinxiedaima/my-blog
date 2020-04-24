import Vue from "vue";
import App from "./App";
import router from "./router";
// import { routes } from "./router/routes";

import { setupPage } from "csstips";

setupPage("#app");

new Vue({
  router,
  render: (r) => r(App),
}).$mount("#app");
