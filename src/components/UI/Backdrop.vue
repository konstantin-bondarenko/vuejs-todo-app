<template>
  <div
    id='backdrop'
    @click='toggle'></div>
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

<style scoped>
    #backdrop{
        padding: 0;
        margin: 0;
        width: 100%;
        min-height: 150%;
        background-color: rgba(0,0,0, .5);
        position: fixed;
        z-index: 99;
    }

</style>
