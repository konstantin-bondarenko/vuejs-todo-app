<template>
  <div
    class="backdrop"
    @click="toggle" />
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    computed: mapGetters(['getState']),

    methods: {
      ...mapActions(['toggleOpen', 'togglePopup']),

      // Hide Backdrop and Popup notification
      toggle(){
        if(this.getState('open')) this.toggleOpen()
        else this.togglePopup()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .backdrop{
    width: 100%;
    min-height: 100%;
    background-color: rgba(0,0,0, .5);
    position: fixed;
    z-index: 99;
  }
</style>
