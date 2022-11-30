//// import Vue from "vue";
//import * as Vue from "vue";

//import Vuelidate from 'vuelidate';
//import App from "./App.vue";
////import store from "./store";
//import router from "./router";
////import 'bootstrap'; // TODO: figure out if need this at all - these are js stuff from bootstrap
//// Note for sweet alert:
///* We are just importing our config of it here, and we don't have to use it anywhere in file to work.
// * It will work globally by iself since that is specified in "sweet-alert/index.js" file. */
////import sweetAlert from "./sweet-alert";
////import VueSignaturePad from 'vue-signature-pad';
////import VueQrcode from '@chenfengyuan/vue-qrcode';


//// Validation
//Vue.use(Vuelidate)

//// Signature pad / Canvas
////Vue.use(VueSignaturePad);

//// vue-qrcode
////Vue.component(VueQrcode.name, VueQrcode);


//// Font awesome logic
////import { library } from '@fortawesome/fontawesome-svg-core';
////import {
////    faHome, faAngleDoubleRight, faAngleDoubleLeft, faDatabase, faLayerGroup, faBook, faPencilAlt,
////    faChalkboardTeacher, faTable, faMapMarkedAlt, faChartBar, faSearch, faUser, faIdCard, faInbox,
////    faCalendarAlt, faSlidersH, faSignOutAlt, faBell, faThumbsUp, faUserPlus, faShareAlt, faEnvelope, faRobot,
////    faCheck, faWindowClose, faUsers, faCog, faSortDown, faSortUp, faFileExcel, faStepForward, faStepBackward,
////    faChevronLeft, faChevronRight, faCheckSquare, faSquare, faRedoAlt, faSyncAlt, faFilter,

////    // New menu items
////    faShoppingCart,  faHeadset,  faPalette,  faShoppingBag,  faWarehouse,  faPallet,  faShippingFast,  faColumns,  faEuroSign, faTools,

////    faPlus, faTimes, faExclamation, faExclamationTriangle, faCaretRight, faTrashAlt, faCloudUploadAlt, faUserLock, faCartPlus, faExchangeAlt
////} from '@fortawesome/free-solid-svg-icons';
////import { faJava, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
////import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
////library.add(faHome, faAngleDoubleRight, faAngleDoubleLeft, faDatabase, faLayerGroup, faBook, faPencilAlt,
////    faChalkboardTeacher, faTable, faMapMarkedAlt, faChartBar, faSearch,
////    faUser, faIdCard, faInbox, faCalendarAlt, faSlidersH, faSignOutAlt, faBell,
////    faThumbsUp, faUserPlus, faShareAlt, faEnvelope, faRobot, faJava, faWhatsapp, faCheck, faWindowClose,
////    faUsers, faCog, faSortDown, faSortUp, faFileExcel, faStepForward, faStepBackward, faChevronLeft,
////    faChevronRight, faCheckSquare, faSquare, faRedoAlt, faSyncAlt, faFilter, faExclamation,

////    // New menu items
////    faShoppingCart, faHeadset, faPalette, faShoppingBag, faWarehouse, faPallet, faShippingFast, faColumns, faEuroSign, faTable, faTools,

////    faPlus, faTimes, faExclamationTriangle, faCaretRight, faTrashAlt, faCloudUploadAlt, faUserLock, faCartPlus, faExchangeAlt);
////Vue.component('FontAwesomeIcon', FontAwesomeIcon);



//// Mikey custom directives cause I kind of hate myself
//import uiAuthGuard from '@/custom-directives/ui-auth-guard'
//Vue.directive('uiAuthGuard', uiAuthGuard);


//new Vue({
//    store,
//    router,
//    render: (h) => h(App),
//}).$mount("#app");


import App from './App.vue';
import { createApp } from 'vue';
import router from './router';
var Vue = require('vue')


//createApp(App)
//  .use(router)
//  .mount('#app');

  Vue
    .createApp(App)
	  .use(router)
    .mount('#app')
