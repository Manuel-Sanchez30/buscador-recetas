import { defineStore } from "pinia";
import { reactive,ref, onMounted } from "vue";
import APIServices from "@/services/APIServices";



export const useBebidasStore = defineStore('bebidas', ()=>{

    const categorias = ref([]);
    const busqueda = reactive({
        nombre: '',
        categoria: ''
    });
    const recetas = ref([]);

    onMounted(async ()=>{
        const {data:{drinks}} =  await APIServices.obtenerCategorias();
        categorias.value = drinks;
    });

    async function obtenerRecetas(){
        const {data:{drinks}} = await APIServices.buscarRecetas(busqueda);
        console.log(drinks);
        recetas.value = drinks;
    };

    async function seleccionarBebida(id){
        const {data:{drinks}} = await APIServices.buscarReceta(id);
        console.log(drinks[0]);
    };

    return {
        categorias,
        busqueda,
        recetas,
        obtenerRecetas,
        seleccionarBebida

    }

});