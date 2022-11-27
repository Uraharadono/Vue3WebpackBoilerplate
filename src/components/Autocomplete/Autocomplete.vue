<template lang="html">
  <div class="v-autocomplete">
    <div class="v-autocomplete-input-group with-prefix-icon" :class="{'v-autocomplete-selected': value}">

      <div class="prefix-icon">
        <font-awesome-icon class="text-end" icon="search" />
      </div>

      <input v-model="searchText"
             type="search"
             class="form-control"
             v-bind="inputAttrs"
             :class="inputAttrs.class || inputClass"
             :placeholder="inputAttrs.placeholder || placeholder"
             :disabled="inputAttrs.disabled || disabled"
             @blur="blur"
             @focus="focus"
             @input="inputChange"
             @keyup.enter="keyEnter"
             @keydown.tab="keyEnter"
             @keydown.up="keyUp"
             @keydown.down="keyDown">
    </div>

    <!-- This was original HTML/Css structure of Autocomplete -->
    <!-- <div v-if="show" class="v-autocomplete-list">
      <div v-for="item, i in internalItems"
           class="v-autocomplete-list-item"
           :class="{'v-autocomplete-item-active': i === cursor}"
           @click="onClickItem(item)"
           @mouseover="cursor = i">
        <div :is="componentItem" :item="item" :search-text="searchText" />
      </div>
    </div> -->

    <!-- Above was not suitable, so I created my own -->
    <ul class="dropdown-menu" style="width:100%" :class="(show) ? 'show': ''">
      <li v-for="item, i in internalItems"
          :key="i"
          :class="{'v-autocomplete-item-active': i === cursor}"
          @click="onClickItem(item)"
          @mouseover="cursor = i">
        <div :is="componentItem" :item="item" :search-text="searchText" />
      </li>
    </ul>

  </div>
</template>

<script>
/* eslint-disable vue/require-prop-types, vue/require-default-prop */
import Item from './Item.vue'
import utils from './utils.js'

export default {
    name: 'Autocomplete',
    props: {
        componentItem: { default: () => Item },
        minLen: { type: Number, default: utils.minLen },
        wait: { type: Number, default: utils.wait },
        value: null,
        getLabel: {
            type: Function,
            default: item => item
        },
        items: Array,
        autoSelectOneItem: { type: Boolean, default: true },
        placeholder: String,
        inputClass: {type: String, default: 'v-autocomplete-input'},
        disabled: {type: Boolean, default: false},
        inputAttrs: {type: Object, default: () => {return {}}},
        keepOpen: {type: Boolean, default: false}
    },
    data () {
        return {
            searchText: '',
            showList: false,
            cursor: -1,
            internalItems: this.items || []
        }
    },
    computed: {
        hasItems () {
            return !!this.internalItems.length
        },
        show () {
            return (this.showList && this.hasItems) || this.keepOpen
        }
    },
    watch: {
        items (newValue) {
            this.setItems(newValue)
            let item = utils.findItem(this.items, this.searchText, this.autoSelectOneItem)
            if (item) {
                this.onSelectItem(item)
                this.showList = false
            }
        },
        value (newValue) {
            if (!this.isSelectedValue(newValue) ) {
                this.onSelectItem(newValue)
                this.searchText = this.getLabel(newValue)
            }
        }
    },
    created () {
        utils.minLen = this.minLen
        utils.wait = this.wait
        this.onSelectItem(this.value)
    },
    methods: {
        inputChange () {
            this.showList = true
            this.cursor = -1
            this.onSelectItem(null, 'inputChange')
            utils.callUpdateItems(this.searchText, this.updateItems)
            this.$emit('change', this.searchText)
        },

        updateItems () {
            this.$emit('update-items', this.searchText)
        },

        focus () {
            this.$emit('focus', this.searchText)
            this.showList = true
        },

        blur () {
            this.$emit('blur', this.searchText)
            setTimeout( () => this.showList = false, 200)
        },

        onClickItem(item) {
            this.onSelectItem(item)
            this.$emit('item-clicked', item)
            // this.searchText = ''; // Why da fuck have I done this before ? This was messing everything up!
        },

        onSelectItem (item) {
            if (item) {
                this.internalItems = [item]
                this.searchText = this.getLabel(item)
                this.$emit('item-selected', item)
            } else {
                this.setItems(this.items)
            }
            this.$emit('input', item)
        },

        setItems (items) {
            this.internalItems = items || []
        },

        isSelectedValue (value) {
            return 1 == this.internalItems.length && value == this.internalItems[0]
        },

        keyUp (e) {
            if (this.cursor > -1) {
                this.cursor--
                this.itemView(this.$el.getElementsByClassName('v-autocomplete-list-item')[this.cursor])
            }
        },

        keyDown (e) {
            if (this.cursor < this.internalItems.length) {
                this.cursor++
                this.itemView(this.$el.getElementsByClassName('v-autocomplete-list-item')[this.cursor])
            }
        },

        itemView (item) {
            if (item && item.scrollIntoView) {
                item.scrollIntoView(false)
            }
        },

        keyEnter (e) {
            if (this.showList && this.internalItems[this.cursor]) {
                this.onSelectItem(this.internalItems[this.cursor])
                this.showList = false
            }
        },
    }
}
</script>

<style scoped>
  .v-autocomplete {
    position: relative;
  }
  .v-autocomplete .v-autocomplete-list {
    position: absolute;
  }
  .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item {
    cursor: pointer;
  }

  /* .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item.v-autocomplete-item-active {
    background-color: #f3f6fa;
  } */

/* https://stackoverflow.com/questions/20804016/editing-input-type-search-pseudo-element-button-x */
  /*input[type="search"] {
  border: 1px solid gray;
  padding: .2em .4em;
  border-radius: .2em;
}*/

/*input[type="search"].dark {
  background: #222;
  color: #fff;
}

input[type="search"].light {
  background: #fff;
  color: #222;
}*/

/*input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 1em;
  width: 1em;
  border-radius: 50em;
  background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg) no-repeat 50% 50%;
  background-size: contain;
  opacity: 0;
  pointer-events: none;
  color: white;
}

input[type="search"]:focus::-webkit-search-cancel-button {
  opacity: .3;
  pointer-events: all;
}

input[type="search"].dark::-webkit-search-cancel-button {
  filter: invert(1);
}*/
</style>
