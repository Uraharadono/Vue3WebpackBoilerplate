// Vuex store
//import store from "./store";

// Bootstrap
//import 'bootstrap'; // TODO: figure out if need this at all - these are js stuff from bootstrap

// Note for sweet alert:
/* We are just importing our config of it here, and we don't have to use it anywhere in file to work.
 * It will work globally by iself since that is specified in "sweet-alert/index.js" file. */
//import sweetAlert from "./sweet-alert";

// Signature pad / Canvas
//import VueSignaturePad from 'vue-signature-pad';
//Vue.use(VueSignaturePad);

// vue-qrcode
//import VueQrcode from '@chenfengyuan/vue-qrcode';
//Vue.component(VueQrcode.name, VueQrcode);


// Font awesome logic
//import { library } from '@fortawesome/fontawesome-svg-core';
//import {
//    faHome, faAngleDoubleRight, faAngleDoubleLeft, faDatabase, faLayerGroup, faBook, faPencilAlt,
//    faChalkboardTeacher, faTable, faMapMarkedAlt, faChartBar, faSearch, faUser, faIdCard, faInbox,
//    faCalendarAlt, faSlidersH, faSignOutAlt, faBell, faThumbsUp, faUserPlus, faShareAlt, faEnvelope, faRobot,
//    faCheck, faWindowClose, faUsers, faCog, faSortDown, faSortUp, faFileExcel, faStepForward, faStepBackward,
//    faChevronLeft, faChevronRight, faCheckSquare, faSquare, faRedoAlt, faSyncAlt, faFilter,
//    faShoppingCart,  faHeadset,  faPalette,  faShoppingBag,  faWarehouse,  faPallet,  faShippingFast,  faColumns,  faEuroSign, faTools,
//    faPlus, faTimes, faExclamation, faExclamationTriangle, faCaretRight, faTrashAlt, faCloudUploadAlt, faUserLock, faCartPlus, faExchangeAlt
//} from '@fortawesome/free-solid-svg-icons';
//import { faJava, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//library.add(faHome, faAngleDoubleRight, faAngleDoubleLeft, faDatabase, faLayerGroup, faBook, faPencilAlt,
//    faChalkboardTeacher, faTable, faMapMarkedAlt, faChartBar, faSearch,
//    faUser, faIdCard, faInbox, faCalendarAlt, faSlidersH, faSignOutAlt, faBell,
//    faThumbsUp, faUserPlus, faShareAlt, faEnvelope, faRobot, faJava, faWhatsapp, faCheck, faWindowClose,
//    faUsers, faCog, faSortDown, faSortUp, faFileExcel, faStepForward, faStepBackward, faChevronLeft,
//    faChevronRight, faCheckSquare, faSquare, faRedoAlt, faSyncAlt, faFilter, faExclamation,

//    // New menu items
//    faShoppingCart, faHeadset, faPalette, faShoppingBag, faWarehouse, faPallet, faShippingFast, faColumns, faEuroSign, faTable, faTools,

//    faPlus, faTimes, faExclamationTriangle, faCaretRight, faTrashAlt, faCloudUploadAlt, faUserLock, faCartPlus, faExchangeAlt);
//Vue.component('FontAwesomeIcon', FontAwesomeIcon);


//new Vue({
//    store,
//    router,
//    render: (h) => h(App),
//}).$mount("#app");


// Composition stuff in vue3
import { createApp } from 'vue';
// Router
import router from "./router";
// Validation
import Vuelidate from 'vuelidate';

// Our toaster library
// import sweetAlert from "./sweet-alert";
// import VueSweetalert2 from 'vue-sweetalert2';

// Mikey custom directives cause I kind of hate myself
// import uiAuthGuard from '@/custom-directives/ui-auth-guard'
import uiAuthGuard from "./custom-directives/ui-auth-guard"

// Main entry component
import App from './App.vue';

//createApp(App)
//	.use(router)
//	.use(Vuelidate)
//	.mount('#app')


const app = createApp(App);

// Stuff that works with Vue out of the box - mainly official stuff
app.use(router);
app.use(Vuelidate);

// Custom libs
// app.use(VueSweetalert2);


// Custom directives
app.directive('uiAuthGuard', uiAuthGuard);


app.mount('#app');
