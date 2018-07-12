import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ListBook from '@/components/ListBook'
import BookMarkList from '@/components/BookMarkList'
import VuestudyList from '@/components/VuestudyList'
import StudyState01 from '@/study/StudyState01'
import StudyState02 from '@/study/StudyState02'
import StudyState03 from '@/study/StudyState03'
import StudyState04 from '@/study/StudyState04'
import StudyState05 from '@/study/StudyState05'
import StudyState06 from '@/study/StudyState06'
import StudyState07 from '@/study/StudyState07'



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
        path: '/studystate03',
        name: 'StudyState03',
        component: StudyState03
    },
    {
        path: '/studystate04',
        name: 'StudyState04',
        component: StudyState04
    },
    {
        path: '/studystate05',
        name: 'StudyState05',
        component: StudyState05
    },
    {
      path: '/studystate06',
      name: 'StudyState06',
      component: StudyState06
    },
    {
      path: '/studystate07',
      name: 'StudyState07',
      component: StudyState07
    },
    {
        path: '/vuestudylist',
        name: 'VuestudyList'
    }
  ]
})
