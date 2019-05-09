import Vue from 'vue'
import Router from 'vue-router'
import testfile from '@/components/testfile'
import selectPosition from '@/components/selectPosition'
import Total from '@/components/Total'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/selectPosition',
      name: 'selectPosition',
      component: selectPosition
    },
    {
      path: '/Total/:time',
      name: 'Total',
      component: Total
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/buyticket/:movieId',
      name: 'buyticket',
      component: buyticket
    },
    {
      path: '/details/:movieId',
      name: 'moviedetail',
      component: moviedetail
    },
    {
      path: '/movieadmin',
      name: 'movieadmin',
      component: movieadmin
    },
    {
      path: '/edit/:movieId',
      name: 'edit',
      component: edit
    },
    {
      path: '/addmovie/:movieId',
      name: 'add',
      component: add
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    }
  ]
})
