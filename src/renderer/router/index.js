import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/components/layout/layout'),
      redirect: '/test',
      children: [
        {
          path: 'test',
          component: () => import('@/pages/test'),
          meta: {
            title: 'test',
            auth: true
          }
        }
      ]
    }
  ]
})
