import React, {Component} from 'react'

export default class DragAndDrop extends Component {
  constructor(props) {
    super(props)

    this.handleDragOver = this.handleDragOver.bind(this)
    this.handleDrop = this.handleDrop.bind(this)
  }

  componentDidMount() {
    document.addEventListener('dragover', this.handleDragOver)
    document.addEventListener('drop', this.handleDrop)
  }

  componentWillUnmount() {
    document.removeEventListener('dragover', this.handleDragOver)
    document.removeEventListener('drop', this.handleDrop)
  }

  handleDragOver(event) {
    event.preventDefault()
    const isOverDropZone = this.dropZone.contains(event.target)
    if (isOverDropZone) {
      event.dataTransfer.dropEffect = 'copy'
      this.dropZone.classList.add('drag-over')
    } else {
      this.dropZone.classList.remove('drag-over')
    }
  }

  handleDrop(event) {
    event.preventDefault()
    const isOverDropZone = this.dropZone.contains(event.target)
    if (isOverDropZone) {
      this.props.handler(event)
    }
    this.dropZone.classList.remove('drag-over')
  }

  render() {
    const {
      style,
      className,
      children
    } = this.props

    return (
      <div ref={dropZone => { this.dropZone = dropZone }} style={style} className={className}>
        { children }
      </div>
    )
  }
}
