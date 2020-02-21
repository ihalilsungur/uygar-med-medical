import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLazyLoad from 'vue-lazyload'
import {router} from "./router/router"
import "./assets/plugins/fontawesome"

Vue.use(VueLazyLoad);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
