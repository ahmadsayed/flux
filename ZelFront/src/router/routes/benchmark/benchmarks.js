export default [
  {
    path: '/benchmark/benchmarks/getstatus',
    name: 'benchmark-benchmarks-getstatus',
    component: () => import('@/views/daemon/control/GetInfo.vue'),
    meta: {
      pageTitle: 'Get Status',
      breadcrumb: [
        {
          text: 'Benchmark',
        },
        {
          text: 'Benchmarks',
        },
        {
          text: 'Get Status',
          active: true,
        },
      ],
    },
  },
  {
    path: '/benchmark/benchmarks/restartbenchmarks',
    name: 'benchmark-benchmarks-restartbenchmarks',
    component: () => import('@/views/daemon/control/GetInfo.vue'),
    meta: {
      pageTitle: 'Restart Node Benchmarks',
      breadcrumb: [
        {
          text: 'Benchmark',
        },
        {
          text: 'Benchmarks',
        },
        {
          text: 'Restart Node Benchmarks',
          active: true,
        },
      ],
    },
  },
  {
    path: '/benchmark/benchmarks/signtransaction',
    name: 'benchmark-benchmarks-signtransaction',
    component: () => import('@/views/daemon/control/GetInfo.vue'),
    meta: {
      pageTitle: 'Sign FluxNode Transaction',
      breadcrumb: [
        {
          text: 'Benchmark',
        },
        {
          text: 'Benchmarks',
        },
        {
          text: 'Sign Transaction',
          active: true,
        },
      ],
    },
  },
]