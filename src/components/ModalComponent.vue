<template>
  <!-- <div class="modal fade show" tabindex="-1" role="dialog" aria-modal="true"> -->
  <div id="modal-9" class="modal fade show" tabindex="-1" role="dialog" style="display: block;" aria-modal="true">
    <!-- <div class="modal-dialog modal-dialog-centered" :class="getSizeClass"> -->
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" :class="modalSizeComputed">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title m-0">
            <slot name="header" />
          </h5>
        </div>

        <div class="modal-body">
          <slot name="body" />
        </div>

        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: ['modalSize'],
  data: function() {
    return {
      showModal: true,      
    };
  },
  computed: {
    modalSizeComputed() {
      if(!this.modalSize) // falsy
        return "";

      if(this.modalSize == "small")
        return "large";

      if(this.modalSize == "default")
        return "";

      if(this.modalSize == "large")
        return "modal-lg";

      if(this.modalSize == "small")
        return "modal-xl";

      return "";
    },
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    submitAndClose() {},
    getSizeClass()
    {
      const size = this.modalSize;

      // small
      // default
      // large
      // extra-large
      if(size == "small")
        return "large";

      if(size == "default")
        return "";

      if(size == "large")
        return "modal-lg";

      if(size == "small")
        return "modal-xl";

    }
  }
};
</script>
