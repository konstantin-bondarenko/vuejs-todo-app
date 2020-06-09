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
        id: Number,
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
            
        },
    },


    mutations: {
        addTodos(state, todo){
            state.todos.push(todo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
            state.open = false
        },

        deleteTodoBox(state){
            state.todos = state.todos.filter(t => t.id !== state.id)
            localStorage.setItem('todos', JSON.stringify(state.todos))
            state.popup = false
        },

        saveTodo(state, payload) {
            const item = state.todos.find(t => t.id === payload.id)
            Object.assign(item, payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },

        initialState(state){
            return state.todos = JSON.parse(localStorage.getItem('todos')) || []
        },

        changeOpen(state){
            state.open = !state.open
        },

        changePopup(state, id){
            state.popup = !state.popup
            state.id = id
        },

        changeError(state){
            state.error = true
            setTimeout(()=>{
                return state.error = false
            }, 1000)
        },

        changeBackup(state, boolean){
            state.backup = boolean
        },

        changeTemp(state, payload){
            state.temp = payload
        },

        changeEditing(state, payload){
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
            commit('addTodos', newTodo)
        }
    }
})