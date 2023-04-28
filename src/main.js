import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faMagnifyingGlass,
  faBell,
  faPlus,
  faBookmark,
  faMobileScreenButton,
  faCircleInfo,
  faBackwardStep,
  faForwardStep,
  faCaretLeft,
  faCaretRight
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
