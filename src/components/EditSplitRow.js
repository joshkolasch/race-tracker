import React, { Component } from 'react'
import { TextField, TableRow, TableCell, Button } from '@material-ui/core'



class EditSplitRow extends Component {
  constructor(props){
    super(props)
    this.state = {
      split: props.runner.split
    }
  }

  onSave = (e) => {
    e.preventDefault()

    const { i, runner } = this.props

    const newRunner = {
      runnerNumber: runner.runnerNumber,
      split: this.state.split
    }
    //console.log('new runner is', newRunner)

    this.props.handleSave(newRunner)
  }

  onChange = (e) => {
    const { name, value } = e.target
    this.setState((state) => ({
      ...state,
      [name]: value
    }))
  }

  //TODO: verify that the split they put in is valid
  validateSplit = (split) => {

  }


  render() {
    const { runner, i, startTime, handleSave, stopEditing } = this.props
    //console.log('runner in editSplitRow', runner)
    return (
      <TableRow>
        <TableCell>{runner.runnerNumber}</TableCell>
        <TableCell>
          <TextField
            name={'split'}
            onChange={this.onChange}
            value={this.state.split}>
          </TextField>
        </TableCell>
        <TableCell>
          <Button variant='contained' color='primary' onClick={this.onSave} style={{marginRight:'10px'}}>Save</Button>
          <Button variant='contained' color='secondary' onClick={this.props.stopEditing}>Cancel</Button>
        </TableCell>
      </TableRow>
    )
  }
}

export default EditSplitRow