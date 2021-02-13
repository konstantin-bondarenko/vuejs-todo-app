<template>
  <div>
    <h2>ToDo application</h2>
    <button @click='toggleOpen'>
      CREATE
    </button>
    <c-popup
      v-if='getState("popup")'
      v-bind:type="'delete'"
      v-bind:id='id'/>
    <c-modal
      v-if='getState("open")'/>
    <div id='boxes'>
      <c-todo-box
        v-for='(todo, i) of getState("todos")'
        v-bind:key='i'
        v-bind:todo='todo'
        @recive-id='reciveId'/>
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


<style scoped>
  button{
    width: 150px;
    height: 50px;
    color: rgba(255, 255, 255, .5);
    font-size: 24px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  #boxes{
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    justify-content: center;
  }

</style>
