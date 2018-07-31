import React, { Component } from 'react'

export default class Results extends Component {
  render () {
    return (
      <li>{this.props.result.title}</li>
    )
  }
}
