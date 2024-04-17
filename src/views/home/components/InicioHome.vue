<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>
<template>
  <div class="w-full">
    <figure
      class="transition-all duration-300 cursor-pointer filter hover:grayscale-0"
    >
      
        <img
          class="rounded-none"
          src="https://images3.alphacoders.com/739/739912.jpg"
          alt="image description"
        />
      
      <figcaption class="fixed px-56 text-2xl top-96 mt-56 text-white bottom-6">
        <p>¡No estamos preguntando donde está el tesoro escondido! ¡Ni siquiera estamos preguntando si existe un tesoro! Todos salieron al mar, ¡arriesgando su vida para buscarlo!</p>
      </figcaption>
    </figure>
  </div>
</template>
