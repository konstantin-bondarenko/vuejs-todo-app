<template>
  <div
    class='modal'
    @blur="toggleOpen">
    <form @submit.prevent='onSubmit'>
      <p>Add card</p>
      <span v-if='!title'>Enter title</span>
      <div v-if='getState("error") && !title'>
        <input
          class='error'
          placeholder="Fill this line!">
      </div>
      <div
        v-else
        v-bind:class='{ title: title }'
        class="empty"
        contenteditable="true"
        @keydown.enter="updateTask($event)"
        @blur="updateTask($event)">
        {{title}}
      </div>
    </form>
    <c-add-todo
      @add-content='addContent'
      v-bind:length='contents.length' />
    <div class='scroll'>
      <div
        v-bind:key='i'
        v-for='(td, i) of contents'>
        <c-todo-item
          v-bind:td='td'
          v-bind:index='i'
          v-bind:checkbox='true'
          @remove-todo='removeTodo'/>
      </div>
    </div>
    <span v-if='contents.length'>Click on the text for editing</span>
    <button @click="onSubmit">
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

<style scoped>
    .modal{
        left: 0;
        right: 0;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        position: absolute;
        border-radius: 10px;
        width: 400px;
        max-height: 600px;
        z-index: 100;
        background: rgba(255, 255, 255, .9);
    }
    .modal button, input, .empty, .title:focus{
        border: none;
        background: none;
        outline: none;
    }
    input, .empty, .title:focus{
        width: 230px;
        border-bottom: 2px solid #000;
        padding: 10px;
    }
    .modal button{
        margin: 20px 0;
        width: 100px;
        height: 20px;
        font-size: 20px;
        cursor: pointer;
        color: rgba(0,0,0,.9);
    }
    .modal span{
        color: rgba(0,0,0,.5);
    }
    .title{
        border: none;
        font-size: 24px;
        margin: 10px 0;
    }
    .scroll{
        width: 100%;
        overflow-y: scroll;
    }
    .error::placeholder{
        color: red;
    }

    @media screen and (max-width: 415px) {
        .modal{
            width: 300px;
        }
    }
</style>
