import { Meteor } from 'meteor/meteor';
import { video_data } from '../lib/collections.js';
import { channelRequest } from '../lib/youtube-api'

function loadMongo() {
  video_data.remove({})

  let key = ''
  var channels = 'UCHnyfMqiRRG1u-2MsSQLbXA' // Veritasium

  channelRequest(channels, key).then(videos => {
    videos.items.forEach(video => {
      video_data.insert(video.snippet)
    })
  })
}

Meteor.startup(() => {
  loadMongo()
})
