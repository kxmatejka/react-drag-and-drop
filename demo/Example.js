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

  handleChangeFile(files) {
    this.setState({
      files: files
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
        <DragAndDrop label={"Drop files here"}
                     handler={this.handleChangeFile}
                     className={"dropzone"}/>
        <output>
          <ul>
            {fileList}
          </ul>
        </output>
      </div>
    )
  }
}
