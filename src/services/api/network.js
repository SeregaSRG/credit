import axios from 'axios'
import eventBus from '../../services/eventBus'
let querystring = require('querystring')

const HTTP = axios.create({
  baseURL: 'https://zaimiukrain.com/',
  headers: {
    'Content-Type': 'application/json',
  }
})

HTTP.interceptors.response.use((response) => {
  return response
}, function (error) {
  // Do something with response error
  eventBus.$emit('internet-connection-error')
  return Promise.reject(error)
})

export default {
  post (url, body) {
    return HTTP.post(url, querystring.stringify(body))
  },
  get (url, body) {
    return HTTP.get(url, {
      params: body
    })
  },
  put (url, body) {
    return HTTP.put(url, querystring.stringify(body))
  },
  delete (url, body) {
    return HTTP.delete(url, { data: querystring.stringify(body) })
  }
}
