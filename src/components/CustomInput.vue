<template>
  <div class="form-group">
    <label class="form-label">Ten naamstelling bank</label>
    <input
      v-model="$v.bankGiroName.$model"
      class="form-control"
      type="text"
      placeholder="Ten naamstelling bank"
      :class="[$v.bankGiroName.$error ? 'is-invalid' : '', '']">
    <div
      v-if="!$v.bankGiroName.required && $v.bankGiroName.$dirty"
      class="text-danger">
      Field is required
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInputComponent",
  props: ["property", "validators", "routeParam"],
};
</script>

