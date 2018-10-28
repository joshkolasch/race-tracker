import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import React, { Component } from 'react'
import { connect } from 'react-redux';

class CustomTable extends Component {

  mapRunnersToData = (runners, numRunners) => {
    let result = []
  
    for(let i = 1; i <= numRunners; i += 1) {
      
      let item = {
        runnerNumber: i,
        split: runners[i] ? runners[i].split : ''
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
        <BootstrapTable data={splitData ? splitData: null} bordered={true}>
          <TableHeaderColumn isKey dataField='runnerNumber'>Runner #</TableHeaderColumn>
          <TableHeaderColumn dataField='split'>Split</TableHeaderColumn>
          <TableHeaderColumn>Edit/Split</TableHeaderColumn>
        </BootstrapTable>
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

export default connect(mapStateToProps)(CustomTable)