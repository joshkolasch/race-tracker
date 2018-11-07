import React, { Component } from 'react'
import { Paper, Table, TableBody, TableHead, TableRow, TableCell, Button  } from '@material-ui/core'
import EditSplitRow from './EditSplitRow'


//TODO: make all of the other buttons un-selectable while 'currentlyEditing' is true
const row = (runner, i, headers, startTime, editIndex, handleSave, handleAdd, startEditing, stopEditing) => {
  const currentlyEditing = editIndex === i
  return(
    currentlyEditing
      ?
        <EditSplitRow 
          key={`tr-${i}`}
          runner={runner}
          i={i}
          startTime={startTime}
          handleSave={handleSave} 
          stopEditing={stopEditing} 
        />
      :
        runner.split 
          ? splitRow(runner, i, startEditing)
          : blankRow(runner, i, startTime, handleAdd)
          
  )
}

const blankRow = (runner, i, startTime, handleAdd) => {
  //console.log('runner in blank row', runner)
  return (
    <TableRow key={`tr-${i}`}>
      <TableCell>
        {runner.runnerNumber}
      </TableCell>
      <TableCell />
      <TableCell>
        {startTime
          ? addSplitButton(runner, handleAdd)
          : null
        }
      </TableCell>
    </TableRow>
  )
}

const splitRow = (runner, i, startEditing) => {
  return (
    <TableRow key={`tr-${i}`}>
      <TableCell>
        {runner.runnerNumber}
      </TableCell>
      <TableCell>
        {runner.split}
      </TableCell>
      <TableCell>
        {
          editSplitButton(i, startEditing)
        }
      </TableCell>

    </TableRow>
  )
}


const addSplitButton = (runner, addSplitCB) => {
  return <Button variant='contained' color='secondary' onClick={() => addSplitCB(runner)}>Add Split</Button>
}

const editSplitButton = (i, startEditingCB) => {
  return <Button variant='contained' color='primary' onClick={() => startEditingCB(i)}>Edit Split</Button>
}

class SplitTable extends Component {
  render() {
    const { headers, runners, startTime, editIndex, handleSave, handleAdd, startEditing, stopEditing } = this.props
    //console.log('all runners', runners)
    //console.log('runners in splittable', runners)
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((x, i) => (
                <TableCell key={`header-col-${i}`}>{x.name}</TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {runners.map((runner, i) => (
              row(
                runner, 
                i, 
                headers, 
                startTime, 
                editIndex,
                handleSave,
                handleAdd,
                startEditing,
                stopEditing
            )))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}




export default SplitTable