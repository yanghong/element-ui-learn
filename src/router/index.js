import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import fade from '@/views/fade'
import layout from '@/views/layout'
import container from '@/views/container'
import button from '@/views/button'
import cards from '@/views/cards'
import table from '@/views/table'
import expandGoods1 from '@/views/expandGoods1'
import BUTTONchange from '@/views/BUTTONchange'

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
    },
    {
      path: '/container',
      name: 'container',
      component: container
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/cards',
      name: 'cards',
      component: cards
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/expandGoods1',
      name: 'expandGoods1',
      component: expandGoods1
    },
    {
      path: '/BUTTONchange',
      name: 'BUTTONchange',
      component: BUTTONchange
    }
  ]
})
