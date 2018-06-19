import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '@/components/LoginPage'
import MyMatches from '@/components/MyMatches'
import Match from '@/components/Match'
import store from '../store'

Vue.use(Router)

const loginRouteName = 'LoginPage'

const routes = [
  {
    path: '/login',
    name: loginRouteName,
    component: LoginPage,
    meta: {
      isAuthRequired: false
    }
  },
  {
    path: '/matches/:id',
    name: 'Match',
    component: Match,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/',
    name: 'MyMatches',
    component: MyMatches,
    meta: {
      isAuthRequired: true
    }
  }
]

const router = new Router({
  // mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isAuthRequired) &&
    !store.getters.isLoggedIn) {
    next({ path: '/login' })
    return
  }
  if (to.name === loginRouteName && store.getters.isLoggedIn) {
    next({ path: '/' })
  }
  next()
})

export default router
