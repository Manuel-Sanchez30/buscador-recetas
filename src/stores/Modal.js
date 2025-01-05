import { defineStore } from 'pinia';
import { ref,computed } from 'vue';
import { useBebidasStore } from './bebidas';
import { useFavoritosStore } from './favoritos';


export const useModalStore = defineStore('modal', ()=>{

    const modal = ref(false);
    const bebidas = useBebidasStore();
    const favoritos = useFavoritosStore();

    function handleClickModal(){
        modal.value = !modal.value
    };

    const textoBoton = computed(()=>{
        return favoritos.existeFavorito(bebidas.receta.idDrink) ? 'Eliminar Favorito' : 'Agregar a Favoritos'
    })



    return {
        modal,
        textoBoton,
        handleClickModal
    }

});
