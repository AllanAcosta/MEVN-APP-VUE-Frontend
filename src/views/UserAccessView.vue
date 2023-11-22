<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore.js'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter, RouterView, RouterLink } from 'vue-router'



const useUser = useUserStore()

</script>
<template>
  <div class="w-full h-full flex pt-24 overflow-hidden">
    <div class="w-6/12 px-16 flex flex-col items-center justify-center bg-brunt-sienna">
      <div class="grid grid-cols-2">
        <img
          class="w-full"
          src="@/assets/vuejslogo.png"
          alt="" />
        <img
          class="w-full"
          src="@/assets/flowbitelogo.png"
          alt="" />
        <img
          class="w-full"
          src="@/assets/mongodblogo.png"
          alt="" />
        <img
          class="w-full"
          src="@/assets/nodejslogo.png"
          alt="" />
      </div>
    </div>

    <div class="w-6/12 p-16 overflow-auto">
      <RouterView />
    </div>
  </div>
</template>
