<template>
  <div id="app" class="vertical layout">
    <!-- Loader -->
    <!-- <AppLoader></AppLoader> -->

    <div class="layout-wrap">
      <!--<HorizontalNavbar></HorizontalNavbar>
      <VerticalNavbar v-if="showMenu"></VerticalNavbar>-->

      <main id="main-content" class="main">
        <div class="content-container">
          <div class="content">

            <h1> HOOOOOOOOOME </h1>

            <router-link to="/">
              Home
            </router-link> |
            <router-link to="/about">
              About
            </router-link>


            <!--<div v-if="alert.data.message" :class="`alert ${alert.data.type} no-margin`">
              <div class="row justify-content-end">
                <div class="col-4">
                  {{alert.data.message}}
                </div>
                <div class="col-4">
                  <font-awesome-icon class="text-end" icon="window-close" v-on:click="alert.close"/>
                </div>
              </div>
            </div>-->

            <router-view />
          </div>
        </div>

        <!--<Footer></Footer>-->
      </main>
    </div>
  </div>
</template>

<script>
//import { menuBehaviour } from "./common/menu-behaviour";
//import HorizontalNavbar from "./views/Shared/HorizontalNavbar.vue";
//import VerticalNavbar from "./views/Shared/VerticalNavbar.vue";
//import Footer from "./views/Shared/Footer.vue";
//import AppLoader from "@/Views/Shared/AppLoader.vue";
//// import { mapGetters, mapActions } from "vuex";
//import { omitArray } from "@/common/methods";

export default {
    //components: { HorizontalNavbar, VerticalNavbar, Footer, AppLoader },
    //created() {
    //  /* Explanation:
    //   * Update, we actually can (I asked here: https://github.com/avil13/vue-sweetalert2/pull/131), but leaving it here for future purposes.
    //   * __________________________________________
    //   * Since we cannot acces "this.$swal" from our stores, we have to create a watch here to "observe" changes in our toaster state,
    //   * and then fire toaster when they happen.*/
    //  this.$store.watch(
    //    state => {
    //      return state.sweetToast.ticks;
    //    },
    //    toast => {
    //      // If we don't have "globalSwal" variable in our "sweet-toast.js", we need to add it
    //      // We need it to call functions from "this.$swal" that is inaccessible there
    //      if(!this.currentToast.globalSwal)
    //        this.addGlobalSwal(this.$swal);
    //      // I cannot omit to remove "ticks" and "globalSwal" because I still need functions from this.currentToast :(
    //      // const swalOptions = omitArray(this.currentToast, ['ticks', 'globalSwal']);
    //      this.$swal(this.currentToast);
    //    }
    //  );
    //},
    //mounted() {
    //  menuBehaviour();
    //},
    //methods: {
    //  //...mapActions({
    //  //  addGlobalSwal: 'sweetToast/setGlobalSwal' // method for "sweet-toast.js"
    //  //}),
    //},
    //computed: {
    //  //...mapGetters({
    //  //      // map `sweetToast/currentToast` to `this.currentToast`
    //  //    currentToast: 'sweetToast/currentToast' // method for "sweet-toast.js"
    //  //}),
    //  alert () {
    //        return {
    //            data: this.$store.state.alert,
    //            close: () => this.$store.dispatch('alert/clear')
    //        }
    //  },
    //  showMenu() {
    //    const publicPages = ["Login", "Login2FA", "Setup2FA", "Register", "Forgot password", "Reset password", "Client quotation", "Terms of service - NL"];
    //    const authRequired = !publicPages.includes(this.$route.name + "");
    //    return authRequired;
    //  },
    //},
    //watch:{
    //      // method being used by "alert.js"
    //      // TODO: Check if this can be moved to router
    //      $route (to, from){
    //          // clear alert on location change
    //          this.$store.dispatch('alert/clear');
    //      }
    //  }
};
</script>
<style lang="scss">
// Some say way to import stuff above is bad, because vue's pathfinding is awfull
// @import "./styles/bootstrap-bundle.scss";
// @import "./styles/dashboard.scss";
</style>
<style lang="scss" src="./styles/bundle.scss"></style>

<meta name="viewport" content="width=device-width, initial-scale=0.8" />
