import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ListBook from '@/components/ListBook'
import BookMarkList from '@/components/BookMarkList'



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
        path: '/BookMarkList',
        name: 'BookMarkList',
        component: BookMarkList
    }
  ]
})
