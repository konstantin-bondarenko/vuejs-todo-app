<template>
  <form
    @submit.prevent="onSubmit"
    class="add-todo-form">
    <input
      v-model="content"
      placeholder="Write your task and press Enter"
      class="add-todo-form-input">
    <button
      type="submit"
      class="add-todo-form-btn"/>
  </form>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    props: {
      length: Number
    },

    data() {
      return {
        content: ''
      }
    },

    computed: {
      ...mapGetters(['getState']),

      showInput () {
        return this.getState('error') && !this.length && (this.content.trim().length > 30 || !this.content.trim().length)
      }
    },

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

<style lang="scss" scoped>
  .add-todo-form {
    display: grid;
    grid-template: auto / auto 30px;
    grid-gap: 4px;
    place-items: center;

    &-input {
      width: 100%;
      border-bottom: 1px solid #000;
      padding: 10px;
      background: none;
      outline: none;
    }

    &-btn {
      font-size: 20px;
      color: rgba(0,0,0,.9);
      background: rgba(0,0,0,.3);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: relative;
    }

    &-btn:after {
      content: '+';
      position: absolute;
      height: 25px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
    }
  }
</style>
