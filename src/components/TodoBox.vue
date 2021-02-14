<template>
  <div class="box-item">
    <h3 class="box-item-title">
      {{ todo.title }}
    </h3>
    <c-todo-item
      v-for="(item, index) in todo.content"
      :key="'todo-item-' + index"
      :td="item"
      :checkbox="false"/>
    <div class="box-item-buttons">
      <button
        class="box-item-buttons-edit"
        @click='toEdit(todo)'>
        EDIT
      </button>
      <button
        class="box-item-buttons-del"
        @click="$emit('recive-id', todo.id)">
        DELETE
      </button>

    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    props: {
      todo: Object
    },
    methods: {
      ...mapActions(['setEditing']),

      // Redirect to Editing page and pass exact TodoBox
      toEdit(todo){
        this.$router.push({ name: 'nav.edit', params: todo})
        this.setEditing(todo)
        localStorage.setItem('localtodo', JSON.stringify(todo))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box-item {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 16px;

    &-title {
      margin: 12px 0;
    }

    &-buttons{
      display:flex;
      justify-content: space-around;
      align-items: center;
      margin: 12px;

      &-edit, &-del {
        margin: 12px 0;
        width: 100px;
        height: 20px;
        font-size: 16px;
      }

      &-edit {
          color: rgba(255, 255, 255, .5);
      }

      &-del {
          color: rgba(0,0,0,.5);
      }
    }
  }

</style>
