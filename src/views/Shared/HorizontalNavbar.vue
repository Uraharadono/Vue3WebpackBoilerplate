
<template>
  <div id="horizonal-navbar" class="nav-bar dark">
    <div class="nav-bar-wrap">
      <!-- <i id="vertical-navbar-toggle" class="link-caret">
        <font-awesome-icon id="toggle-vertical-menu-icon" :icon="['fa', 'angle-double-left']" size="lg" pull="left" flip="horizontal" />
      </i>
      &nbsp; -->

      <div class="nav-content">
        <div class="row">
          <div class="col col-auto toggle-button-col">
            <div id="toggle-menu" class="toggle-sidebar">
              <div class="bar" />
              <div class="bar" />
              <div class="bar" />
            </div>
          </div>
          <div class="col title-col">
            <i id="vertical-navbar-toggle" class="link-caret" style="cursor: pointer;">
              <!-- <font-awesome-icon id="toggle-vertical-menu-icon" :icon="['fa', 'angle-double-left']" size="lg" pull="left" flip="horizontal" /> -->
              <font-awesome-icon id="toggle-vertical-menu-icon" :icon="['fa', 'angle-double-left']" size="lg" pull="left" />
            </i>
            &nbsp;
            <form id="page-search" class="search">
              <div class="input-container">
                <span class="search-icon">
                  <font-awesome-icon icon="search" />
                </span>
                <input
                  placeholder="Type page title to search"
                  class="search-input">
              </div>
            </form>
            <h1 id="page-title" class="page-title">
              Vue 3 webpac
            </h1>
          </div>
          <div class="col col-auto actions-col">
            <div class="nav-actions">

              <div class="item">

                <div class="navbar-user-info">
                  <div class="navbar-user-info-header">

                    <div class="user-avatar">
                      <div id="current-user-initials" class="text-avatar">
                        <!-- D -->
                      </div>
                    </div>

                    <div class="user-info">
                      <h3 id="current-user-full-name" class="user-name">
                        <!-- Dennis Dennis Dennis  -->
                      </h3>
                      <div id="current-user-sub" class="under-user-name">
                        online
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div class="item toggle-search-btn">
                <a
                  id="toggle-search"
                  class="nav-link d-none d-md-block"
                  href="#">
                  <font-awesome-icon icon="search" />
                </a>
              </div>

              <div class="item">
                <a
                  class="nav-link"
                  data-bs-toggle="dropdown"
                  href="#"
                  aria-expanded="false">
                  <font-awesome-icon icon="bell" />
                  <span class="marker blue" />
                </a>

                <div
                  class="dropdown-menu dropdown-menu-right"
                  x-placement="bottom-end"
                  style="
                    position: absolute;
                    transform: translate3d(-190px, 44px, 0px);
                    top: 0px;
                    left: 0px;
                    will-change: transform;
                  ">
                  <div class="menu-header">
                    <h4 class="menu-title">
                      Notifications
                    </h4>
                  </div>
                  <ul class="list menu-list">
                    <li>
                      <div class="icon">
                        <font-awesome-icon icon="thumbs-up" />
                      </div>
                      <a href="#">
                        <div class="content">
                          <span class="desc">Sara Crouch liked your photo
                          </span>
                          <span class="date">10 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="icon">
                        <font-awesome-icon icon="user-plus" />
                      </div>
                      <a href="#">
                        <div class="content">
                          <span class="desc">New user registered</span>
                          <span class="date">23 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="icon">
                        <font-awesome-icon icon="share-alt" />
                      </div>
                      <a href="#">
                        <div class="content">
                          <span class="desc">Amanda Lie shared your post</span>
                          <span class="date">25 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="icon">
                        <font-awesome-icon icon="envelope" />
                      </div>
                      <a href="#">
                        <div class="content">
                          <span class="desc">You have new message</span>
                          <span class="date">58 minutes ago</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div class="menu-footer">
                    <a href="#">View all notifications</a>
                  </div>
                </div>
              </div>

              <div class="item">
                <a
                  class="nav-link"
                  data-bs-toggle="dropdown"
                  href="#"
                  aria-expanded="false">
                  <font-awesome-icon icon="calendar-alt" />
                  <span class="marker" />
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  x-placement="bottom-end"
                  style="
                    position: absolute;
                    transform: translate3d(-140px, 44px, 0px);
                    top: 0px;
                    left: 0px;
                    will-change: transform;
                  ">
                  <div class="menu-header">
                    <h4 class="menu-title">
                      Events
                    </h4>
                  </div>
                  <ul class="list menu-list">
                    <li>
                      <div class="icon">
                        <font-awesome-icon icon="robot" />
                      </div>
                      <a href="#">
                        <div class="content">
                          <span class="desc">Android event</span>
                          <span class="date">1 Dec 2020</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="icon">
                        <font-awesome-icon :icon="['fab', 'java']" />
                      </div>
                      <a href="#">
                        <div class="content d-flex flex-column">
                          <span class="desc">Java dev conference</span>
                          <span class="date">15 Dec 2020</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="icon">
                        <font-awesome-icon :icon="['fab', 'whatsapp']" />
                      </div>
                      <a href="#">
                        <div class="content">
                          <span class="desc">Discussion about the app</span>
                          <span class="date">22 Dec 2020</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div class="menu-footer">
                    <a href="#">View all events</a>
                  </div>
                </div>
              </div>




              <div class="item">
                <a class="nav-link" data-bs-toggle="dropdown" href="#">
                  <font-awesome-icon icon="user" />
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right mini-menu profile">
                  <div class="avatar-block">
                    <img
                      alt="user-avatar"
                      src="../../assets/avatarPlaceholder.png">
                    <span class="name">Someone Someone</span>
                  </div>
                  <ul class="menu-list">
                    <li>
                      <a href="#" class="profile-link">
                        <font-awesome-icon icon="id-card" />
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" class="profile-link">
                        <font-awesome-icon icon="inbox" />
                        Inbox
                      </a>
                    </li>
                    <!-- <li>
                      <a href="#" class="profile-link">
                        <font-awesome-icon icon="calendar-alt" />
                        Calendar
                      </a>
                    </li> -->
                    <li>
                      <a href="#" class="profile-link">
                        <font-awesome-icon icon="sliders-h" />
                        Settings
                      </a>
                    </li>
                    <li>
                      <router-link to="/2fa-setup" class="profile-link">
                        <font-awesome-icon icon="user-lock" />
                        <span class="link-text">Enable 2 FA </span>
                      </router-link>
                    </li>
                    <li @click="doLogOut()">
                      <a href="#" class="profile-link">
                        <font-awesome-icon icon="sign-out-alt" />
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="items-overlay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";
export default {
    methods: {
        ...mapActions(["logout"]),
        doLogOut() {
            this.logout();
            this.$router.go(); // reload page to setup menu and redirect to login
        }
    }
}
</script>

<style>

</style>
