import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { ref, watch, onMounted, computed } from "vue";
import { useModalStore } from "./Modal";
import {useNotificacionStore} from '../stores/notificacion';

    



export const useFavoritosStore = defineStore('favoritos', ()=>{

    const favoritos = ref([]);
    const bebidas = useBebidasStore();
    const modal = useModalStore();
    const notificacion = useNotificacionStore();


    onMounted(()=>{
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    });

    watch(favoritos, ()=>{
        sincronizarLocalStore()
    },{
        deep: true,
    });

    function agregarFavorito(){
        favoritos.value.push(bebidas.receta)

        notificacion.mostrar = true
        notificacion.texto = 'Agregado a favoritos'
    };

    function handleClickFavorito(){
        if(existeFavorito(bebidas.receta.idDrink)){
            eliminarFavoritos()
        }else{
            agregarFavorito();
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

        notificacion.mostrar = true
        notificacion.error = true
        notificacion.texto = 'Eliminado de Favoritos'
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