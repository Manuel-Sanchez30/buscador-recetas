<script setup>
import { useBebidasStore } from '@/stores/bebidas';
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const store = useBebidasStore();

const paginaInicio = computed(()=> route.name === 'inicio');

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
                </nav>
            </div>
            <div>
                <form v-if="paginaInicio" class="md:w-1/2 2xl:w-1/3 bg-orange-500 my-32 p-10 space-y-6 rounded-lg shadow-md">
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
                        >
                    </div>
                    <div class="space-y-4">
                        <label 
                            for="categoria"
                            class="block font-bold text-white uppercase"
                        >
                            categoria
                        </label>
                        <select 
                            name="categoria"
                            id="categoria"
                            class="w-full px-2 py-1 rounded-md"
                        >
                            <option value="">--Seleccione--</option>
                            <option
                                v-for="categoria in store.categorias"
                                :key="categoria.strCategory"
                                value="categoria.strCategory"
                            >{{ categoria.strCategory }}</option>
                            
                        </select>
                    </div>
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


