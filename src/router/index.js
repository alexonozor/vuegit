import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/Profile'
import Repository from '@/components/Repository'
import Follower from '@/components/Follower'
import Following from '@/components/Following'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/profile/:login',
      name: 'profile',
      component: Profile,
      children: [
        {
          path: 'repository',
          component: Repository
        },
        {
          path: 'followers',
          component: Follower
        },
        {
          path: 'following',
          component: Following
        }
      ]
    }
  ]
})
