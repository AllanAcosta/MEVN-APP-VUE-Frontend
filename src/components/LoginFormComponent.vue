<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore.js'
import { formInputValidations } from '@/composable/formInputValidations'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { initTooltips } from 'flowbite'

//Store Setting
const useUser = useUserStore()
const { login } = useUser

//Router Setting
const router = useRouter()

//Validation Composable
const { validatePassword, validateEmail } = formInputValidations()

/** handleLogin()
 *  @param values -> (object)
 **/

const handleLoggin = (values) => {
  if (validateEmail === true && validatePassword === true) {
    const authorization = login(values.email, values.password)
    if (authorization.isUserLoggedIn.value) {
      router.push('/')
    }
  } else {
    console.log('Please validate your data')
  }
}

onMounted(() => {
  initTooltips()
})
</script>
<template>
  <Form
    @submit="handleLoggin"
    class="w-full">
    <h1>Login</h1>
    <div class="mb-6">
      <label
        for="user-email-success"
        class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
        >Your email</label
      >
      <Field
        name="email"
        type="text"
        id="user-email-success"
        class="text-sm rounded-lg w-full p-2.5"
        placeholder="Email"
        :rules="validateEmail" />
      <ErrorMessage name="email" />
    </div>
    <div class="mb-6">
      <label
        for="user-Password-success"
        class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
        >Your password</label
      >

      <div
        id="tooltip-animation"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Tooltip content
        <div
          class="tooltip-arrow"
          data-popper-arrow></div>
      </div>

      <Field
        data-tooltip-target="tooltip-animation"
        name="password"
        type="password"
        id="user-password-success"
        class="text-sm rounded-lg w-full p-2.5"
        placeholder="password"
        :rules="validatePassword" />
      <ErrorMessage name="password" />
    </div>

    <input
      class="btn-primary-outlined w-full"
      type="submit"
      value="send" />
  </Form>
</template>
