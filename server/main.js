import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { channelRequest, videoRequest } from './youtube-api'

function loadMongo() {
  const videoDB = new Mongo.Collection('videodb')
  videoDB.remove({})

  let key = ''
  var channels = 'UCHnyfMqiRRG1u-2MsSQLbXA' // Veritasium

  channelRequest(channels, key, 100).then((videos) => {
    videos.items.forEach((video) => {
      var videoId = video.id.videoId
      videoRequest(videoId, key).then((data) => {
        videoDB.insert(data.items[0])
      })
    })
  })
}


Meteor.startup(() => {
  loadMongo()
})
