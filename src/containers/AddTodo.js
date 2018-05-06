import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TextField from 'material-ui/TextField';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        input = e.target.input
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        
        <TextField hintText="Add a to-do" name="input" fullWidth={true}/>
        
      </form>
    </div>
  )
}

export default connect()(AddTodo)
