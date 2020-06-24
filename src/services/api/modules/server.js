import Network from '../network.js'

export default {
  getDB(request) {
    return new Promise((resolve, reject) => {
      Network.get('db.json', request)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getDate(request) {
    return new Promise((resolve, reject) => {
      Network.get('date.json', request)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
