<template>
  <div>
    <ModalComponent v-if="modalVisible" :modal-size="'large'">
      <h3 slot="header" class="modal-title">
        Weet je zeker dat je dit wilt verwijderen ?
      </h3>
      <div slot="body">
        <!--Weet je zeker dat je dit artikel uit de order wilt verwijderen?-->
      </div>
      <div slot="footer">
        <button
          class="btn btn-danger"
          type="button"
          @click.prevent="executePassedMethod()">
          Verwijderen
        </button>
        <button type="button" class="btn btn-light" @click="hide()">
          Sluiten
        </button>
      </div>
    </ModalComponent>

  </div>
</template>

<script>
import ModalComponent from "@/components/ModalComponent.vue";

export default {
    name: "AreYouSureDeleteModal",
    components: { ModalComponent },
    data() {
        return {
            modalVisible: false,
            callbackFunc: null,
            callbackItem: null
        };
    },
    methods: {
        show(callback, callbackItem) {
            this.callbackFunc = callback;
            this.callbackItem = callbackItem;
            this.modalVisible = true;
        },
        hide(){
            this.callbackFunc = null;
            this.callbackItem = null;
            this.modalVisible = false;
        },
        executePassedMethod()
        {
            this.callbackFunc(this.callbackItem);
        }
    }
};
</script>

<style></style>
