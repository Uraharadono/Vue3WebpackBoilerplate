<template>
  <th>
    <div
      class="row transparent-background inline-flex-wrap"
      :style="getHeaderStyle()"
      @click="sort()">
      <!-- Note to self: I moved this button to the bottom of the grid, because it was breaking my whole grid (side scrool) -->
      <!-- <div class="col-1">
        <font-awesome-icon
          v-if="settings.displayColumnSettings"
          icon="cog"
          @click.self="$parent.$parent.openColumnSettingsModal" />
      </div> -->

      <div class="col-10">
        {{ column.title }}
      </div>

      <div v-show="column.isSortable" class="col-1 float-end">
        <!--Note: I have to have this a bit more complex logic for displaying "Up-Down" sorting indicatior icons 
              because I cannot use string interpolation with font-awesome-icon -.-'' -->
        <!-- <span v-html="displayArrow()"></span> -->
        <font-awesome-icon v-if="displayArrow()" icon="sort-up" />
        <font-awesome-icon v-else icon="sort-down" />
      </div>
    </div>

    <!-- Pure bootstrap inputs for search filter-->
    <!-- <div class="row" v-if="column.isSearchable">
      <div class="col-8"></div>
        <input type="text" v-model="searchText" class="float-end" />
    </div> -->

    <div v-if="column.isSearchable" class="input-group mb-3">
      <input
        v-model="searchText"
        type="text"
        class="form-control"
        :placeholder="[[ column.title ]] + ' filter'">
      <!-- <span class="input-group-text">
        <font-awesome-icon icon="filter" />
      </span> -->
    </div>
  </th>
</template>

<script>
/* eslint-disable vue/no-mutating-props */
import { debounce, isNullOrWs } from "@/common/methods";

export default {
  name: "SephirothGridColumn",
  props: ["settings", "parameters", "column"],
  // data only needed for search input debounce
  data() {
    return {
      searchText: "",
    };
  },
  watch: {
    searchText: debounce(function(newVal) {
      this.column.searchText = newVal;
      // if(!isNullOrWs(this.column.searchText)) // can't do this, have to always trigger server call
      this.$parent.$parent.refresh();
    }, 700),
  },
  methods: {
    getHeaderStyle: function() {
      if (this.column.isSortable) {
        return { cursor: "pointer" };
      } else {
        return null;
      }
    },

    displayArrow: function() {
      // **************************************************
      if (
        this.column.isSortable === undefined ||
        this.column.isSortable === null ||
        this.column.isSortable !== true
      ) {
        this.column.isSortable = false;
        return null;
      }
      // **************************************************

      // **************************************************
      if (
        this.parameters === undefined ||
        this.parameters === null ||
        this.parameters.sort === undefined ||
        this.parameters.sort === null ||
        this.parameters.sort.fieldName === undefined ||
        this.parameters.sort.fieldName === null ||
        this.parameters.sort.direction === undefined ||
        this.parameters.sort.direction === null
      ) {
        this.parameters.sort.fieldName = null;
        this.parameters.sort.direction = null;
        return null;
      }
      // **************************************************

      // **************************************************
      if (
        this.column.sortFieldName === undefined ||
        this.column.sortFieldName === null
      ) {
        this.column.sortFieldName = this.column.fieldName;
      }
      // **************************************************

      // **************************************************
      if (this.parameters.sort.fieldName !== this.column.sortFieldName) {
        return null;
      }
      // **************************************************

      // **************************************************
      /* Note: I have to have this a bit more complex logic for displaying "Up-Down" sorting indicatior icons
               because I cannot use string interpolation with font-awesome-icon -.-'' */
      if (this.parameters.sort.direction === 0) {
        // return '<font-awesome-icon icon="sort-down" />';
        return true;
      } else {
        // return '<font-awesome-icon icon="sort-up" />';
        return false;
      }
      // **************************************************
    },

    sort: function() {
      // **************************************************
      if (
        this.column.isSortable === undefined ||
        this.column.isSortable === null ||
        this.column.isSortable !== true
      ) {
        this.column.isSortable = false;
        return;
      }
      // **************************************************

      // **************************************************
      if (
        this.parameters.sort.fieldName === undefined ||
        this.parameters.sort.fieldName === null
      ) {
        this.parameters.sort.fieldName = null;
        this.parameters.sort.direction = null;
      }
      // **************************************************

      // **************************************************
      if (this.parameters.sort.direction === undefined) {
        this.parameters.sort.direction = null;
      }
      // **************************************************

      // **************************************************
      if (
        this.column.sortFieldName === undefined ||
        this.column.sortFieldName === null
      ) {
        this.column.sortFieldName = this.column.fieldName;
      }
      // **************************************************

      // **************************************************
      let firstSortDirection;

      if (
        this.column.firstSortDirection === undefined ||
        this.column.firstSortDirection === null
      ) {
        firstSortDirection = 0;
      } else {
        if (
          this.column.firstSortDirection === 0 ||
          this.column.firstSortDirection === 1
        ) {
          firstSortDirection = this.column.firstSortDirection;
        } else {
          firstSortDirection = 0;
        }
      }
      // **************************************************

      // **************************************************
      if (this.parameters.sort.fieldName !== this.column.sortFieldName) {
        this.parameters.sort.direction = firstSortDirection;
        this.parameters.sort.fieldName = this.column.sortFieldName;
      } else {
        if (this.parameters.sort.direction === null) {
          this.parameters.sort.direction = firstSortDirection;
        } else {
          if (this.parameters.sort.direction === firstSortDirection) {
            if (firstSortDirection === 0) {
              this.parameters.sort.direction = 1;
            } else {
              this.parameters.sort.direction = 0;
            }
          } else {
            this.parameters.sort.fieldName = null;
            this.parameters.sort.direction = null;
          }
        }
      }
      // **************************************************

      //console.log('Sort Field Name: [' + this.parameters.sort.fieldName + ']')
      //console.log('Sort Direction: [' + this.parameters.sort.direction + ']')

      this.$parent.$parent.displayFirst();
    },
  },
};
</script>
