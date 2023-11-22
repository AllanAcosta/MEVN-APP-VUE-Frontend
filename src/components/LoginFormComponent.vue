<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore.js'
import { storeToRefs } from 'pinia'

//Router Setting
const router = useRouter()

//Store Setting
const useUser = useUserStore()
const { login } = useUser
const { isUserLoggedIn, isUserAuthenticated } = storeToRefs(useUser)

//Login Models
const userEmail = ref('')
const userPassword = ref('')

//Component Login Method
const handleLoggin = async (userEmail, userPassword) => {
  const authorization = await login(userEmail, userPassword)
  console.log(authorization.isUserLoggedIn.value)
  console.log(authorization.isUserAuthenticated.value)

  if (authorization.isUserLoggedIn.value) {
    router.push('/')
  } 
}
</script>
<template>
  <form class="w-full">
    <h1>Login</h1>
    {{ isUserLoggedIn }}
    {{ isUserAuthenticated }}
    <div class="mb-6">
      <label
        for="user-email-success"
        class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
        >Your name</label
      >
      <input
        type="text"
        id="user-email-success"
        v-model="userEmail"
        class="text-sm rounded-lg w-full p-2.5"
        placeholder="Email" />
      <p class="mt-2 text-sm text-green-600 dark:text-green-500">
        <span class="font-medium">Alright!</span> user-email available!
      </p>
    </div>
    <div class="mb-6">
      <label
        for="user-Password-success"
        class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
        >Your name</label
      >
      <input
        type="password"
        id="user-password-success"
        v-model="userPassword"
        class="text-sm rounded-lg w-full p-2.5"
        placeholder="password" />
    </div>

    <input
      class="btn-primary-outlined w-full"
      type="button"
      value="send"
      @click="handleLoggin(userEmail, userPassword)" />
  </form>
</template>
