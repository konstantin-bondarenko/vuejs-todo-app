<template>
  <div id="app">
    <c-backdrop v-if='getState("open") || getState("popup")' />
    <div id="link">
      <button
        v-if='this.$route.path !== "/"'
        class='routeButton' @click='routeTo'>
        Return to Todo List
      </button>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    computed: mapGetters(['getState']),

    methods: {
      ...mapMutations(['initialState', 'changeBackup']),
      routeTo(){
        this.$router.push('/')

        // Set previous/saved state of Todos
        this.initialState()
        localStorage.setItem('localtodo', JSON.stringify([]))

        // Turn off backup popup in Editing
        this.changeBackup(false)
      }
    }
  }
</script>

<style>
*{
  font-family: 'montserrat', sans-serif;
  box-sizing: border-box;
}
body{
  background-image: linear-gradient(120deg, #487eb0, #fbc531);
  min-height: 700px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.routeButton{
  margin: 10px 0;
  width: 300px;
  height: 20px;
  outline: none;
  font-size: 24px;
  cursor: pointer;
  background: none;
  border: none;
  color: rgba(255, 255, 255, .5);
}
</style>
