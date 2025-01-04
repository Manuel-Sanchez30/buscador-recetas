<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';


</script>

<template>

  <Header/>

  <main class="mx-auto container">

    <RouterView/>
  </main>
  

</template>

