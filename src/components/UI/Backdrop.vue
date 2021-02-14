<template>
  <div
    class='backdrop'
    @click='toggle' />
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    computed: mapGetters(['getState']),

    methods: {
      ...mapMutations(['changeOpen', 'changePopup']),

      // Hide Backdrop and Popup notification
      toggle(){
        if(this.getState('open')) this.changeOpen()
        else this.changePopup()
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
