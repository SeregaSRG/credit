import store from '../store'
import init from '../pages/init.vue'
import login from '../pages/login.vue'
import policy from '../pages/policy.vue'
import workspace from '../pages/workspace.vue'
import loanDetails from '../pages/loanDetails'
import cardDetails from '../pages/cardDetails'
import information from '../pages/information'

let routes = [
  {
    path: '/',
    async (routeTo, routeFrom, resolve, reject) {
      resolve({
        component: init
      })
      /*
      const hideInitAgreement = store.state.server.data.hasOwnProperty('hideInitAgreement') ? store.state.server.data.hideInitAgreement : null
      if (hideInitAgreement === '1' || store.state.server.policy) {
        const hide_order_offer = store.state.server.data.hasOwnProperty('app_config') ? store.state.server.data.app_config.hide_order_offer : null
        if (hide_order_offer === '1') {
          resolve({
            component: workspace
          })
        } else {
          resolve({
            component: login
          })
        }
      } else {
        resolve({
          component: init
        })
      }
       */
    }
  },
  {
    path: '/login',
    async (routeTo, routeFrom, resolve, reject) {
      resolve({
        component: login
      })
      /*
      const hide_order_offer = store.state.server.data.hasOwnProperty('app_config') ? store.state.server.data.app_config.hide_order_offer : null
      if (hide_order_offer === '1') {
        console.log('if', hide_order_offer)
        resolve({
          component: workspace
        })
      } else {
        console.log('else', hide_order_offer)
        resolve({
          component: login
        })
      }
       */
    }
  },
  {
    path: '/policy',
    component: policy,
  },
  {
    path: '/information',
    component: information,
  },
  {
    path: '/workspace',
    async (routeTo, routeFrom, resolve, reject) {
      resolve({
        component: workspace,
      })
    }
  },
  {
    path: '/loan-details',
    component: loanDetails
  },
  {
    path: '/card-details',
    component: cardDetails
  },
]

export default routes
