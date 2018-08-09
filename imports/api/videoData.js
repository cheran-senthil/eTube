import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

export const videoData = new Mongo.Collection('video_data')

if (Meteor.isServer) {
  Meteor.publish('videoData', () => {
    return videoData.find({})
  })

  Meteor.publish('videoInfo', id => {
    return videoData.find({id: id})
  })

  Meteor.publish('videoSearch', query => {
    return videoData.find({ $text: { $search: query } })
  })
}
