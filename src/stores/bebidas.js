import { defineStore } from "pinia";
import { reactive,ref, onMounted } from "vue";
import APIServices from "@/services/APIServices";



export const useBebidasStore = defineStore('bebidas', ()=>{

    const categorias = ref([]);
    const busqueda = reactive({
        nombre: '',
        categoria: ''
    });

    onMounted(async ()=>{
        const {data:{drinks}} =  await APIServices.obtenerCategorias();
        console.log(drinks);
        categorias.value = drinks;
    });

    function obtenerRecetas(){
        console.log('obteniendo categorias...');
    }

    return {
        categorias,
        busqueda,
        obtenerRecetas
    }

});