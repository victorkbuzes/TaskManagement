<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <nav class="flex justify-around center text-3xl font-bold mb-10 " >
        <RouterLink  to="/">Home</RouterLink>
        <RouterLink to="/completeTask">Complete</RouterLink>
        <RouterLink to="/incompleteTask">Incomplete</RouterLink>
      </nav>

      <h1 class="text-center justify-center text-3xl font-bold mb-10 ">Task Management Project</h1>
      
   




  <RouterView />
</template>

<style scoped>


</style>
