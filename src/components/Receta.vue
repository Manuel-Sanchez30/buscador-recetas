<script setup>
import { useBebidasStore } from "@/stores/bebidas";


    defineProps({
        receta:{
            type:Object,
        }
    });

    const bebidas = useBebidasStore();

</script>

<template>
    
    <div>
        
        <div class="overflow-hidden"> 
            <img 
                :src="receta.strDrinkThumb"
                :alt=" 'imagen de ' + receta.strDrink "
                class="hover:scale-125 hover:rotate-2 transition-transform rounded-md"
            >
        </div>
        <div>
            <h2 class="text-center truncate font-bold">{{ receta.strDrink }}</h2>
            <button
                type="button"
                class="bg-orange-600 w-full rounded-md text-white hover:bg-orange-500"
                @click="bebidas.seleccionarBebida(receta.idDrink)"
            >Ver Receta</button>
        </div>
    </div>
</template>


