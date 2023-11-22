import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useUserStore = defineStore('userStore', () => {
  const userData = ref(null)
  const token = ref('')
  const isUserLoggedIn = ref(false)
  const isUserAuthenticated = ref(false)

  const authenticateUser = async (userToken, userRole) => {
    const auth = await axios.post(
      'http://localhost:3000/api/user/auth',
      { role: userRole },
      {
        headers: {
          token: userToken,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    const authenticationStatus = auth.data
    return authenticationStatus
  }

  const login = async (userEmail, userPassword) => {
    if (userData.value === null && token.value === '') {
      try {
        const res = await axios.post('http://localhost:3000/api/user/login', {
          email: userEmail,
          password: userPassword,
        })
        const { user, userToken } = res.data
        userData.value = user
        isUserLoggedIn.value = true

        const { authenticated } = await authenticateUser(userToken, user.role)

        if (authenticated) {
          token.value = userToken
          localStorage.setItem('user_token', userToken)
          localStorage.setItem('user_name', user.email)
          localStorage.setItem('user_email', user.email)
          isUserAuthenticated.value = true
          return {isUserAuthenticated, isUserLoggedIn}
        }
      } catch (error) {
        console.log(error)
      }
    } else {
    }
  }

  return {
    login,
    userData,
    token,
    isUserLoggedIn,
    isUserAuthenticated,
  }
})
