<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Modal from './components/Modal.vue';
import Notificacion from './components/Notificacion.vue';


</script>

<template>

  <Header/>

  <main class="mx-auto container">
    <RouterView/>
  </main>

  <Modal/>
  <Notificacion/>
  

</template>

