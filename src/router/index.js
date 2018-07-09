import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ListBook from '@/components/ListBook'
import Page1 from '@/components/Page1'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/listbook',
      name: 'ListBook',
      component: ListBook
    },
    {
        path: '/page1',
        name: 'Page1',
        component: Page1
    }
  ]
})
