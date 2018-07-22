import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Find from '@/components/Find'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/User',
      name: 'User',
      component: User
    }
  ],
  mode: 'hash'
})
