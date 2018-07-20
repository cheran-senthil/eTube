import * as https from 'https'

function downloadJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      var data = ''

      response.on('data', (chunk) => { data += chunk })
      response.on('end', () => { resolve(JSON.parse(data)) })
      response.on('error', reject)
    })
  })
}

export function channelRequest(id, key, maxResults) {
  maxResults = maxResults || 50
  let url = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${id}&part=snippet,id&order=date&maxResults=${maxResults}`
  return downloadJSON(url)
}

export function getVideoInfo(id, key) {
  let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&type=video&id=${id}&key=${key}`
  return downloadJSON(url)
}
