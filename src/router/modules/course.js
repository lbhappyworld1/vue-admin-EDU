/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'
const courseRouter = {
  path: '/course',
  component: Layout,
  redirect: '/course/course-list',
  name: 'course',
  meta: {
    title: '课程管理',
    icon: 'education'
  },
  children: [
    {
      path: 'course-list',
      component: () => import('@/views/course/course-list'),
      name: 'course-list',
      meta: { title: '课程列表' }
    },
    {
      path: 'create',
      component: () => import('@/views/course/create'),
      name: 'CreateCourse',
      meta: { title: '创建课程' }
    },
    {
      path: 'chapter-create',
      component: () => import('@/views/course/chapter-create'),
      name: 'CreateCourse',
      meta: { title: '创建章节（混播课）' }
    },
    {
      path: 'chapter-create-spot',
      component: () => import('@/views/course/chapter-create-spot'),
      name: 'CreateCourse',
      meta: { title: '创建章节（点播课）' }
    },
    {
      path: 'chapter-create-online',
      component: () => import('@/views/course/chapter-create-online'),
      name: 'CreateCourse',
      meta: { title: '创建章节（直播课）' }
    }
  ]
}
export default courseRouter
