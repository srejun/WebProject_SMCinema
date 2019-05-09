import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import movie from '@/components/movie'
import buyticket from '@/components/buyticket'
import moviedetail from '@/components/moviedetail'
import movieadmin from '@/components/movieadmin'
import edit from '@/components/edit'
import add from '@/components/addmovie'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
