import React, { Component } from 'react'
import { connect } from 'react-redux'
import Split from './Split'


class SplitTable extends Component {
  render() {
    let runners = this.props.runners
    let numRunners = this.props.numRunners

    return (
      <div >
        <div style={{textAlign:'center'}}>
          SplitTable
        </div>
        
        <div style={{decoration:'none'}}>
          {
            !runners
            ? null
            : mapRunners(runners, numRunners)
          }
        </div>
        
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

function mapRunners(runners, numRunners) {
  console.log('inside mapRunners')
  let result = [];

  for(let i = 1; i <= numRunners; i += 1) {
    if(i in runners){
      result.push(<Split key={i} runnerID={i} split={runners[i].split}/>)
    }
    else {
      result.push(<Split key={i} runnerID={i}/>)
    }
  }
  /*Object.keys(runners).forEach((key) => {
    result.push(<Split key={key} runnerID={key} split={runners[key].split}/>)
  })*/
  return result;
}

export default connect(mapStateToProps)(SplitTable)