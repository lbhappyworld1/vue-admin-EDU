/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'
const courseRouter = {
  path: '/broadcast',
  component: Layout,
  redirect: '/broadcast/broadcast-list',
  name: 'broadcast',
  meta: {
    title: '直播管理',
    icon: 'eye-open'
  },
  children: [
    {
      path: 'broadcast-list',
      component: () => import('@/views/broadcast/index'),
      name: 'BroadcastList',
      meta: { title: '直播管理' }
    }
  ]
}
export default courseRouter
