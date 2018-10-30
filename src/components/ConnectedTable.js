import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { handleAddSplit } from '../actions/checkpoint'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


class ConnectedTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runnerData: this.mapRunnersToData(this.props.runners, this.props.numRunners),
      editing: false,
      editingIndex: -1
    }
  }

  mapRunnersToData = (runners, numRunners) => {
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

  generateEditButton = (cb) => {
    return <Button variant='contained' color='primary' onClick={cb}>Edit</Button>
  }

  generateAddSplitButton = (cb) => {
    return <Button variant='contained' color='secondary' onClick={cb}>Add Split</Button>
  }

  generateTableRow = (runner, rowIndex, editCallback, addCallback) => {
    return (
      <TableRow key={runner.runnerNumber}>
        <TableCell>{runner.runnerNumber}</TableCell>
        <TableCell>{runner.split ? runner.split : ''}</TableCell>
        <TableCell>{runner.split ? this.generateEditButton(editCallback) : this.generateAddSplitButton(addCallback)}</TableCell>
      </TableRow>
    )
  }

  editCallback = (item, rowIndex) => {
    //return () => (alert(item.split))
    return () => {
      alert(`${rowIndex} ${item.split}`)
    }
  }

  addCallback = (item, rowIndex, checkpointID) => {
    //return () => (alert(`${item.runnerNumber} ${rowIndex}`))

    return () => { 
      this.props.dispatch(handleAddSplit(item, checkpointID))
      //console.log('inside add callback', this.props)
      this.setState( state => ({
        ...state,
        runnerData: this.mapRunnersToData(this.props.runners, this.props.numRunners)
      }))
    }
  }
  
  render() {
    //console.log('props in connectedTable', this.props)
    const { runners, numRunners, checkpointID } = this.props
    const { runnerData } = this.state

    //let runnerData = this.mapRunnersToData(runners, numRunners)
    //console.log('splitData', this.state.splitData)
    return (
      <div>
        <Paper className={this.props.classes.root}>
          <Table className={this.props.classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Runner #</TableCell>
                <TableCell>Split</TableCell>
                <TableCell>Edit/Add Split</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                runnerData.map((runner, rowIndex) => this.generateTableRow(runner, rowIndex, this.editCallback(runner, rowIndex, checkpointID), this.addCallback(runner, rowIndex, checkpointID) ))
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

function mapStateToProps({event, checkpoint}) {
  const { eventID, startTime, numRunners } = event
  const { checkpointID, runners } = checkpoint
  
  return {
    eventID,
    numRunners,
    startTime,
    checkpointID,
    runners: runners
  }
}

const styledComponent = withStyles(styles)(ConnectedTable)
export default connect(mapStateToProps)(styledComponent)