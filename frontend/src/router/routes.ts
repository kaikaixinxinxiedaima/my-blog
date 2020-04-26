import App from '../App'

export const routes = [
  {
    name: 'common',
    path: '/common',
    component: App,
    children: [
      {
        name: 'common:log',
        path: 'log',
        component: App,
        children: undefined,
        meta: {
          title: '更新日志',
        },
      },
    ],
  },
]
