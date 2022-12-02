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
console.log(uiAuthGuard)

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
