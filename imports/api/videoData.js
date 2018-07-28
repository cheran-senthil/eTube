import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

export const videoData = new Mongo.Collection('video_data')

if (Meteor.isServer) {
  Meteor.publish('videoData', () => {
    return videoData.find({})
  })
}
