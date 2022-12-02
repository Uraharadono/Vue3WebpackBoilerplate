<template>
  <div>
    <AppLoader v-show="loading" />
    <h1>This is the about page</h1>
    <button @click="showAlert">
      Hello world
    </button>

    <!--<Tabs :tabs="tabs" :is-routed="true" />-->
  </div>
</template>

<script>
import ajax from "@/common/ajax";
import AppLoader from "@/Views/Shared/AppLoader.vue";
import Tabs from "@/components/Tabs";
// import { mapGetters, mapActions } from "vuex";
// import sweetAlert from "@/sweet-alert"; // doesn't work :'(

export default {
    components: { AppLoader, Tabs },
    data() {
        return {
            loading: false,
            tabs: [
                {
                    title: "Pictures",
                    content: "Pictures content",
                    navComponent: "Nesto"
                },
                {
                    title: "Music",
                    content:
            'Music content. Wanna see some <a href="#" data-show="3">Documents</a> content?',
                    navComponent: "Nesto 1"
                },
                {
                    title: "Videos",
                    content:
            'Videos content. <a href="#" data-alert="VIDEOS!!!">Alert videos</a>',
                    navComponent: "Nesto 2"
                },
                {
                    title: "Documents",
                    content:
            'Documents content. Wanna see some <a href="#" data-show="1">Music</a> content?',
                    navComponent: "Nesto 3"
                },
            ],
        };
    },
    created() {
    // console.log("created");
    },
    mounted() {  },
    methods: {
    // ...mapActions(["forgotPassword"]),
        showAlert() {
            // this.forgotPassword();
            // Use sweetalert2
            // this.$swal('Hello Vue world!!!');
            // sweetAlert("Hello");

            //       this.$swal({
            //   title: 'Error!',
            //   text: 'Do you want to continue',
            //   icon: 'error',
            //   confirmButtonText: 'Cool'
            // });

            //       this.$swal({
            //           icon: 'success',
            //   title: 'Signed in successfully',
            //   toast: true,
            //   position: 'top-end',
            //   showConfirmButton: false,
            //   timer: 3000,
            //   timerProgressBar: true,
            //   didOpen: (toast) => {
            //     toast.addEventListener('mouseenter', this.$swal.stopTimer)
            //     toast.addEventListener('mouseleave', this.$swal.resumeTimer)
            //   }
            // });
        },
    },
};
</script>
