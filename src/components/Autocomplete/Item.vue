<template lang="html">
  <div>{{ item }}</div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-types
    item: { required: true }
  }
}
</script>
