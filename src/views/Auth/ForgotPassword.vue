<template>
  <div class="layout auth">
    <div class="sign-up-page card">
      <div
        class="text-center custom-bg-color"
        style="overflow: visible; background: rgba(255, 255, 255, 0.2)">
        <h3 class="card-header star-inserted">
          <span>Please enter your email below </span>
        </h3>

        <div class="card-body" style="padding: 0px; overflow: visible">
          <ComponentLoader v-show="loading" />
          <form class="login-form mb-0" @submit.prevent="handleSubmit">
            <div class="form-group">
              <div
                class="form-control"
                :class="[$v.email.$error ? 'is-invalid' : '', '']">
                <input
                  v-model="$v.email.$model"
                  class="input-control"
                  type="text"
                  placeholder="Your emal here">
              </div>
              <div
                v-if="!$v.email.required && $v.email.$dirty"
                class="text-danger">
                Field is required
              </div>
              <div
                v-if="!$v.email.email && $v.email.$dirty"
                class="text-danger">
                Field has to be email
              </div>
            </div>

            <div class="d-grid gap-2">
              <button tabindex="0" class="btn btn-primary blue-gradient">
                <span class="btn-text">Reset</span>

                <span class="btn-loader">
                  <i class="icon icofont-spinner" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
// import { mapActions } from "vuex";
import ComponentLoader from "@/Views/Shared/ComponentLoader.vue";

export default {
    components: { ComponentLoader },
    data() {
        return {
            email: "",
            loading: false,
        };
    },
    validations: {
        email: {
            required,
            email,
            minLength: minLength(6),
        }
    },
    methods: {
        ...mapActions(["forgotPassword"]),
        async handleSubmit(e) {
            this.$v.$touch();
            if (this.$v.$invalid) return;

            this.loading = true;
            await this.forgotPassword(this.email);
            this.loading = false;
        }
    },
};
</script>
