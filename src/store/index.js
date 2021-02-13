import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    temp: [],
    editingTodo: [],
    open: false,
    popup: false,
    error: false,
    backup: false,
    id: Number
  },

  getters: {
    getState: state => type => {
      switch(type){
        case 'todos': return state.todos
        case 'open': return state.open
        case 'popup': return state.popup
        case 'error': return state.error
        case 'backup': return state.backup
        case 'temp': return state.temp
        case 'editing': return state.editingTodo
      }

    }
  },


  mutations: {
    CLOSE_POPUP (state) {
      state.popup = false
    },

    ADD_TODOS(state, todo){
      state.todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },

    DELETE_TODO_BOX(state){ // deleteTodoBox
      state.todos = state.todos.filter(t => t.id !== state.id)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },

    SAVE_TODO(state, payload) { // saveTodos
      const item = state.todos.find(t => t.id === payload.id)
      Object.assign(item, payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },

    GET_TODOS(state){ // initialState
      state.todos = JSON.parse(localStorage.getItem('todos')) || []
    },

    TOGGLE_OPEN(state){ // changeOpen
      state.open = !state.open
    },

    TOGGLE_POPUP(state, payload){ // changePopup
      state.popup = !state.popup
    },

    TOGGLE_ERROR(state){ // changeError
      state.error = true
      setTimeout(()=>{
          return state.error = false
      }, 1000)
    },

    SET_ID(state, payload){ // related to togglePopup
      state.id = payload
    },

    SET_BACKUP(state, payload){ // changeBackup
      state.backup = payload
    },

    SET_TEMP(state, payload){ // changeTemp
      state.temp = payload
    },

    SET_EDITING(state, payload){ // changeEditing
      state.editingTodo = payload
    }
  },

  actions: {
    addTodo({commit}, payload){
      const newTodo = {
        title: payload.title,
        id: Date.now(),
        content: payload.content
      }
      commit('ADD_TODOS', newTodo)
      commit('CLOSE_POPUP')
    },

    deleteTodoBox({commit}){
      commit('DELETE_TODO_BOX')
      commit('CLOSE_POPUP')
    },

    saveTodo({commit}, payload){
      commit('SAVE_TODO', payload)
    },

    getPreviousTodos({commit}){
      commit('GET_TODOS')
    },

    toggleOpen({commit}) {
      commit('TOGGLE_OPEN')
    },

    togglePopup({commit}, payload) {
      commit('TOGGLE_POPUP')
      commit('SET_ID', payload)
    },

    toggleError({commit}) {
      commit('TOGGLE_ERROR')
    },

    setBackup({commit}, payload) {
      commit('SET_BACKUP', payload)
    },

    setTemp({commit}, payload) {
      commit('SET_TEMP', payload)
    },

    setEditing({commit}, payload) {
      commit('SET_EDITING', payload)
    }
  }
})
