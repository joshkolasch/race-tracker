import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';

class EditButton extends Component {
  render() {
    return (
      <button>
        Edit
      </button>
    )
  }
}

class SplitButton extends Component {
  render() {
    return (
      <button>
        Split
      </button>
    )
  }
}

class CustomTable extends Component {
  
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


  render() {
    let runners = this.props.runners
    let numRunners = this.props.numRunners
    let splitData = [];

    if(runners){
      splitData = this.mapRunnersToData(runners, numRunners);
    }

    console.log('runners eyyy', runners)
    return (
      <div>
        <BootstrapTable data={splitData ? splitData: null} cellEdit={{mode:'click', blurToSave: true}} striped>
          <TableHeaderColumn isKey dataField='runnerNumber'>Runner #</TableHeaderColumn>
          <TableHeaderColumn dataField='split' >Split</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}


function splitValidator(value) {
  const response = { 
    isValid: true,
    notification: {
      type: 'success',
      msg: '',
      title: ''
    }
  }
    return response;
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

export default connect(mapStateToProps)(CustomTable)

/*
References
https://code.tutsplus.com/tutorials/working-with-tables-in-react-part-two--cms-29683
http://allenfang.github.io/react-bootstrap-table/example.html#celledit

video reference
https://www.youtube.com/watch?v=WHqd12n2n7M
*/