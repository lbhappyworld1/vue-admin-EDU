/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'
const courseRouter = {
  path: '/broadcast-point',
  component: Layout,
  redirect: '/broadcast/broadcast-point',
  name: 'broadcast',
  meta: {
    title: '点播管理',
    icon: 'table'
  },
  children: [
    {
      path: 'broadcast-point',
      component: () => import('@/views/broadcast/index-point'),
      name: 'BroadcastPoint',
      meta: { title: '点播管理' }
    }
  ]
}
export default courseRouter
