import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { videoData } from '/lib/collections'
import VideoInfo from './VideoInfo'

class Index extends Component {
  render() {
    return this.props.videos.map((video) => (
      <ul>
        <VideoInfo info={video} />
      </ul>
    ))
  }
}

export default withTracker(() => {
  return {
    videos: videoData.find({}).fetch(),
  };
})(Index);
