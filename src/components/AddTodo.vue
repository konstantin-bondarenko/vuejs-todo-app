<template>
  <form @submit.prevent="onSubmit">
    <input
      v-if='getState("error") &&
        !length &&
        (content.trim().length > 30 || !content.trim().length)'
      class='error' placeholder='Please enter letters (max 30)'>
    <div
      v-else
      class='flex'>
      <input
        type='text'
        v-model='content'
        placeholder='Write your task and press Enter'>
      <button
        v-bind:class='{ show: content.length }'
        type='submit' class='cross-add'>
        +
      </button>
    </div>
  </form>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    props: ['length'],

    data() {
      return {
        content: ''
      }
    },

    computed: mapGetters(['getState']),

    methods: {
      ...mapActions(['toggleError']),

      // Create Todo task
      onSubmit(){
        if(this.content.trim() && this.content.trim().length <= 30){
          const newTodo = {
            id: Date.now(),
            content: this.content,
            completed: false
          }
          this.$emit('add-content', newTodo)
          this.content = ''
        }else{
          this.toggleError()
        }
      }
    }
  }
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
    }
    input{
        width: 230px;
        border: none;
        border-bottom: 2px solid #000;
        background: none;
        padding: 10px;
        outline: none;
        font-size: 14px;
    }
    button{
        margin: 10px 0;
        width: 100px;
        height: 20px;
        outline: none;
        font-size: 20px;
        cursor: pointer;
        border: none;
        background: none;
        color: rgba(0,0,0,.9);
    }
    .flex{
        display: flex;
        height: 40px;
    }
    .cross-add{
        display: none;
        background: rgba(0,0,0,.3);
        width: 30px;
        height: 30px;
        border-radius: 20px;
    }
    .show{
        display: block;
    }
    .error::placeholder{
        color: red;
    }
</style>
