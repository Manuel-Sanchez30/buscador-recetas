<script setup>
import Receta from "@/components/Receta.vue";
import { useBebidasStore } from "@/stores/bebidas";

    const bebidas = useBebidasStore();

</script>
<template>
    <h1 class="text-3xl md:text-6xl font-bold text-center mt-3">Recetas</h1>
    <p v-if="bebidas.noRecetas" class="font-bold mt-6 text-center capitalize">Utiliza el Formulario para Buscar Recetas...😉</p>
    <div v-else class="container mx-auto grid grid-cols-3 md:grid-cols-4 mt-5 md:mt-10 gap-3 px-2">
        <Receta
            v-for="receta in bebidas.recetas"
            :key="receta.idDrink"
            :receta="receta"
        />
    </div>
</template>



