import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import selectPosition from '@/components/selectPosition'
import Total from '@/components/Total'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/selectPosition',
      name: 'selectPosition',
      component: selectPosition
    },
    {
      path: '/Total',
      name: 'Total',
      component: Total
    }
  ]
})
