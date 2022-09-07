<template>


<form  @submit="onSubmit" >
       <div class=" w-1/2 min-h-screen bg-gray-100 text-gray-800 antialiased py-6 flex flex-col justify-center">
        <div class="relative py-3 w-1/2 sm:max-w-full sm:mx-auto">
            <span class="text-2xl font-light">Add Tasks</span>
            <div class="mt-4 bg-white shadow-md rounded-lg">
                <div class="h-2 bg-indigo-400 rounded-t-md"></div>
                <div class="px-8 py-6">
                    <label class="block font-semibold">Title</label>
                    <input v-model="tasks.title" type="text" placeholder="Title"  class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"  />
                    <label class="block mt-3 font-semibold">Description</label>
                    <input v-model="tasks.description" type="text"  placeholder="Description" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"  />
                    <label class="block  mt-3 font-semibold">Date Added</label>
                    <input type="date"  v-model="tasks.date_added"  placeholder="Date Added"  class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"/>
                    <label class="block  mt-3 font-semibold">Date Completed</label>
                    <input type="date"  v-model="tasks.date_completed"  placeholder="Date Completed"  class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"/>
                    <div class="flex justify-between items-baseline">
                        <button type="submit" class="mt-4 bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 " @click="$emit('close')">Submit</button>
                         <button type="button" class="mt-4 m-5 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 " @click="$emit('close')">Cancel</button>


                    </div>
                </div>
            </div>
        </div>

    </div>
  
</form>

 
</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const emit = defineEmits()
let arrayFromStorage = JSON.parse(localStorage.getItem("TASKS"))
let arrayLength = arrayFromStorage.length
arrayLength = JSON.stringify(++arrayLength)



const store = useStore();
const tasks = ref({
    id:arrayLength,
    title:'',
    description:'',
    status:'',
    date_added: new Date().toISOString().slice(0,10),
    date_completed:'',
    completed: false
})


function onSubmit() {
    store.dispatch("addTasks", tasks.value)
    emit('close')
 
}


  

</script>

<style lang="scss" scoped>

</style>