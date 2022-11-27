<!-- If this fails take a look at: https://dev.to/vaibhavkhulbe/create-a-custom-toggle-component-in-vue-js-1ipi -->

<template>

  <!-- This syntax below works, but it's with buttons, and it looks kind of gross, not gonna lie. -->
  <!-- <div>
    <button v-if="value" class="btn btn-outline-light btn-square" @click="toggle()">
      <span class="btn-icon">
        <font-awesome-icon icon="sort-down" />
      </span>
    </button>
    <button v-else class="btn btn-outline-light btn-square" @click="toggle()">
      <span class="btn-icon">
        <font-awesome-icon icon="sort-up" />
      </span>
    </button>
  </div> -->
  
  <div>
    <font-awesome-icon v-if="value" icon="sort-down" @click="toggle()" />
    <font-awesome-icon v-else icon="caret-right" @click="toggle()" />
  </div>
</template>

<script>
export default {
    props: ["value"],
    methods: {
        // To be honest, I have no fucking idea how this shit actually toggles my property, but it is the only way it works. 
        // If I do "this.value = !this.value" I will get error saying I should not directly mutate prop...
        toggle() {
            this.$emit("input", !this.value);
        },
    }
};
</script>