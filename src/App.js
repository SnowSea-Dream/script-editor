import React, { Component } from 'react'
import Editor from './Editor'

import './App.scss'

const data = {
  words: [
    {
      word: 'My',
      startTime: 0.7,
      endTime: 1.1
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    },
    {
      word: 'name',
      startTime: 1.1,
      endTime: 1.4
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    },
    {
      word: 'is',
      startTime: 1.4,
      endTime: 1.8
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    },
    {
      word: 'Joe',
      startTime: 1.8,
      endTime: 2
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    },
    {
      word: 'Smith',
      startTime: 2,
      endTime: 2.3
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    },
    {
      word: 'and',
      startTime: 2.3,
      endTime: 2.7
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    },
    {
      word: 'now',
      startTime: 2.7,
      endTime: 2.8
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    },
    {
      word: 'is',
      startTime: 2.8,
      endTime: 3.1
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    },
    {
      word: 'the',
      startTime: 3.1,
      endTime: 3.2
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    },
    {
      word: 'the',
      startTime: 3.2,
      endTime: 3.4
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    },
    {
      word: 'time',
      startTime: 3.4,
      endTime: 4
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    },
    {
      word: 'to',
      startTime: 4,
      endTime: 4.2
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    },
    {
      word: 'consider.',
      startTime: 4.2,
      endTime: 4.6
    },
    {
      word: ' ',
      startTime: null,
      endTime: null
    }
  ]
}
class App extends Component {
  render () {
    return (
      <div className='p-3'>
        <Editor words={data.words} />
      </div>
    )
  }
}

export default App
