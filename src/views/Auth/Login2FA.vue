<template>
  <div>
    <div class="layout auth">
      <div class="log-in-page card">
        <div
          class="text-center custom-bg-color"
          style="overflow: visible; background: rgba(255, 255, 255, 0.2)">
          <h3 class="card-header star-inserted">
            <span>Twee factor verificatie</span>
          </h3>

          <div class="card-body login-gray" style="padding: 0px; overflow: visible">
            <ComponentLoader v-show="isLoading" />
            <form class="login-form mb-0" @submit.prevent="handleSubmit">
              <div class="form-group">

                <div
                  class="form-control"
                  :class="[$v.twoFactorCode.$error ? 'is-invalid' : '', '']">
                  <input
                    v-model="$v.twoFactorCode.$model"
                    class="input-control"
                    type="text"
                    placeholder="Geef de code in van uw authenticator device">
                </div>
                <div
                  v-if="!$v.twoFactorCode.required && $v.twoFactorCode.$dirty"
                  class="text-danger">
                  Field is required
                </div>
                <div
                  v-if="!$v.twoFactorCode.minLength && $v.twoFactorCode.$dirty"
                  class="text-danger">
                  Pin is longer than that!
                </div>
                <div
                  v-if="!$v.twoFactorCode.maxValue && $v.twoFactorCode.$dirty"
                  class="text-danger">
                  Something is wrong with your pin!
                </div>
              </div>

              <div class="d-grid gap-2">
                <button tabindex="0" class="btn btn-primary blue-gradient">
                  <span class="btn-text">Verifi&euml;ren</span>

                  <span class="btn-loader">
                    <i class="icon icofont-spinner" />
                  </span>
                </button>
              </div>
            </form>
            <!--<div class="forgot-box">
              <span class="divider" />
              <router-link to="/2fa-setup">
                Authenticator missing ?
              </router-link>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ajax from "@/common/ajax";
import { required, minLength, maxValue } from "vuelidate/lib/validators";
// import { mapGetters, mapActions } from "vuex";
import ComponentLoader from "@/Views/Shared/ComponentLoader.vue";

export default {
    components: { ComponentLoader },
    data() {
        return {
            isLoading: false,
            twoFactorCode: "",
        };
    },
    validations: {
        twoFactorCode: {
            required,
            minLength: minLength(6),
            maxValue: maxValue(999999),
        }
    },
    computed: {
        //loggingIn() {
        //    return this.$store.state.authentication.status.loggingIn;
        //},
    },
    created() {
    // reset login status
    // this.$store.dispatch('authentication/logout'); // this won't work like shown in example
        // this.logout();
    },
    mounted() {},
    methods: {
        ...mapActions(["loginWith2fa", "logout"]),
        async handleSubmit(e) {
            this.$v.$touch();
            if (this.$v.$invalid) return;

            this.isLoading = true;
            // Mapping can be done like this as well: "const { twoFactorCode, password } = this;"
            const data = {
                twoFactorCode: this.twoFactorCode,
            };
            await this.loginWith2fa(data);
            this.isLoading = false;
        }
    },
};
</script>
