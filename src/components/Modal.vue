<script setup>
import { useBebidasStore } from '@/stores/bebidas';
import { useModalStore } from '@/stores/Modal';
import { useFavoritosStore } from '@/stores/favoritos';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

    const modal = useModalStore();
    const bebidas = useBebidasStore();
    const favorito = useFavoritosStore();

    const formatearIngredientes = ()=>{
        const ingredientesDiv = document.createElement('DIV')

            for(let i = 1; i <= 15; i++){
                if(bebidas.receta[`strIngredient${i}`]){
                    const ingrediente = bebidas.receta[`strIngredient${i}`]
                    const cantidad = bebidas.receta[`strMeasure${i}`]

                    const ingredienteCantidad = document.createElement('P')

                    ingredienteCantidad.classList.add('tetx-lg', 'text-gray-500')
                    ingredienteCantidad.textContent = `${ingrediente} - ${cantidad}`

                    ingredientesDiv.appendChild(ingredienteCantidad)

                }
            }

            return ingredientesDiv
    };

</script>

<template>
    <TransitionRoot as="template" :show="modal.modal" >
      <Dialog as="div" class="relative z-10" @close="modal.handleClickModal()">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                <div>
                  <div class="mt-3">

                    <DialogTitle as="h3" class="text-center mb-3 font-bold">
                        {{ bebidas.receta.strDrink }}
                    </DialogTitle>
                    <img 
                        :src="bebidas.receta.strDrinkThumb"
                        :alt=" 'imagen de ' + bebidas.receta.strDrink "
                        class="w-96 mx-auto rounded-md"
                    >
                    <DialogTitle as="h3" class="text-center mt-2 mb-2 font-bold">
                        Ingredientes y Cantidades
                    </DialogTitle>
                    <div v-html=" formatearIngredientes().outerHTML" class="text-center"></div>
                    <DialogTitle as="h3" class="text-center mt-2 mb-2 font-bold">
                        Instrucciones
                    </DialogTitle>
                    <p class="text-gray-500">{{ bebidas.receta.strInstructions }}</p>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                    <button 
                        type="button"
                        @click="modal.handleClickModal()"
                        class="w-1/2 bg-orange-600 rounded-md text-white font-bold hover:bg-orange-700"
                    >
                        Cerrar
                    </button>
                    <button 
                        type="button"
                        class="w-1/2 bg-orange-600 rounded-md text-white font-bold hover:bg-orange-700"
                        @click="favorito.handleClickFavorito()"
                    >
                        Agregar a Favoritos
                    </button>
                </div> 
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>