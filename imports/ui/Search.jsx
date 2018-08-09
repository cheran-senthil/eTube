import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import { videoData } from '/imports/api/videoData'
import VideoInfo from './VideoInfo'

class Search extends Component {
  render () {
    const items = this.props.videos.map((video) => (
      <li id={video.id}><VideoInfo info={video} /></li>
    ))
    return <ul>{items}</ul>
  }
}

export default withTracker(props => {
  console.log(props)
  Meteor.subscribe('videoSearch', props.query)
  return {
    videos: videoData.find({}).fetch()
  }
})(Search)
