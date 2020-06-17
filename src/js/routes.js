import init from '../pages/init.vue'
import login from '../pages/login.vue'
import policy from '../pages/policy.vue'
import workspace from '../pages/workspace.vue'

let routes = [
  {
    path: '/',
    component: init,
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/policy',
    component: policy,
  },
  {
    path: '/workspace',
    component: workspace,
  },
]

export default routes
