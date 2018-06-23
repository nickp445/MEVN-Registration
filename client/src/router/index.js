import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Reg',
      component: Register
    },
    {
    	path:'/users',
    	name: 'Users',
    	component: Users
    }
  ]
})
