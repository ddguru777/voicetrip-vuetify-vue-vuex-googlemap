import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Explore from '@/components/Explore'
import Commute from '@/components/Commute'
import ForYou from '@/components/ForYou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/commute',
      name: 'Commute',
      component: Commute
    },
    {
      path: '/for_you',
      name: 'ForYou',
      component: ForYou
    }
  ]
})
