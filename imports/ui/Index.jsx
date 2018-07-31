import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import { videoData } from '/imports/api/videoData'
import VideoInfo from './VideoInfo'

class Index extends Component {
  render () {
    const items = this.props.videos.map((video) => (
      <li id={video.id}><VideoInfo info={video} /></li>
    ))
    return <ul>{items}</ul>
  }
}

export default withTracker(() => {
  Meteor.subscribe('videoData')
  return {
    videos: videoData.find({}).fetch()
  }
})(Index)
