import Vue from "vue";
import iView from "iview";
import locale from "iview/dist/locale/fr-FR"; // Change locale, check node_modules/iview/dist/locale

import VideoBg from "vue-videobg";
import VueParticles from "vue-particles";

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
//import "./fullpage.scrollHorizontally.min"; // Optional. When using fullpage extensions
import VueFullPage from "vue-fullpage.js";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//import Va from "vue-atlas";

//Vue.use(Va, "fr");

export default () => {
  Vue.use(ElementUI);
  Vue.use(VueFullPage);
  Vue.component("Hooper", Hooper);
  Vue.component("Slide", Slide);

  Vue.use(VueParticles);
  Vue.component("video-bg", VideoBg);
  Vue.use(iView, {
    locale
  });
};
