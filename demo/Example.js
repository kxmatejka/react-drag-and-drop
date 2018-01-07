import React, {Component} from 'react'
import DragAndDrop from '../src/'

export default class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
    }

    this.handleChangeFile = this.handleChangeFile.bind(this)
  }

  handleChangeFile(event) {
    this.setState({
      files: event.dataTransfer.files
    })
  }

  renderFileDetail(file, key) {
    return (
      <li key={key}>
        <strong>{file.name}</strong> ({file.type}, {file.size}B)
      </li>
    )
  }

  render() {
    const fileList = [...this.state.files].map((file, key) => {
      return this.renderFileDetail(file, key)
    })

    return (
      <div>
        <div id={"header"}>
          <h1>React drag and drop</h1>
        </div>

        <DragAndDrop className={"dropzone"} handler={this.handleChangeFile}>
          <div className={"label"}>Drop files here</div>
        </DragAndDrop>

        <output>
          <ul>
            {fileList}
          </ul>
        </output>
      </div>
    )
  }
}
