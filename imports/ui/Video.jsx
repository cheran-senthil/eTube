import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

const Video = (params) => {
  console.log(params)
  var id = params.id
  return (
    <div className="videoContainer">
      <iframe src={'https://www.youtube.com/embed/'+id} frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

export default Video
