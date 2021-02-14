<template>
  <div
    class="todo-item"
    :class="{ 'todo-item-done': todoItem.completed, 'todo-item-edit': checkbox }">
    <button
      v-if="checkbox"
      class="todo-item-checkbox"
      :class="{ 'todo-item-checkbox-checked': todoItem.completed }"
      @click="todoItem.completed = !todoItem.completed" />
    <div
      class="todo-item-title"
      :contenteditable="checkbox"
      @keydown.enter="updateTask($event, todoItem)"
      @blur="updateTask($event, todoItem)">
      {{todoItem.content}}
    </div>
    <button
      v-if="checkbox"
      class="todo-item-remove"
      @click="$emit('remove-todo',todoItem.id)">
      &times;
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      todoItem: Object,
      checkbox: Boolean
    },

    data(){
      return {
        beforeChange: ''
      }
    },

    created(){
      this.beforeChange = this.todoItem.content || ''
    },

    methods: {

      // Update Todo task value
      updateTask(e, todoItem){
        e.preventDefault();
        if(e.target.innerText.length === 0){
          e.target.innerText = this.beforeChange
        }
        todoItem.content = e.target.innerText;

        e.target.blur();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .todo-item {
    padding: 16px;
    background: rgba(255, 255, 255, .5);
    border-radius: 10px;
    width: 100%;

    &-edit {
      display: grid;
      grid-template: auto / 25px auto 25px;
      grid-gap: 12px;
    }

    &-checkbox {
      background: none;
      border: 2px solid rgba(0,0,0,.5);
      border-radius: 3px;
      width: 20px;
      height: 20px;
      margin-right: 10px;
      cursor: pointer;
      outline: none;

      &-checked{
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIC00NiA0MTcuODEzMzMgNDE3IiB3aWR0aD0iNTEycHgiPjxwYXRoIGQ9Im0xNTkuOTg4MjgxIDMxOC41ODIwMzFjLTMuOTg4MjgxIDQuMDExNzE5LTkuNDI5Njg3IDYuMjUtMTUuMDgyMDMxIDYuMjVzLTExLjA5Mzc1LTIuMjM4MjgxLTE1LjA4MjAzMS02LjI1bC0xMjAuNDQ5MjE5LTEyMC40Njg3NWMtMTIuNS0xMi41LTEyLjUtMzIuNzY5NTMxIDAtNDUuMjQ2MDkzbDE1LjA4MjAzMS0xNS4wODU5MzhjMTIuNTAzOTA3LTEyLjUgMzIuNzUtMTIuNSA0NS4yNSAwbDc1LjE5OTIxOSA3NS4yMDMxMjUgMjAzLjE5OTIxOS0yMDMuMjAzMTI1YzEyLjUwMzkwNi0xMi41IDMyLjc2OTUzMS0xMi41IDQ1LjI1IDBsMTUuMDgyMDMxIDE1LjA4NTkzOGMxMi41IDEyLjUgMTIuNSAzMi43NjU2MjQgMCA0NS4yNDYwOTN6bTAgMCIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPgo=);
        width: 20px;
        height: 20px;
        background-size: 100%;
        background-repeat: no-repeat;
      }
    }

    &-title {
      text-align: left;
      word-break: break-all;
    }

    &-title:focus {
      width: auto;
      border-bottom: 1px solid #000;
      padding: 4px 0;
      outline: none;
    }

    &-remove-btn {
      border: none;
      background: none;
      outline: none;
      cursor: pointer;
      font-size: 30px;
      color: rgba(0,0,0,.5);
    }

    &-done{
      background: rgba(0,0,0,.5);
      color: #fff;
    }
  }
</style>
