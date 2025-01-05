<script setup>
import Receta from "@/components/Receta.vue";
import { useFavoritosStore } from "@/stores/favoritos";


    const favoritos = useFavoritosStore();


</script>
<template>
    <h1 class="text-3xl md:text-6xl font-bold text-center mt-3">Favotiros</h1>
    <div class="container mx-auto grid grid-cols-3 md:grid-cols-4 mt-5 md:mt-10 gap-3 px-2">
        <Receta
            v-for="receta in favoritos.favoritos"
            :key="receta.idDrink"
            :receta="receta"
        />
    </div>
</template>



