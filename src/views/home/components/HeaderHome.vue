<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>
<template>
  <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="/" class="flex items-center">
        <img
          src="https://i.pinimg.com/originals/3f/36/fc/3f36fcdd50dcbfd4a15080c52743a596.png"
          class="h-11 mr-3"
          alt="Flowbite Logo"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >One-piece</span
        >
        
      </a>
      <button
        id="mega-menu-full-image-button"
        data-collapse-toggle="mega-menu-full-image"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mega-menu-full-image"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="mega-menu-full-image"
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <li>
            <a
              href="/"
              class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <button
              id="mega-menu-full-cta-image-button"
              data-collapse-toggle="mega-menu-full-image-dropdown"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Info
              <svg
                class="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Marketplace</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Resources</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div
      id="mega-menu-full-image-dropdown"
      class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
    >
      <div
        class="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6"
      >
        <ul class="mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
          <li>
            <a href="/about" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Frutas
            </a>
          </li>
          <li>
            <a href="/espada" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Espadas
            </a>
          </li>
          <li>
            <a
              href="/personaje"
              class="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Personajes
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Online Stores
            </a>
          </li>
        </ul>
        <ul class="mb-4 space-y-4 md:mb-0">
          <li>
            <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Our Blog
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              License
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Resources
            </a>
          </li>
        </ul>
        <a
          href="https://api-onepiece.com/"
          class="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
          style="
            background-image: url(https://api-onepiece.com/build/img/background/straw-hat-pirates.jpg);
          "
        >
          <p class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
            Commencez à utiliser l'API One Piece dès à présent.
          </p>
          <button
            type="button"
            class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
          >
            Get started
            <svg
              class="w-4 h-4 ml-1 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
    <ul class="flex border-b-4 border-gray-200 dark:border-gray-700"></ul>
  </nav>
</template>