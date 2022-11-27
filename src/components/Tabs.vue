<!-- eslint-disable vue/no-v-html, vue/no-use-v-if-with-v-for -->
<!-- ================================================
-- Idea and inspiration coming from:
-- https://codepen.io/ericgruby/pen/MrjgvQ
================================================ -->
<template>
  <div>
    <div v-cloak class="tabs mb-4">
      <ul class="nav nav-tabs">
        <li v-for="(tab, index) in tabs" :key="index" class="nav-item">
          <a
            class="nav-link"
            :class="{ active: show == index }"
            @click.prevent="show = index"
            @click="navigateToComponent(tab)">{{ tab.title }}</a>
        </li>
      </ul>

      <div v-cloak class="tab-content">
        <!-- <div v-if="isRouted"></div> -->
        <transition-group
          v-if="isRouted"
          name="fade-up"
          target="div"
          appear
          @click.native="navigateToContent($event)">
          <div
            key="routerPlaceholder"
            class="tab-pane fade active show"
            role="tabpanel">
            <router-view />
          </div>
        </transition-group>

        <transition-group
          v-else
          name="fade-up"
          target="div"
          appear
          @click.native="navigateToContent($event)">
          <div
            v-for="(tab, index) in tabs"
            v-if="show == index"
            :key="index + 1"
            v-html="tab.content" />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
    name: "TabsComponent",
    props: ["tabs", "isRouted", "routeParam", "callbackFunc"],
    data() {
        return {
            show: 0,
        };
    },
    mounted() {
        // Since  "isRouted" tabs are dealing with navigating using url's
        // navigating away from urls or refreshing page makes tab indicator (orange underline) returns back to first element
        // we need to fix that in order to have proper visual representation
        if (this.isRouted) {
            // First we need to find index of current route in list of our "tabs"
            const urlIndex = this.tabs.findIndex((item) => {
                // Splitting url ('/client-overview/1/delivery-addresses') to get last element as it is navigation property
                const splitUrlPath = this.$route.path.split("/");
                // Finally checking it against our current url
                return (item.navComponent == splitUrlPath[splitUrlPath.length - 1]);
            });

            this.show = urlIndex;
        }
    },
    methods: {
        navigateToComponent(item) {
            // First execute the callback function if there is any
            // I am mostly using this for the "back" functionality
            if (item.callbackFunc != undefined)
            {
                item.callbackFunc();
            }
            // Else, do route navigation
            else if (this.isRouted) {
                router.push({ path: item.navComponent });
            }
        },
        navigateToContent: function(e) {
            if (e.target.dataset.show) {
                e.preventDefault();
                this.show = e.target.dataset.show;
            }
        },
    },
};
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-up-enter,
.fade-up-leave-to {
  height: 0;
  transform: translateY(30px);
  opacity: 0;
}
</style>
