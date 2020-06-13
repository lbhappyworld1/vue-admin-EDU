/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'
const courseRouter = {
  path: '/teacher',
  component: Layout,
  redirect: '/teacher/teacher-list',
  name: 'teacher',
  meta: {
    title: '老师管理',
    icon: 'peoples'
  },
  children: [
    {
      path: 'teacher-list',
      component: () => import('@/views/teacher/index'),
      name: 'TeacherList',
      meta: { title: '老师管理' }
    }
  ]
}
export default courseRouter
