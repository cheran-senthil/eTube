import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import Video from './Video.js';
import { videoData } from '../../lib/collections.js'

class App extends Component {
  renderVideos() {
    return this.props.videos.map((video) => (
      <Video video={video} />
    ));
  }

  render() {
    return (
      <div className="container">
        <ul>
          {this.renderVideos()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    videos: videoData.find({}).fetch(),
  };
})(App);
