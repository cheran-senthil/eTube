import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'

import { videoData } from '/imports/api/videoData'

class Video extends Component {
  render () {
    var id = this.props.id
    if (this.props.info) {
      var description = this.props.info.description
      return (
        <div className='container'>
          <div className='videoContainer'>
            <iframe src={'https://www.youtube.com/embed/' + id + '?rel=0'} frameBorder='0' allowFullScreen></iframe>
          </div>
          <p className='description'>{description}</p>
        </div>
      )
    }
    return (<div></div>)
  }
}

export default withTracker(props => {
  Meteor.subscribe('videoInfo', props.id)
  return { info: videoData.findOne({id: props.id}) }
})(Video)
