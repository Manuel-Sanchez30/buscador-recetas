
import { defineStore } from "pinia";
import { ref } from "vue";
import IAService from "@/services/IAService";

export const useIAStore = defineStore('ia', ()=>{
    const promt = ref('');
    const respuesta = ref('');

    async function generarReceta(){
        await IAService.generarReceta(promt)
    }

    return{
        promt,
        respuesta,
        generarReceta
    }

});