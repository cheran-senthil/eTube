import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

const Video = (params) => {
  var id = params.content.props.id
  return <iframe src={'https://www.youtube.com/embed/'+id}></iframe>
}

export default Video
