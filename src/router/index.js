import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ListBook from '@/components/ListBook'
import BookMarkList from '@/components/BookMarkList'
import VuestudyList from '@/components/VuestudyList'
import StudyState01 from '@/components/StudyState01'
import StudyState02 from '@/components/StudyState02'
import StudyState03 from '@/components/StudyState03'



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
      path: '/studystate01',
      name: 'StudyState01',
      component: StudyState01
    },
    {
    path: '/studystate02',
    name: 'StudyState02',
    component: StudyState02
    },
    {
        path: '/vuestudylist',
        name: 'VuestudyList',
        component: VuestudyList,
        children: [
          {
            path: '/vuestudylist',
            name: 'StudyState03',
            component: StudyState03
          }
        ]
    }
  ]
})
