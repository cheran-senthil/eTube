import { HTTP } from 'meteor/http'

export function channelRequest (id, key, maxResults) {
  maxResults = maxResults || 50
  let url = 'https://www.googleapis.com/youtube/v3/search'
  let query = `?key=${key}&channelId=${id}&part=snippet,id&order=date&maxResults=${maxResults}`
  return JSON.parse(HTTP.get(url + query).content).items
}

export function getVideoInfo (id, key) {
  let url = 'https://www.googleapis.com/youtube/v3/videos'
  let query = `?part=snippet&type=video&id=${id}&key=${key}`
  return JSON.parse(HTTP.get(url + query).content).items
}
