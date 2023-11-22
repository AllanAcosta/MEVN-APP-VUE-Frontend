<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink, RouterView } from 'vue-router'
import AsideNavbar from './components/AsideNavbar.vue'
import { useNavbarStore } from '@/stores/navbarState.js'

const useNabvar = useNavbarStore()
const { changeNavbarState } = useNabvar
const { navbarState } = storeToRefs(useNabvar)

import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <body class="overflow-hidden">
    <header class="w-full px-4 py-6 bg-slate-600 fixed z-20 top-0 left-0">
      <div>
        <button
          @click="changeNavbarState"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          navbar: {{ navbarState }}
        </button>
      </div>
    </header>
    <div class="navbar-conatiner relative">
      <AsideNavbar :navIsHidden="navbarState"></AsideNavbar>
    </div>
    <div class="w-full container-fluid overflow-y-auto h-screen">
      <RouterView />
    </div>
  </body>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.app {
  display: flex;
  justify-content: center;
}
.carousel {
  position: relative;
  overflow: hidden;
  width: 800px;
  height: 500px;
  z-index: 10;
}
.btn {
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid transparent;
  margin: 5px 10px;
  color: #fff;
  height: 50px;
  width: 50px;
  position: absolute;
  margin-top: -25px;
  z-index: 2;
}
.btn:hover {
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn-next {
  top: 50%;
  right: 0;
}
.btn-prev {
  top: 50%;
  left: 0;
}
.carousel-slider {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.carousel-slider img {
  width: 100%;
  height: 100%;
}
</style>
