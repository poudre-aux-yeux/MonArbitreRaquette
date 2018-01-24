import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodByeWorld from '@/components/GoodByeWorld'
import Products from '@/components/Products'

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
    }
  ]
})
