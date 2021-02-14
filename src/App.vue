<template>
  <div id="app">
    <Default>
      <router-view />
    </Default>
  </div>
</template>

<script>
  import Default from './layouts/Default.vue'

  export default {
    name: 'App',
    components: { Default }
  }
</script>

<style lang="scss">
  * {
    font-family: 'montserrat', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>
