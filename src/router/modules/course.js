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
      path: 'export-excel',
      component: () => import('@/views/excel/export-excel'),
      name: 'ExportExcel',
      meta: { title: '课程列表' }
    },
    {
      path: 'export-excel',
      component: () => import('@/views/excel/export-excel'),
      name: 'ExportExcel',
      meta: { title: '查看课程' }
    },
    {
      path: 'export-selected-excel',
      component: () => import('@/views/excel/select-excel'),
      name: 'SelectExcel',
      meta: { title: '创建课程' }
    }
  ]
}
export default courseRouter
