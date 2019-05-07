import Vue from 'vue'
import Router from 'vue-router'
import testfile from '@/components/testfile'
import selectPosition from '@/components/selectPosition'
import Total from '@/components/Total'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testfile',
      component: testfile
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
