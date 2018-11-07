import React, { Component } from 'react'
import { connect } from 'react-redux'
import SplitTable from './SplitTable'
import { handleAddSplit, handleEditSplit } from '../actions/checkpoint'

const HEADERS = [
  {
    name: 'Runner #',
    prop: 'runnerNumber'
  },
  {
    name: 'Split',
    prop: 'split'
  }
]

class Runners extends Component {
  state = {
    editIndex: -1,
  }

  startEditing = (i) => {
    this.setState({
      editIndex: i
    })
  }

  //NOTE: is this necessary? couldn't I call dispatch from the button? 
  stopEditing = () => {
    this.setState({
      editIndex: -1
    })
  }

  handleSave = (runner) => {
    //TODO: dispatch action here
    this.props.dispatch(handleEditSplit(runner))
    this.stopEditing()
  }

  handleAdd = (runner) => {
    this.props.dispatch(handleAddSplit(runner))
  }

  render() {
    const { runners, numRunners, startTime, checkpointID } = this.props
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Checkpoint # {checkpointID}</h1>
        <SplitTable 
          headers={HEADERS} 
          editIndex={this.state.editIndex} 
          runners={runners} 
          numRunners={numRunners} 
          startTime={startTime}
          handleSave={this.handleSave}
          handleAdd={this.handleAdd}
          startEditing={this.startEditing}
          stopEditing={this.stopEditing}
          />
      </div>
    )
  }
}

function mapStateToProps({event, checkpoint}){
  return {
    runners: mapRunnersToData(checkpoint.runners, event.numRunners),
    numRunners: event.numRunners,
    startTime: event.startTime,
    checkpointID: checkpoint.checkpointID
  }
}

function mapRunnersToData (runners, numRunners) {
  let result = []
  for(let i = 1; i <= numRunners; i += 1) {
    let split;
    if(runners[i]){
      split = runners[i].split
    }

    let item = {
      runnerNumber: i,
      split: split ? split : ''
    }
    result.push(item)
  }
  return result
}

export default connect(mapStateToProps)(Runners)