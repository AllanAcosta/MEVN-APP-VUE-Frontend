import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navbar', () => {

  const navbarState = ref(false)
  const changeNavbarState = () => {
    navbarState.value = !navbarState.value
   }

  return { navbarState, changeNavbarState }
})
