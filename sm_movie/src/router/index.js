import Vue from 'vue'
import Router from 'vue-router'
import clock from '@/components/clock'
import selectPosition from '@/components/selectPosition'
import Total from '@/components/Total'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'clock',
      component: clock
    },
    {
      path: '/selectPosition',
      name: 'selectPosition',
      component: selectPosition
    },
    {
      path: '/Total/:time',
      name: 'Total',
      component: Total
    }
  ]
})
