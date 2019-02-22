import React from 'react'
import { Editor, EditorState, Modifier, SelectionState } from 'draft-js'

import './styles.scss'

export default class MyEditor extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  componentDidMount () {
    this.words2EditorState(this.props.words)
  }

  words2EditorState (words) {
    let editorState = EditorState.createEmpty()
    let contentState = editorState.getCurrentContent()
    words.forEach(word => {
      contentState = contentState.createEntity('WORD', 'MUTABLE', word)
      const entityKey = contentState.getLastCreatedEntityKey()
      const selectionState = editorState.getSelection()
      contentState = Modifier.insertText(
        contentState,
        selectionState,
        word.word,
        null,
        entityKey
      )

      editorState = EditorState.push(
        editorState,
        contentState,
        'insert-fragment'
      )
    })

    this.setState({ editorState })
  }

  editorState2Words = () => {
    const { editorState } = this.state
    const contentState = editorState.getCurrentContent()
    let entities = []

    contentState.getBlockMap().forEach(block => {
      block.findEntityRanges(
        character => {
          return true
        },
        (start, end) => {
          const entityKey = block.getEntityAt(start)
          entities.push({
            start: start,
            end: end,
            editedString: block.getText().slice(start, end),
            data: entityKey
              ? contentState.getEntity(entityKey).getData()
              : undefined
          })
        }
      )
    })

    // TODO: Need to refine.
    console.log(entities)
  }

  onChange = editorState => {
    const contentState = editorState.getCurrentContent()
    this.setState({ editorState })
  }

  render () {
    const { editorState } = this.state
    return (
      <>
        <button className='mb-2' onClick={this.editorState2Words}>
          Export
        </button>
        <div className='se-editor'>
          <Editor editorState={editorState} onChange={this.onChange} />
        </div>
      </>
    )
  }
}
