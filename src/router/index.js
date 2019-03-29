import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/Login.vue'
import Main from '@/views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/home/Home')
        },
        {
          path: '/myInfo',
          name: 'MyInfo',
          component: () => import('@/views/home/MyInfo')
        },
        {
          path: '/password',
          name: 'Password',
          component: () => import('@/views/home/Password')
        },
        {
          path: 'work-main',
          name: 'WorkMain',
          component: () => import('@/views/homework/WorkMain')
        },
        {
          path: 'notice-main',
          name: 'NoticeMain',
          component: () => import('@/views/notice/NoticeMain')
        },
        {
          path: 'resource-main',
          name: 'ResourceMain',
          component: () => import('@/views/resource/ResourceMain')
        },
        {
          path: 'student-main',
          name: 'StudentMain',
          component: () => import('@/views/student/StudentMain')
        }
      ]
    }
  ]
})
