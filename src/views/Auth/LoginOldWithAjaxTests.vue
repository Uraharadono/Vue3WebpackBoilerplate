<template>
  <div class="star-inserted">
    <div
      class="mb-0 tc-card text-center custom-bg-color"
      style="overflow: visible; background: rgba(255, 255, 255, 0.2)"
    >
      <h3 class="card-title star-inserted">
        <span class="mark">Sign in with your app id to continue</span>
      </h3>

      <div class="card-content" style="padding: 0px; overflow: visible">
        <form class="login-form mb-0 untouched pristine valid">
          <div class="div">
            <div class="div">
              <div class="div-wrap">
                <div class="input-infix">
                  <input
                    class="input-control pristine valid touched"
                    type="text"
                    placeholder="Login"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="div">
            <div class="div">
              <div class="div-wrap">
                <div class="input-infix">
                  <input
                    class="input-control untouched pristine valid"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="div">
            <div class="div" style="width: 100%">
              <div class="div-wrap">
                <div class="div-handle">
                  <input
                    type="checkbox"
                    class="checkbox-input"
                    value="false"
                    checked="false"
                  />
                  <span class="check-detector icofont-check"></span>
                </div>
                <div class="div-label">Keep me signed in</div>
              </div>
            </div>
          </div>
          <button
            tabindex="0"
            class="tc-btn btn-block btn-default custom-gradient"
            style="
              background-image: linear-gradient(
                to right,
                rgb(7, 34, 62) 0%,
                rgb(81, 100, 120) 100%
              );
            "
          >
            <span class="btn-text">Login</span>

            <span class="btn-loader"><i class="icon icofont-spinner"></i></span>
          </button>
        </form>
        <div class="forgot-box">
          <a href="#/extra/sign-up">Sign Up</a> <span class="divider"></span
          ><a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  </div>

  <!-- <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form> -->
</template>

<script>
import ajax from "@/common/ajax";

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
  computed: {
    loggingIn() {
      // return this.$store.state.authentication.status.loggingIn;
    },
  },
  created() {
    // reset login status
    // this.$store.dispatch('authentication/logout');
  },
  mounted() {
    // Testing GET
    // ajax.get(`/posts`)
    //     .then(response => console.log(response))
    //     .catch(e => console.log(e));
    // Testing POST
    // const data = {
    //   title: "foo",
    //   body: "bar",
    //   userId: 1,
    // };
    // ajax
    //   .post("/posts", data)
    //   .then((response) => console.log(response))
    //   .catch((e) => console.log(e));
    // Testing PUT
    // const data = {
    //   id: 1,
    //   title: "foo",
    //   body: "bar",
    //   userId: 1,
    // };
    // ajax
    //   .put("/posts/1", data)
    //   .then((response) => console.log(response))
    //   .catch((e) => console.log(e));
    // Testing DELETE
    // ajax
    //   .del(`/posts/1`)
    //   .then((response) => console.log(response))
    //   .catch((e) => console.log(e));
  },
  methods: {
    handleSubmit(e) {
      // this.submitted = true;
      // const { username, password } = this;
      // const { dispatch } = this.$store;
      // if (username && password) {
      //     dispatch('authentication/login', { username, password });
      // }
    },
  },
};
</script>