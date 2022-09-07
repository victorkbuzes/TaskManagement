<template>
<form @submit="onSubmit(task.id)">
    <div class="min-h-screen bg-gray-100 text-gray-800 antialiased py-6 flex flex-col justify-center">
        <div class="relative py-3 w-1/2 sm:max-w-full sm:mx-auto">
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
                    <input type="text"   placeholder="Date Completed"  class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"/>
                    <div class="flex justify-between items-baseline">
                        <button type="submit" class="mt-4 bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 ">Submit</button>
                        
                        <router-link to="/"><button type="button" class="mt-4 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 ">Cancel</button></router-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</form>


    
</template>

<script>
    export default{
        setup(){
            return {}
        },
        computed: {
            task(){
                return this.$store.state.tasks.find(t => t.id == this.$route.params.id)
            }
        }
    }
// import { computed } from '@vue/reactivity';
// import { useRoute } from 'vue-router';
// import { useStore } from 'vuex';

//     const store = useStore()
//     const route = useRoute()
//     const tasks = computed(() => {
//         return store.state.tasks.find(t => t.id  == route.params.id)




</script>

<style lang="scss" scoped>

</style>