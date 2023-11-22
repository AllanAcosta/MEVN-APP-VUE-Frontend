import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import UserAccessView from '../views/UserAccessView.vue'
import { useUserStore } from '@/stores/userStore.js'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/user-access',
      name: 'user-access',
      component: UserAccessView,
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../components/LoginFormComponent.vue'),
        },
        {
          path: 'register',
          name: 'register',
          components: {
            default: () => import('../components/RegisterFormComponent.vue'),
          },
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const useUser = useUserStore()
  const { isUserLoggedIn, isUserAuthenticated } = storeToRefs(useUser)
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isUserAuthenticated.value && isUserLoggedIn.value) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
