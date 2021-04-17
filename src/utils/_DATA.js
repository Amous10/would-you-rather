let users = {
  sarah_edo: {
    id: "sarah_edo",
    name: "Sarah Drasner",
    avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    tweets: ['8xf0y6ziyjabvozdd253nd', 'hbsc73kzqi75rg7v1e0i6a', '2mb6re13q842wu8n106bhk', '6h5ims9iks66d4m7kqizmv', '3sklxkf9yyfowrf0o1ftbb'],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
    tweets: ['5c9qojr2d1738zlx09afby', 'f4xzgapq7mu783k9t02ghx', 'nnvkjqoevs8t02lzcc0ky', '4pt0px8l0l9g6y69ylivti', 'fap8sdxppna8oabnxljzcv', 'leqp4lzfox7cqvsgdj0e7', '26p5pskqi88i58qmza2gid', 'xi3ca2jcfvpa0i3t4m7ag'],
  },
  dan_abramov: {
    id: "dan_abramov",
    name: "Dan Abramov",
    avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
    tweets: ['5w6k1n34dkp1x29cuzn2zn', 'czpa59mg577x1oo45cup0d', 'omdbjl68fxact38hk7ypy6', '3km0v4hf1ps92ajf4z2ytg', 'njv20mq7jsxa6bgsqc97', 'sfljgka8pfddbcer8nuxv', 'r0xu2v1qrxa6ygtvf2rkjw'],
  }
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

// export function _getTweets () {
//   return new Promise((res, rej) => {
//     setTimeout(() => res({...tweets}), 1000)
//   })
// }

// export function _saveLikeToggle ({ id, hasLiked, authedUser }) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       tweets = {
//         ...tweets,
//         [id]: {
//           ...tweets[id],
//           likes: hasLiked === true
//             ? tweets[id].likes.filter((uid) => uid !== authedUser)
//             : tweets[id].likes.concat([authedUser])
//         }
//       }

//       res()
//     }, 500)
//   })
// }

// function generateUID () {
//   return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
// }

// function formatTweet ({ author, text, replyingTo = null }) {
//   return {
//     author,
//     id: generateUID(),
//     likes: [],
//     replies: [],
//     text,
//     timestamp: Date.now(),
//     replyingTo,
//   }
// }

// export function _saveTweet ({ text, author, replyingTo }) {
//   return new Promise((res, rej) => {
//     const formattedTweet = formatTweet({
//       text,
//       author,
//       replyingTo
//     })

//     setTimeout(() => {
//       tweets = {
//         ...tweets,
//         [formattedTweet.id]: formattedTweet,
//       }

//       users = {
//         ...users,
//         [author]: {
//           ...users[author],
//           tweets: users[author].tweets.concat([formattedTweet.id])
//         }
//       }

//       res(formattedTweet)
//     }, 1000)
//   })
// }
