
import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
    state: {
        tasks: JSON.parse(localStorage.getItem("TASKS")) ? JSON.parse(localStorage.getItem("TASKS")):[],
    },
    getters: {
        todos: state => {
            return state.tasks

        },
        incompleteTodos(state) {
            return state.tasks.filter(task => task.completed == false)
        },
        completeTodos(state) {
            return state.tasks.filter(task => task.completed == true)
        } 

    },
   
    mutations: {
        SET_TASKS(state, tasks) {
            // state.tasks = tasks
            localStorage.setItem("TASKS", JSON.stringify(state.tasks))
            state.tasks = JSON.parse(localStorage.getItem("TASKS"))
        },
        ADD_TASKS(state, task) {
            let tasks = state.tasks.concat(task)
            localStorage.setItem("TASKS", JSON.stringify(tasks))
            state.tasks = JSON.parse(localStorage.getItem(tasks))
            console.log(task);
        },
        UPDATE_TASKS(state, {id}) {
            var newTodo = JSON.parse(localStorage.getItem("TASKS"))
            for (var i = 0 ; i < newTodo.length; i++){
                if (newTodo[i].id == id) {
                    newTodo = state.tasks
                    
                }
            }
            localStorage.setItem("TASKS", JSON.stringify(newTodo))
          
     
        },
    
        REMOVE_TASKS(state, {id}) {
            let tasks = state.tasks.filter(t=> t.id != id);
            state.tasks = tasks
            var delTodo = JSON.parse(localStorage.getItem("TASKS"))
            for (var  i = 0 ; i < delTodo.length; i++ ){
                if (delTodo[i].id == id) {
                    delTodo = state.tasks
                    
                }
            }
            localStorage.setItem("TASKS", JSON.stringify(delTodo));

        },
        TOGGLE_TASKS(state, { id, completed }) {
            //mark tasks as completed
            state.tasks.find(task => task.id == id).completed = completed
            var myTodo = JSON.parse(localStorage.getItem('TASKS'))
            for (var i = 0; i < myTodo.length; i++) {
                if(myTodo[i].id == id)
                {
                    myTodo[i].completed = completed;
                }
            }
            localStorage.setItem('TASKS', JSON.stringify(myTodo)); 
        }
     

    },
    actions: {
        async fetchTasks({commit}){
            const data = await axios.get('https://tychak.github.io/')
            commit('SET_TASKS', data.data)
                
              
        },
        async addTasks({commit},task){
            commit ('ADD_TASKS', task)
            task.value = ''
    
        },
        async removeTasks({commit},{id}){
            commit ('REMOVE_TASKS', {id})
    
        },
        async editTasks({commit}, {id}){
            commit('UPDATE_TASKS', {id})
        },
        toggleTasks({commit}, {id, completed}){
            commit('TOGGLE_TASKS', { id, completed})
        }
        


    },
   
})
