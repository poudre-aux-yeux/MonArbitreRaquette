import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodByeWorld from '@/components/GoodByeWorld'
import Products from '@/components/Products'
import TestPageJS from '@/components/TestPage'
import MyMatches from '@/components/MyMatches'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodbye',
      name: 'GoodBye',
      component: GoodByeWorld
    },
    {
      path: '/produits',
      name: 'Products',
      component: Products
    },
    {
      path: '/test',
      name: 'TestPage',
      component: TestPageJS
    },
    {
      path: '/my-matches',
      name: 'MyMatches',
      component: MyMatches
    }
  ]
})
