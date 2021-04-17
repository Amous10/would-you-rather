import {
  _getUsers,
  
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
    users,
  }))
}

// export function saveLikeToggle (info) {
//   return _saveLikeToggle(info)
// }

// export function saveTweet (info) {
//   return _saveTweet(info)
// }