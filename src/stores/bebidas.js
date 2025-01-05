import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import APIServices from "@/services/APIServices";



export const useBebidasStore = defineStore('bebidas', ()=>{

    const categorias = ref([]);

    onMounted(async ()=>{
        const {data:{drinks}} =  await APIServices.obtenerCategorias();
        console.log(drinks);
        categorias.value = drinks;
    });

    return {
        categorias
    }

});