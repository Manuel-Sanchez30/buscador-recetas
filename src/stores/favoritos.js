import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { ref } from "vue";



export const useFavoritosStore = defineStore('favoritos', ()=>{

    const favoritos = ref([]);
    const bebidas = useBebidasStore();

    function handleClickFavorito(){
        favoritos.value.push(bebidas.receta);
        console.log(favoritos);
    }

    return {
        favoritos,
        handleClickFavorito

    }

});