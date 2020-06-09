<template>
  <div>
    <h2>ToDo application</h2>
    <button @click='changeOpen'>CREATE</button>
    <Popup 
      v-if='getState("popup")'
      v-bind:type="'delete'"
      v-bind:id='id'
    />
    <Modal 
      v-if='getState("open")'
    />
    <div id='boxes'>
      <TodoBox
        v-for='(todo, i) of getState("todos")'
        v-bind:key='i'
        v-bind:todo='todo'
        @recive-id='reciveId'
      />
    </div>
  </div>
</template>

<script>

import Modal from '@/components/Modal'
import TodoBox from '@/components/TodoBox'
import Popup from '@/components/Popup'
import {mapGetters, mapMutations} from 'vuex'

export default {
  data(){
    return{
      id: Number
    }
  },

  computed: mapGetters(['getState']),

  methods: {
    ...mapMutations(['changeOpen', 'changePopup']),

    // Recive id of selected TodoBox and pass to Store
    reciveId(id){
      this.id = id
      this.changePopup(id)
    }
  },

  components: {
    TodoBox, Modal, Popup
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