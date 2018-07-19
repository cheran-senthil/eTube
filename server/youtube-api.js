var https = require('https')
var fs = require('fs')

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

function channelRequest(id, key, maxResults) {
  maxResults = maxResults || 20
  let url = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${id}&part=snippet,id&order=date&maxResults=${maxResults}`
  return downloadJSON(url)
}

function videoRequest(id, key) {
  let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&type=video&id=${id}&key=${key}`
  return downloadJSON(url)
}

module.exports = {channelRequest: channelRequest, videoRequest: videoRequest}
