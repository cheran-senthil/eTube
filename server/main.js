import { Meteor } from 'meteor/meteor'
import { Neo4jDB } from 'meteor/ostrio:neo4jdriver';
import { _ } from 'meteor/underscore'

import { channelRequest, getVideoInfo } from '../lib/youtube-api'
import { videoData } from '../lib/collections'

function loadMongo(key, channels) {
  videoData.remove({})

  var videos, video
  for (let id of channelRequest(channels, key, 10).map(x => x.id.videoId)) {
    video = getVideoInfo(id, key)[0].snippet
    video.id = id
    delete video.localized
    videoData.insert(video)
  }
}

function loadNeo4j(host, user, pass) {
  let db = new Neo4jDB(host, { username: user, password: pass });
  db.nodes().delete()

  var nodes = []
  for (let video of videoData.find({}).fetch()) {
    nodes.push(db.nodes({ video_id: video.id }).label(['Video']))
  }

  var video1, video2, commonTags, commonDesc, commonTitle, sameChannel
  for (let node1 of nodes) {
    video1 = videoData.find({id: node1.property('video_id')}).fetch()[0]
    for (let node2 of nodes) {
      if (node1 == node2) { break }
      video2 = videoData.find({id: node1.property('video_id')}).fetch()[0]

      commonTags = _.intersection(video1.tags, video2.tags).length

      commonDesc = _.intersection(video1.description.split(' '),
        video2.description.split(' ')).length

      commonTitle = _.intersection(video1.title.split(' '),
        video2.title.split(' ')).length

      sameChannel = (video1.channelId == video2.channelId)

      weight = commonTags + commonTitle + commonDesc + sameChannel

      node1.to(node2, "link", { weight: weight })
      node1.from(node2, "link", { weight: weight })
    }
  }
}

Meteor.startup(() => {
  let key = ''
  var channels = 'UCHnyfMqiRRG1u-2MsSQLbXA' // Veritasium

  loadMongo(key, channels)
  loadNeo4j('http://localhost:7474', 'neo4j', 'neo4j')
})
