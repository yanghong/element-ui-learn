import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import fade from '@/views/fade'
import layout from '@/views/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fade',
      name: 'fade',
      component: fade
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout
    }
  ]
})
