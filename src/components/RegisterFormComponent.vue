<script setup>
import { ref } from 'vue'
import axios from 'axios'

const registerStepCounter = ref(0)

const userFirstName = ref('')
const userLastName = ref('')
const userEmail = ref('')
const userPassword = ref('')
const userPasswordConfirmation = ref('')
const userBio = ref('')
const userAge = ref('')
const userGender = ref('')

const decreaseRegisterStepCounter = () => {
  if (registerStepCounter.value > 0) {
    registerStepCounter.value--
  }
}

const increaseRegisterStepCounter = () => {
  if (registerStepCounter.value < 2) {
    registerStepCounter.value++
  }
}
const userRegister = async (firstName, lastName, email, password, gender, age, bio) => {
  const userRegisterResponse = await axios.post('http://localhost:3000/api/user/register', {
    firstName,
    lastName,
    email,
    password,
    gender,
    age,
    bio,
  })
}
</script>
<template>
  <h1>Register</h1>

  <form class="w-full">
    <div
      class="transition-all"
      :class="registerStepCounter == 0 ? 'opacity-100 block' : ' opacity-0 hidden'">
      <h6>Whats your name?</h6>
      <div class="mb-6">
        <input
          type="text"
          v-model="userFirstName"
          class="text-sm rounded-lg w-full p-2.5"
          placeholder="First Name" />
      </div>
      <div class="mb-6">
        <input
          type="text"
          v-model="userLastName"
          class="text-sm rounded-lg w-full p-2.5"
          placeholder="Last Name" />
      </div>
    </div>
    <div
      class="transition-all delay-300"
      :class="registerStepCounter == 1 ? 'opacity-100 block' : ' opacity-0 hidden'">
      <h6>Set-up you account access?</h6>
      <div class="mb-6">
        <input
          type="text"
          v-model="userEmail"
          class="text-sm rounded-lg w-full p-2.5"
          placeholder="Email" />
      </div>
      <div class="mb-6">
        <input
          type="password"
          v-model="userPassword"
          class="text-sm rounded-lg w-full p-2.5"
          placeholder="Password" />
      </div>
      <div class="mb-6">
        <input
          type="password"
          v-model="userPassword"
          class="text-sm rounded-lg w-full p-2.5"
          placeholder="Re-type password" />
      </div>
    </div>
    <div
      class="transition-all delay-300"
      :class="registerStepCounter == 2 ? 'opacity-100 block' : ' opacity-0 hidden'">
      <h6>Tell us more about you!</h6>
      <div class="mb-6">
        <textarea
          type="textarea"
          v-model="userBio"
          class="text-sm rounded-lg w-full p-2.5"
          placeholder="Tell us more about you!" />
      </div>
      <div class="mb-6">
        <input
          type="number"
          v-model="userAge"
          class="text-sm rounded-lg w-full p-2.5"
          placeholder="Age" />
      </div>
      <div class="mb-6">
        <select
          class="text-sm rounded-lg w-full p-2.5"
          v-model="userGender">
          <option value="-1">Select a Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="NB">No Binary</option>
        </select>
      </div>
    </div>
    <div class="flex justify-between">
      <input
        v-if="registerStepCounter > 0"
        class="btn-primary-outlined"
        type="button"
        value="prev"
        @click="decreaseRegisterStepCounter" />
      <input
        v-if="registerStepCounter < 2"
        class="btn-primary-outlined"
        type="button"
        value="next"
        @click="increaseRegisterStepCounter" />
      <input
        v-if="registerStepCounter == 2"
        class="btn-primary-outlined"
        type="button"
        value="Submit"
        @click="
          userRegister(
            userFirstName,
            userLastName,
            userEmail,
            userPassword,
            userGender,
            userAge,
            userBio
          )
        " />
    </div>
  </form>
</template>
