<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>
<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-9 m-10 -mt">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="" class="flex justify-center mt-3">
          <img
            class="rounded-t-lg"
            src="https://images.api-onepiece.com/category/b6b6cc9a1cb92974acf6bdf3d0291925.png"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="/personaje">
            <h5
              class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Personajes
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
          <a
            href="/personaje"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none"
          >
            Mas Imfo
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="/espada" class="flex justify-center">
          <img
            class="rounded-t-lg mt-6"
            src="https://images.api-onepiece.com/category/3c0ed162f2645c52cee16cb53e140dc4.png"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="/espada">
            <h5
              class="mb-2 mt-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Espadas
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
          <a
            href="/espada"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none"
          >
            Mas Imfo
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="/about" class="flex justify-center">
          <img
            class="rounded-t-lg"
            src="https://images.api-onepiece.com/category/2c8a13c3cad6dbae45bdbaf484c5e0a1.png"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="/about">
            <h5
              class="mb-2 -mt-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Frutas
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
          <a
            href="/about"
            class="inline-flex  px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none"
          >
            Mas Imfo
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    
    </div>
  </div>
</template>

<style scoped>
</style>
