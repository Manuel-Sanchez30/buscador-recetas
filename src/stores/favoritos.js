import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { ref, watch, onMounted, computed } from "vue";
import { useModalStore } from "./Modal";



export const useFavoritosStore = defineStore('favoritos', ()=>{

    const favoritos = ref([]);
    const bebidas = useBebidasStore();
    const modal = useModalStore();


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
            eliminarFavoritos()
        }else{
            favoritos.value.push(bebidas.receta);
        }

        modal.modal = false
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

    //eliminar Favoritos
    function eliminarFavoritos(){
        favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidas.receta.idDrink )
    };

    //texto para cuando no hay favoritos
    const nofavoritos = computed(()=> favoritos.value.length === 0)

    return {
        favoritos,
        nofavoritos,
        handleClickFavorito,
        existeFavorito

    }

});