// import { createClient } from '@/plugins/contentful.js'

// const { google } = require('googleapis')

// export const state = () => ({
//   videos: [],
// })

// export const mutations = {
//   setVideos(state, videos) {
//     state.videos = videos
//   },
// }

// export const actions = {
//   async fetchVideos({ commit }) {
//     const client = createClient()

//     const { items: videos } = await client.getEntries({
//       content_type: 'video',
//     })

//     commit('setVideos', videos)
//   },

//   async fetchYoutubeVideos({ commit, dispatch, state }) {
//     await dispatch('fetchVideos')

//     const ids = state.videos.reduce((acc, video) => {
//       const { url } = video.fields

//       const matches = url.match(/youtu\.be\/(.*)\/?$/)

//       acc.push(matches[1])
//       return acc
//     }, [])

//     const youtube = google.youtube({
//       version: 'v3',
//       auth: process.env,
//     })

//     const videos = await youtube.videos.list({
//       id: ids,
//     })

//     console.log(videos)
//   },
// }
