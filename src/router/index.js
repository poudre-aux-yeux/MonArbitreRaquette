import Vue from 'vue'
import Router from 'vue-router'
import MyMatches from '@/components/MyMatches'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/my-matches',
      name: 'MyMatches',
      component: MyMatches
    }
  ]
})
