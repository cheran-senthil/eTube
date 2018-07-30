import React, { Component } from 'react'

export default class VideoInfo extends Component {
  render () {
    var thumbnail = this.props.info.thumbnails.default.url
    var title = this.props.info.title
    var link = '/video?id=' + this.props.info.id
    return <a href={link}><img src={thumbnail} />{title}</a>
  }
}
