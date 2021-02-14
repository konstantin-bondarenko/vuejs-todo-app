<template>
  <div class="edition">
    <h1>Editing your Todo Task</h1>
    <c-popup
      v-if='getState("popup")'
      v-bind:type='type'
      v-bind:id='contents.id'
      @get-initial='getInitial'/>
    <div class='content'>
      <c-add-todo @add-content='addContent' />
      <div class='title-box'>
        <span
          class="title"
          contenteditable="true"
          @keydown.enter="updateTask($event)"
          @blur="updateTask($event)">{{contents.title}}</span>
      </div>
      <div
        v-for='(item, i) in contents.content'
        v-bind:key='i'>
        <c-todo-item
          v-bind:td='item'
          v-bind:checkbox='true'
          @remove-todo='removeTodo'/>
      </div>
      <span class='hint'>Click on the text for editing</span>
      <div class='buttons'>
        <button
          class='delete'
          @click="changeType('delete')">
          delete
        </button>
        <div class='backup-box'>
          <button
            class='cancel'
            @click="changeType('cancel')">
            cancel changes
          </button>
          <button
            v-if='getState("backup")'
            class='backup' @click='backup'>
            click to return changes
          </button>
        </div>
        <button
          class='cancel'
          @click="saveBtn">
          save
        </button>
      </div>
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

<style scoped>
  .edition{
    margin: 0 auto;
    width: 100%;
  }
  .content{
    border: 1px solid #ccc;
    border-radius: 20px;
    width: 70%;
    margin: 10px auto;
  }
  .hint{
    color: rgba(0,0,0,.5);
  }
  .title-box{
    font-size: 24px;
    margin: 20px 0;
  }
  .title:focus{
    width: 230px;
    border: none;
    border-bottom: 2px solid #000;
    background: none;
    padding: 10px;
    outline: none;
  }
  .buttons{
    display: flex;
    justify-content: center;
    margin: 10px;
  }
  .buttons button{
    margin: 20px 0;
    width: 100px;
    height: 20px;
    outline: none;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
  }
  .backup-box{
    display: flex;
    flex-direction: column;
  }
  .backup-box button{
    width: 200px;
  }
  .backup-box .backup{
    font-size: 12px;
    margin: 5px 0;
  }
  .cancel{
    color: rgba(255, 255, 255, .5);
  }
  .delete{
    color: rgba(0,0,0,.5);
  }
</style>
