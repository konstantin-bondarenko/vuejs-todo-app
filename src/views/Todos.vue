<template>
  <div class="todo-page">
    <h2 class="todo-page-title">
      ToDo application
    </h2>
    <button
      class="todo-page-btn"
      @click="toggleOpen">
      CREATE
    </button>
    <c-popup
      v-if="getState('popup')"
      type="delete"
      :id="id"/>
    <c-modal
      v-if="getState('open')"/>
    <div class="todo-page-box-container">
      <c-todo-box
        v-for="(todo, index) of getState('todos')"
        :key="'c-todo-box-' + index"
        :todo="todo"
        @recive-id="reciveId" />
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data(){
      return{
        id: Number
      }
    },

    computed: mapGetters(['getState']),

    methods: {
      ...mapActions(['toggleOpen', 'togglePopup']),

      // Recive id of selected TodoBox and pass to Store
      reciveId(id){
        this.id = id
        this.togglePopup(id)
      }
    }
  }
</script>


<style lang="scss" scoped>
  .todo-page {
    padding: 16px 0;

    &-btn {
      width: 150px;
      height: 50px;
      color: rgba(255, 255, 255, .5);
      font-size: 24px;
    }

    &-box-container {
      display: grid;
      grid-template: auto / repeat(auto-fit, 250px);
      grid-gap: 24px;
      place-content: center;
      padding: 16px;
    }
  }
</style>
