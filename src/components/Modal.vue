<template>
  <div
    :class="{ 'modal-container-empty': !contents.length }"
    class="modal-container"
    @blur="toggleOpen">
    <p class="modal-container-title">Add card</p>
    <div class="modal-container-forms">
      <form @submit.prevent="onSubmit">
        <input
          v-model="title"
          class="modal-container-forms-input"
          placeholder="Enter title">
      </form>
      <c-add-todo
        @add-content="addContent"
        :length="contents.length" />
    </div>
    <div
      v-if="contents.length"
      class="modal-container-todos">
      <c-todo-item
        v-for="(td, index) of contents"
        :key="'c-todo-item-' + index"
        :todoItem="td"
        :index="index"
        :checkbox="true"
        @remove-todo="removeTodo"/>
    </div>
    <button
      class="modal-container-btn"
      @click="onSubmit">
      Create
    </button>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data(){
      return {
        contents: [],
        title: ''
      }
    },

    computed: mapGetters(['getState']),

    methods: {
      ...mapActions(['addTodo', 'toggleOpen', 'toggleError']),

      // Adding TodoBox title
      addContent(content){
        this.contents.push(content)
      },

      // Create TodoBox with Todo tasks
      onSubmit(){
        if(!this.title){
          return this.toggleError()
        }
        const payload = {title: this.title, content: this.contents}
        this.addTodo(payload)
        this.title = ''
        this.contents = []

        this.toggleOpen()
      },

      updateTask(e){
        e.preventDefault();
        if(e.target.innerText.length === 0){
          this.toggleError()
        }
        this.title = e.target.innerText;
        e.target.blur();
      },

      // Delete exact Todo task
      removeTodo(id){
        this.contents = this.contents.filter(t=> t.id !== id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal-container {
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
    padding: 32px;
    display: grid;
    grid-template: 24px auto auto 20px / auto;
    grid-gap: 24px;
    place-items: center;
    position: fixed;
    border-radius: 10px;
    width: 400px;
    max-height: 600px;
    z-index: 100;
    background: rgba(255, 255, 255, .9);

    &-empty {
      grid-template: 24px auto 20px / auto;
    }

    &-title {
      font-size: 24px;
    }

    &-forms {
      width: 100%;

      &-input {
        width: 100%;
        border-bottom: 1px solid #000;
        padding: 10px;
        outline: none;
        background: none;
      }
    }

    &-todos {
      width: 100%;
      max-height: 300px;
      overflow-y: auto;
      display: grid;
      grid-gap: 8px;
    }

    &-btn {
      width: 100px;
      height: 20px;
      font-size: 20px;
      color: rgba(0,0,0,.9);
    }
  }
</style>
