<script setup>
import { useBebidasStore } from '@/stores/bebidas';
import { useNotificacionStore } from '@/stores/notificacion';
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const store = useBebidasStore();
const notificacion = useNotificacionStore();

const paginaInicio = computed(()=> route.name === 'inicio');

const handleSubmit = ()=>{

    //validar formulario 
    if(Object.values(store.busqueda).includes('')){
        notificacion.$patch({
            texto:'Todos Los Campos son Obligatorios',
            mostrar: true,
            error: true
        })

        return
    }

    store.obtenerRecetas();
};

</script>
<template>
    <header class="bg-slate-800" :class="{header: paginaInicio}">
        <div class="mx-auto container px-5 py-16">
            <div class="flex justify-between items-center">
                <div>
                    <RouterLink :to="{name: 'inicio'}">
                        <img src="/public/img/logo.svg" alt="imagen logo" class="w-32">
                    </RouterLink>
                </div>
                <nav class="text-white font-bold flex gap-2">
                    <RouterLink :to="{name: 'inicio'}" active-class="text-orange-500">inicio</RouterLink>
                    <RouterLink :to="{name: 'favoritos'}" active-class="text-orange-500">favoritos</RouterLink>
                    <RouterLink :to="{name: 'ia'}" active-class="text-orange-500">Generar con IA</RouterLink>
                </nav>
            </div>
            <div>
                <form 
                    v-if="paginaInicio"
                    class="md:w-1/2 2xl:w-1/3 bg-orange-500 my-32 p-10 space-y-6 rounded-lg shadow-md"
                    @submit.prevent="handleSubmit"
                >
                    <div class="space-y-4">
                        <label 
                            for="ingrediente"
                            class="block font-bold text-white uppercase"
                        >
                            Nombre o Ingredientes
                        </label>
                        <input
                            id="ingrediente"
                            type="text"
                            class="rounded-md w-full focus outline-none px-2 py-1 font-medium"
                            placeholder="Nombre o Ingredientes"
                            v-model="store.busqueda.nombre"
                        >
                    </div>
                    <div class="space-y-4">
                        <label 
                            for="categoria"
                            class="block font-bold text-white uppercase"
                        >
                            Categoria
                        </label>
                        <select 
                            name="categoria"
                            id="categoria"
                            class="w-full px-2 py-1 rounded-md"
                            v-model="store.busqueda.categoria"
                        >
                            <option value="">--Seleccione--</option>
                            <option
                                v-for="categoria in store.categorias"
                                :key="categoria.strCategory"
                                :value="categoria.strCategory"
                            >{{ categoria.strCategory }}</option>
                            
                        </select>
                    </div>
                    <input 
                        type="submit"
                        value="Buscar Receta"
                        class="text-white w-full font-bold bg-orange-700 rounded-md py-1 cursor-pointer hover:bg-orange-800"
                    >
                </form>
            </div>
        </div>
    </header>
</template>
<style>
    .header{
        background-image: url('/img/bg.jpg');
        background-size: cover;
        background-position: center;
    }
</style>


