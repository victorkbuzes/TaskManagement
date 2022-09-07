<template>
    

<add-tasks v-show="showAdd" @close="showAdd=false" class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50" />
<!-- <edit-task v-show="showEdit" class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"/> -->
    <div class="p-5 w-3/4  sm:max-w-full  sm:mx-auto h-screen bg-gray-100">
     
        <button @click="showAdd=true" type="submit" class="mt-4 mb-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 ">
            Add Tasks
        </button>
        <div class="overflow-auto rounded-lg shadow hidden md:block">
            <table class="w-full">
                <thead class="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th class="w-20 p-3 font-semibold text-left tracking-wide">No.</th>
                        <th  class=" p-3 font-semibold text-left tracking-wide">Description</th>
                        <th class="w-24 p-3 font-semibold text-left tracking-wide">Description</th>
                        <th class="w-36 p-3 font-semibold text-left tracking-wide">Status</th>
                        <th class="w-36 p-3 font-semibold text-left tracking-wide">Date Added</th>
                        <th class="w-24 p-3 font-semibold text-left tracking-wide">Deadline</th>
                        <th class="w-40 p-3 font-semibold text-left tracking-wide">Date Completed</th>
                        <h1 class="w-40 p-3 text-center text-1xl font-semibold ">Actions</h1> 
                    </tr>
                </thead>
            
                <tbody class="divide-y divide-gray-100">
                    <tr v-for="task in tasks" :key="task.id" class="bg-gray-50">
                        <td  class="p-3 text-sm  text-gray- 700 whitespace-nowrap " >{{task.id}}</td>
                        <td  class="p-3 text-sm  text-gray-700 whitespace-nowrap"> {{task.title}} </td>
                        <td  class="p-3 text-sm  text-gray-700 whitespace-nowrap"> {{task.description}} </td>
                        <td  class="p-3 text-sm  text-gray-700 whitespace-nowrap">
                            <div v-if="task.complete != true">
                                <span  @click="isCompleted(task.id, task.complete= false)" class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Completed</span>

                            </div>
                            <div v-else> 
                                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Incomplete</span>

                            </div>
                            
                        
                            
                        </td>
                        <td  class="p-3 text-sm  text-gray-700 whitespace-nowrap">{{task.date_added}}</td>
                        <td  class="p-3 text-sm  text-gray-700 whitespace-nowrap">{{task.deadline}}</td>
                        <td  class="p-3 text-sm  text-gray-700 whitespace-nowrap">{{task.date_completed}}</td>
                        <button @click="showEdit = true" type="button" class="mt-4 m-5 bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600 ">Update</button>
                         
                        
                        <button type="button"  @click="deleteTask(task.id)"  class="mt-4 bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600 "> Delete</button>
                        <!-- Edit form -->
                        
                        <div v-show="showEdit" class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
                            <div class="w-full max-w-xs">
                                <form @submit="onSubmit(task.id)">
                                <div class="min-h-screen bg-gray-100 text-gray-800 antialiased py-6 flex flex-col justify-center">
                                    <div class="">
                                    <span class="text-2xl font-light">Edit tasks</span>
                                    <div class="mt-4 bg-white shadow-md rounded-lg">
                                    <div class="h-2 bg-indigo-400 rounded-t-md"></div>
                                    <div class="px-8 py-6">
                                    <label class="block font-semibold">Title </label>
                                    <input  v-model = "task.title" type="text" placeholder="Title"   class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"  />
                                    <label class="block mt-3 font-semibold">Description </label>
                                    <input  v-model = "task.description" type="text" placeholder="Description"   class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"  />
                                    <label class="block  mt-3 font-semibold">Date Added</label>
                                                        
                                    <input v-model ="task.date_added" type="date"   placeholder="Date Added"  class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"/>
                                    <label class="block  mt-3 font-semibold">Date Completed</label>
                                    <input type="text"  v-model="task.date_completed"  placeholder="Date Completed"  class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"/>
                                    <div class="flex justify-between items-baseline">
                                    <button type="submit" class="mt-4 bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 ">Submit</button>
                                                            
                                    <button  @click="showEdit= false" type="button" class="mt-4 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 ">Cancel</button>
                                                            
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>

                            </form>

                            </div>
                        </div>
                    </tr>
                    
                </tbody>
          
            </table>

        
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            <div v-for="task in tasks" :key="task.id" class="bg-white  space-y-4  p-4 rounded-lg shadow">
                
                <div class="flex items-center space-x-2 text-sm">
                    <div><a href="#" class="text-blue-500 font-bold hover:underline">{{task.id}}</a></div>
                    <div class="text-gray-500">10/10/2020</div>
                    <div>
                        <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Cancel</span>

                    </div>
                </div>
                <div class="text-sm text-gray-700">{{task.description}}</div>
                <div class="text-sm font-medium text-black">$300</div>

            
            </div>
            
          

        </div>

        
    </div>




</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

import {useStore} from 'vuex'
import AddTasks from './AddTasks.vue';

const showAdd = ref(false);
const showEdit = ref(false);
const completed = ref(false)


const store = useStore();
    

function isCompleted(id, completed){
    return store.dispatch("toggleTasks", {id, completed: completed = !completed.value})


}
function onSubmit(id) {
    return store.dispatch("editTasks", {id})       
}


const tasks = computed(() => {
  return store.state.tasks
})
onMounted(() => {
// dispatch the fetchUsers action which commits a mutation to update the state
  store.dispatch("fetchTasks");
  
})

function deleteTask(id) {
    let response = confirm("You won't be able to revert this")
    if (response){
        store.dispatch('removeTasks', {id});
    }
}

</script>
