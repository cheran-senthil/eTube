import { Meteor } from 'meteor/meteor';
import { video_data } from '../lib/collections.js';
import { channelRequest, videoRequest } from '../lib/youtube-api'

function loadMongo() {
  video_data.remove({})

  let key = ''
  var channels = 'UCHnyfMqiRRG1u-2MsSQLbXA' // Veritasium

  channelRequest(channels, key, 2).then((videos) => {
    videos.items.forEach(video => {
      videoRequest(video.id.videoId, key).then((data) => {
        delete data.items[0].snippet.localized
        video_data.insert(data.items[0])
      })
    })
  })
}


Meteor.startup(() => {
  loadMongo()
})
