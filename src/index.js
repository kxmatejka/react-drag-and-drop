import React, { Component } from 'react';

export default class DragAndDrop extends Component {
  constructor (props) {
    super(props)

    this.state = {
      files: []
    }
  }

  componentDidMount () {
    this.dropZone.addEventListener('dragover', this.handleDragOver.bind(this))
    this.dropZone.addEventListener('drop', this.handleDrop.bind(this))
  }

  componentWillUnmount () {
    this.dropZone.removeAllListeners()
  }

  handleDragOver (event) {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  }

  handleDrop (event) {
    event.preventDefault()
    const files = event.dataTransfer.files
    this.setState({
      files: files
    })
  }

  render () {
    const fileList = [...this.state.files].map((file, index) => {
      return (<li key={index}>{file.name}</li>)
    })

    return (
      <fieldset>
        <div ref={dropZone => {this.dropZone = dropZone}} style={{height: '100px', background: 'blue'}}>
          Drop files here
        </div>
        <output>
          <ul>
            {fileList}
          </ul>
        </output>
      </fieldset>
    )
  }
}
