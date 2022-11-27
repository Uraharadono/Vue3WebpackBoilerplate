<template>
  <div class="layout auth">
    <div class="sign-up-page card">
      <div
        class="text-center custom-bg-color"
        style="overflow: visible; background: rgba(255, 255, 255, 0.2)">
        <h3 class="card-header star-inserted">
          <span>Please reset your password in the form below:</span>
        </h3>

        <div class="card-body" style="padding: 0px; overflow: visible">
          <ComponentLoader v-show="loading" />
          <form class="login-form mb-0" @submit.prevent="handleSubmit">
            <div class="form-group">
              <div
                class="form-control"
                :class="[$v.password.$error ? 'is-invalid' : '', '']">
                <input
                  v-model="password"
                  class="input-control"
                  type="password"
                  placeholder="Password">
              </div>
              <div v-if="$v.password.$dirty">
                <div v-if="!$v.password.required" class="text-danger">
                  Field is required
                </div>
                <div v-if="!$v.password.minLength" class="text-danger">
                  Passwords in our system are a bit longer than that
                </div>
              </div>
            </div>

            <div class="form-group">
              <div
                class="form-control"
                :class="[$v.repeatPassword.$error ? 'is-invalid' : '', '']">
                <input
                  v-model="repeatPassword"
                  class="input-control"
                  type="password"
                  placeholder="Repeat password">
              </div>
              <div v-if="$v.repeatPassword.$dirty">
                <div v-if="!$v.repeatPassword.required" class="text-danger">
                  Field is required
                </div>
                <div v-if="!$v.repeatPassword.minLength" class="text-danger">
                  Passwords in our system are a bit longer than that
                </div>
              </div>
              <div v-if="!$v.repeatPassword.sameAsPassword" class="text-danger">
                Passwords do not match
              </div>
            </div>

            <div class="d-grid gap-2">
              <button tabindex="0" class="btn btn-primary blue-gradient">
                <span class="btn-text">Submit</span>

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
import { required, minLength, sameAs } from "vuelidate/lib/validators";
// import { mapActions } from "vuex";
import { parseUrlParams, isNullOrWs} from '@/common/methods';
import router from '@/router'
import ComponentLoader from "@/Views/Shared/ComponentLoader.vue";

export default {
    components: { ComponentLoader },
    data() {
        return {
            userId: null,
            code: null,
            password: "",
            repeatPassword: "",
            loading: false,
        };
    },
    validations: {
        password: {
            required,
            minLength: minLength(8),
        },
        repeatPassword: {
            required,
            minLength: minLength(8),
            sameAsPassword: sameAs('password')
            // sameAsPassword: sameAs(function() {
            //     return this.password;
            // })
        },
    },
    mounted() {
        const urlParams = parseUrlParams();
        if(isNullOrWs(urlParams.uid) || isNullOrWs(urlParams.code))
        {
            router.push('Home');
        }

        this.userId = urlParams.uid;
        this.code = urlParams.code;
    },
    methods: {
        ...mapActions(["resetPassword"]),
        async handleSubmit(e) {
            this.$v.$touch();
            if (this.$v.$invalid) return;

            const data = {
                userId: this.userId,
                code: this.code,
                password: this.password,
                confirmPassword: this.repeatPassword
            };

            this.loading = true;
            await this.resetPassword(data);
            this.loading = false;
        }
    },
};
</script>
