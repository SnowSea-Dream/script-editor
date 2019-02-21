import React, { Component } from 'react'
import Editor from './Editor'

import './App.scss'

class App extends Component {
  render () {
    return (
      <div className='p-3'>
        <Editor />
      </div>
    )
  }
}

export default App
