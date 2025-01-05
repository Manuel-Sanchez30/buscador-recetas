import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { ref, watch, onMounted } from "vue";



export const useFavoritosStore = defineStore('favoritos', ()=>{

    const favoritos = ref([]);
    const bebidas = useBebidasStore();

    onMounted(()=>{
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    });

    watch(favoritos, ()=>{
        sincronizarLocalStore()
    },{
        deep: true,
    });

    function handleClickFavorito(){
        if(existeFavorito(bebidas.receta.idDrink)){
            console.log('ya existe...');
        }else{
            favoritos.value.push(bebidas.receta);
        }
    };

    // almacenar en localStorage
    function sincronizarLocalStore(){
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    };

    //evitar elementos duplicados
    function existeFavorito(id){
        const favoritoLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritoLocalStorage.some(favorito => favorito.idDrink === id)
    };

    return {
        favoritos,
        handleClickFavorito,
        existeFavorito


    }

});