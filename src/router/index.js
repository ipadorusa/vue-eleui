import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ListBook from '@/components/ListBook'
import BookMarkList from '@/components/BookMarkList'
import StudyState from '@/components/StudyState'
import VuestudyList from '@/components/VuestudyList'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/listbook',
      name: 'ListBook',
      component: ListBook
    },
    {
        path: '/bookmarklist',
        name: 'BookMarkList',
        component: BookMarkList
    },
    {
        path: '/vuestudylist',
        name: 'VuestudyList',
        component: VuestudyList,
        children: [
          {
              path: '/studystate',
              name: 'StudyState',
              component: StudyState
          }
        ]
    }
  ]
})
