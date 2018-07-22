import { Meteor } from 'meteor/meteor'
import { channelRequest, getVideoInfo } from '../lib/youtube-api'
import { videoData } from '../lib/collections'

function loadMongo() {
  videoData.remove({})

  let key = ''
  var channels = 'UCHnyfMqiRRG1u-2MsSQLbXA' // Veritasium

  var videos, video
  for (let id of channelRequest(channels, key).map(x => x.id.videoId)) {
    video = getVideoInfo(id, key)[0]
    delete video.snippet.localized
    delete video.kind
    delete video.etag
    videoData.insert(video)
  }
}

Meteor.startup(() => {
  loadMongo()
})
