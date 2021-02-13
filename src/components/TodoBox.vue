<template>
  <div class='box'>
    <h3>{{ todo.title }}</h3>
    <div
      v-for='(item, i) in todo.content'
      v-bind:key='i'>
      <c-todo-item
        v-bind:td='item'
        v-bind:checkbox='false'/>
    </div>
    <div class='buttons'>
      <button
        class='edit'
        @click='toEdit(todo)'>
        EDIT
      </button>
      <button
        class='delete'
        @click="$emit('recive-id', todo.id)">
        DELETE
      </button>

    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    props: ['todo'],

    methods: {
      ...mapMutations(['changeEditing']),

      // Redirect to Editing page and pass exact TodoBox
      toEdit(todo){
        this.$router.push({ name: 'edit', params: todo})
        this.changeEditing(todo)
        localStorage.setItem('localtodo', JSON.stringify(todo))
      }
    }
  }
</script>

<style scoped>
    .box{
        width: 250px;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 10px;
    }
    .buttons{
        display:flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px;
    }
    .buttons button{
        margin: 10px 0;
        width: 100px;
        height: 20px;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        background: none;
        border: none;
    }
    .edit{
        color: rgba(255, 255, 255, .5);
    }
    .delete{
        color: rgba(0,0,0,.5);
    }
</style>
