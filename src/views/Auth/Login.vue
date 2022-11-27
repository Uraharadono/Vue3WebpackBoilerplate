<template>
  <div class="layout auth">
    <div class="log-in-page card">
      <div
        class="text-center custom-bg-color"
        style="overflow: visible; background: rgba(255, 255, 255, 0.2)">
        <h3 class="card-header star-inserted">
          <span>Sign in with your app id to continue</span>
        </h3>

        <div class="card-body login-gray" style="padding: 0px; overflow: visible">
          <ComponentLoader v-show="loading" />
          <form class="login-form mb-0" @submit.prevent="handleSubmit">
            <div class="form-group">
              <!-- <div class="form-control" :class="{ 'is-invalid': !$v.username.$error }"> -->
              <!-- <div class="form-control" :class="status($v.username)"> -->

              <div
                class="form-control"
                :class="[$v.username.$error ? 'is-invalid' : '', '']">
                <input
                  v-model="$v.username.$model"
                  class="input-control"
                  type="text"
                  placeholder="Login">
              </div>
              <div
                v-if="!$v.username.required && $v.username.$dirty"
                class="text-danger">
                Field is required
              </div>
              <div
                v-if="!$v.username.email && $v.username.$dirty"
                class="text-danger">
                Field has to be email
              </div>
            </div>

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
              <!-- <input type="checkbox" id="checkbox" v-model="rememberMe"> -->
              <div class="tc-checkbox" style="width: 100%" :class="[rememberMe ? 'checked' : '', '']" @click="toggleRememberMe">
                <div class="tc-checkbox-wrap">
                  <div class="tc-checkbox-handle">
                    <input
                      v-model="rememberMe"
                      type="checkbox"
                      class="checkbox-input">
                    <span class="check-detector">
                      <font-awesome-icon icon="check" />
                    </span>
                  </div>
                  <div class="tc-checkbox-label">
                    Keep me signed in
                  </div>
                </div>
              </div>
            </div>
            <div class="d-grid gap-2">
              <button tabindex="0" class="btn btn-primary blue-gradient">
                <span class="btn-text">Login</span>

                <span class="btn-loader">
                  <i class="icon icofont-spinner" />
                </span>
              </button>
            </div>
          </form>
          <div class="forgot-box">
            <!-- <a href="#/extra/sign-up">Sign Up</a> -->
            <span class="divider" />
            <router-link to="/forgot-password">
              Forgot password?
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ajax from "@/common/ajax";
import { required, minLength, email } from "vuelidate/lib/validators";
// import { mapGetters, mapActions } from "vuex";
import ComponentLoader from "@/Views/Shared/ComponentLoader.vue";

export default {
    components: { ComponentLoader },
    data() {
        return {
            username: "",
            password: "",
            rememberMe: false,
            loading: false,
        };
    },
    validations: {
        username: {
            required,
            email,
            minLength: minLength(6),
        },
        password: {
            required,
            minLength: minLength(8),
        },
    },

    computed: {
        loggingIn() {
            return this.$store.state.authentication.status.loggingIn;
        },
    },
    created() {
    // reset login status
    // this.$store.dispatch('authentication/logout'); // this won't work like shown in example
        this.logout();
    },
    mounted() {},
    methods: {
        ...mapActions(["login", "logout"]),
        async handleSubmit(e) {
            this.$v.$touch();
            if (this.$v.$invalid) return;

            this.loading = true;
            // Mapping can be done like this as well: "const { username, password } = this;"
            const data = {
                username: this.username,
                email: this.username,
                password: this.password,
                rememberMe: this.rememberMe
            };
            await this.login(data);
            this.loading = false;
        },
        toggleRememberMe () {
            this.rememberMe = !this.rememberMe;
        }
    },
};
</script>
