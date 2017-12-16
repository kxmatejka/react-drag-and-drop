import React, { Component } from 'react';
import DragAndDrop from '../src/';

export default class Example extends Component {
  constructor (props) {
    super(props)
    /*this.state = {
      files: []
    }

    this.handleChangeFile = this.handleChangeFile.bind(this)*/
  }

  /*handleChangeFile (event) {
    this.setState({
      files: event.target.files
    })
  }*/

  render () {
    return (
      <div>
        <h1>React drag and drop</h1>
        <DragAndDrop />
      </div>
    )
  }
}
