import React, { Component } from 'react';

export default class Video extends Component {
  render() {
    return (
      <li>
        <a href={'https://youtube.com/embed/'+this.props.video.id}>{this.props.video.title}</a>
      </li>
    );
  }
}

