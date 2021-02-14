<template>
  <div class="popup">
    <p>Are you sure you want to do this?</p>
    <div class="popup-btns">
      <button
        class="popup-btns-cancel"
        @click="togglePopup(id)">
        Cancel
      </button>
      <button
        class="popup-btns-confirm"
        @click="popupBtns(type)">
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    props: {
      type: String,
      id: Number
    },

    methods: {
      ...mapActions(['togglePopup', 'deleteTodoBox', 'getPreviousTodos', 'setBackup', 'setTemp']),

      // Check for type of button click
      popupBtns(type){
        this.togglePopup(this.id)

        // Delete exact TodoBox
        if(type === 'delete'){
          this.deleteTodoBox()
          this.setBackup(false)
          this.setTemp([])
          if (this.$route.path !== '/') this.$router.push('/')
        }else if (type === 'cancel'){

          // Canceling changes in editing page
          this.$emit('get-initial')
          this.setBackup(true)
        }

        // Set previous/saved state of Todos
        // this.getPreviousTodos()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popup{
    position: fixed;
    text-align: center;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
    width: 250px;
    height: 120px;
    font-weight: bold;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    z-index: 100;
    background: rgba(255, 255, 255, .9);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    &-btns {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;

      &-cancel, &-confirm {
        width: auto;
        height: 20px;
        font-size: 18px;
      }
      &-confirm {
          color: rgba(42, 211, 33, 0.7);
      }
      &-cancel {
          color: rgba(211, 60, 33, 0.7);
      }
    }
  }
</style>
