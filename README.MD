React drag and drop
===================

# Overview

Simple react drop zone component.

![demo.gif](https://raw.githubusercontent.com/kxmatejka/react-drag-and-drop/master/demo/demo.gif)

# Demo or develop

```sh
git clone https://github.com/kxmatejka/react-drag-and-drop
npm install
npm run start
```

and visit [localhost:3000/demo/](http://localhost:3000/demo/)

# Example

```jsx
<DragAndDrop
    label={"Drop files here"}
    handler={this.handleChangeFile}
    className={"dropzone"}
/>
```

# API

* label (string): Text on drop zone
* handler (function): Callback called when files are dropped
* style (object): Optional inline css styles
* className (string): Optional class name

# Next goals

* Tests
* Support of standard browser file selection
* Support of specific formats
* Support for enabling/disabling multiple selection
* Enable write custom components into dropzone
* Add special css classes to each event e.g. onDragOver, onDrop