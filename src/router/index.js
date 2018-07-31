import Vue from 'vue'
import Router from 'vue-router'
import appjump from '@/components/appjump.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appjump',
      component: appjump
    }
  ]
})
