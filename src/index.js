import React, {Component} from 'react'

export default class DragAndDrop extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.dropZone.addEventListener('dragover', this.handleDragOver.bind(this))
    this.dropZone.addEventListener('drop', this.handleDrop.bind(this))
  }

  componentWillUnmount() {
    this.dropZone.removeAllListeners()
  }

  handleDragOver(event) {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  }

  handleDrop(event) {
    event.preventDefault()
    this.props.handler(event.dataTransfer.files)
  }

  render() {
    const {
      label,
      style,
      className
    } = this.props

    return (
      <div ref={dropZone => {
        this.dropZone = dropZone
      }}
           style={style} className={className}>
        <label>{label}</label>
      </div>
    )
  }
}
