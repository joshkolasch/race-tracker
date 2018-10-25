import React, { Component } from 'react';
import '../styles/App.css';
// For debugging api's

import { getEvent, getCheckpoint } from '../utils/api';
import { getUTCTime, callConvertTimeToSplit, isValidSplit, formatSplit } from '../utils/helpers';
import { callGetEvent, callCreateEvent, callGetCheckpoint, callAddSplit, callRestartEvent, callStartEvent, callUpdateSplit, callUpdateEvent, callEditEvent } from '../secrets/tests'

import { handleGetEvent } from '../actions/shared'
import { connect } from 'react-redux'
import Home from './Home'
import Checkpoint from './Checkpoint'

class App extends Component {
  componentDidMount () {
    const eventID = 2305;
    this.props.dispatch(handleGetEvent(eventID))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Race Tracker
        </header>
        {/*console.log('from app', callGetCheckpoint())*/}
        {/*TODO: add React-router here*/}
        {/* <div>
          {this.props.loading === true
            ? null
            : <Home />
          }
        </div> */}
        <div>
          <Checkpoint />
        </div>
      </div>
      
    );
  }
}

//TODO: later this will need to relocated [probably into the Start.js component]
//grab authedUser from store
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
