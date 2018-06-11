import Vue from 'vue'
import Router from 'vue-router'
import AdminPage from '@/components/AdminPage'
import CreationMatch from '@/components/CreationMatch'
import LoginPage from '@/components/LoginPage'
import GameCreation from '@/components/GameCreation'
import GestionPlayer from '@/components/GestionPlayer'
import GestionPage from '@/components/GestionPage'
import GestionStadium from '@/components/GestionStadium'
import GestionReferee from '@/components/GestionReferee'
import PagePlayer from '@/components/PagePlayer'
import PageStadium from '@/components/PageStadium'
import PageReferee from '@/components/PageReferee'
import 'vue-material-design-icons/styles.css' // ??????
import MenuIcon from 'vue-material-design-icons/menu.vue'
import store from '../store'

Vue.component('menu-icon', MenuIcon)

Vue.use(Router)

const loginRouteName = 'LoginPage'

const routes = [
  {
    path: '/adminpage',
    name: 'AdminPage',
    component: AdminPage,
    meta: {
      isAuthRequired: true
    },
    alias: '/'
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: {
      isAuthRequired: false
    }
  },
  {
    path: '/gamecreation',
    name: 'GameCreation',
    component: GameCreation,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/gestionplayer',
    name: 'GestionPlayer',
    component: GestionPlayer,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/gestionpage',
    name: 'GestionPage',
    component: GestionPage,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/gestionstadium',
    name: 'GestionStadium',
    component: GestionStadium,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/gestionreferee',
    name: 'GestionReferee',
    component: GestionReferee,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/pageplayer',
    name: 'PagePlayer',
    component: PagePlayer,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/pagestadium',
    name: 'PageStadium',
    component: PageStadium,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/pagereferee',
    name: 'PageReferee',
    component: PageReferee,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/test',
    name: 'CreationMatch',
    component: CreationMatch,
    meta: {
      isAuthRequired: true
    }
  }
]

const router = new Router({
  mode: 'history',
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
