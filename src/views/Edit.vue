<template>
  <div class="edit-page">
    <div class="edit-page-header">
      <h1 class="edit-page-header-title">
        Editing your Todo Task
      </h1>
      <div
        class="edit-page-header-todo-title"
        contenteditable="true"
        @keydown.enter="updateTask($event)"
        @blur="updateTask($event)">
        {{contents.title}}
      </div>
    </div>
    <c-popup
      v-if="getState('popup')"
      :type="type"
      :id="contents.id"
      @get-initial="getInitial"/>
    <div class="edit-page-content">
      <c-add-todo @add-content="addContent" />
      <c-todo-item
        v-for="(item, index) in contents.content"
        :key="'c-todo-item' + index"
        :todoItem="item"
        :checkbox="true"
        @remove-todo="removeTodo"/>
    </div>
    <div class="edit-page-nav">
      <button
        class="edit-page-nav-del"
        @click="changeType('delete')">
        delete
      </button>
      <button
        class="edit-page-nav-cancel"
        @click="changeType('cancel')">
        cancel changes
      </button>
      <button
        v-if="getState('backup')"
        class="edit-page-nav-backup"
        @click="backup">
        click to return changes
      </button>
      <button
        class="edit-page-nav-save"
        @click="saveBtn">
        save
      </button>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data(){
      return {
        contents: [],
        beforeChanging: '',
        type: ''
      }
    },

    created(){
      this.contents = JSON.parse(localStorage.getItem('localtodo'))
      this.beforeChanging = this.contents.title
    },

    computed: mapGetters(['getState']),

    methods: {
      ...mapActions(['saveTodo', 'togglePopup', 'setTemp', 'setBackup']),

      // Add new Todo tasks to TodoBox
      addContent(content){
        this.contents.content.push(content)
      },

      // Update Todo title value
      updateTask(e){
        e.preventDefault();
        if(e.target.innerText.length === 0){
          e.target.innerText = this.beforeChanging
        }
        this.contents.title = e.target.innerText;
        e.target.blur();
      },

      // Remove exact Todo task
      removeTodo(id) {
        this.contents.content = this.contents.content.filter(t => t.id !== id)
      },

      // Save changes to the Store and redirect to main page
      saveBtn(){
        this.setBackup(false)
        this.saveTodo(this.contents)
        this.$router.push('/')

        // Reset temp changes
        this.setTemp([])
      },

      // Change local type of button for passing it to Popup notification
      changeType(type){
        if(type === 'delete') this.type = 'delete'
        else if (type = 'cancel'){
          this.type = 'cancel'

          // Save temp changes for possibility return them
          this.setTemp(this.contents)
        }
        this.togglePopup()
      },

      // Backup handler - return canceled changes
      backup(){
        this.contents = this.getState('temp')
        this.setBackup(false)
      },

      // Set previous/saved value of TodoBox
      getInitial(){
        this.contents = JSON.parse(localStorage.getItem('localtodo'))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .edit-page {
    display: grid;
    grid-gap: 24px;
    margin: 0 auto;
    max-width: 800px;

    &-header {
      text-align: center;
      display: grid;
      grid-gap: 24px;

      /* &-title {

      } */

      &-todo-title {
        font-size: 24px;
        outline: none;
      }
    }

    &-content {
      display: grid;
      grid-gap: 12px;
    }

    &-nav {
      display: grid;
      grid-template: auto / repeat(3, auto);
      grid-gap: 12px;

      &-backup {
        grid-area: 2 / 2 / 2 / 2;
        font-size: 16px !important;
        color: rgba(0,0,0,.5);
      }
    }

    &-nav button {
      width: auto;
      height: 24px;
      font-size: 24px;
    }
  }
</style>
