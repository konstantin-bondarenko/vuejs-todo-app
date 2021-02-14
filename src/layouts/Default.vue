<template>
  <div class="default-layout">
    <c-backdrop v-if='getState("open") || getState("popup")' />
    <button
      v-if='this.$route.path !== "/"'
      class='default-layout-link'
      @click='routeTo'>
      Return to Todo List
    </button>
    <slot />
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: mapGetters(['getState']),

    methods: {
      ...mapActions(['getPreviousTodos', 'setBackup']),
      routeTo(){
        this.$router.push('/')

        // Set previous/saved state of Todos
        this.getPreviousTodos()
        localStorage.setItem('localtodo', JSON.stringify([]))

        // Turn off backup popup in Editing
        this.setBackup(false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .default-layout {
    background: linear-gradient(120deg, #487eb0, #fbc531);
    height: 100vh;
    text-align: center;
    /* color: #2c3e50; */

    &-link {
      width: 300px;
      height: 20px;
      font-size: 24px;
      line-height: 20px;
      color: rgba(255, 255, 255, .5);
    }
  }

</style>
