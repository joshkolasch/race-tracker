import React, { Component } from 'react';
import '../styles/App.css';
import { getEvent, getCheckpoint } from '../utils/api';
import { getUTCTime, callConvertTimeToSplit, isValidSplit, formatSplit } from '../utils/helpers';
import { callGetEvent, callCreateEvent, callGetCheckpoint, callAddSplit, callRestartEvent, callStartEvent, callUpdateSplit, callUpdateEvent, callEditEvent } from '../secrets/tests'
import { handleGetEvent } from '../actions/shared'
import { connect } from 'react-redux'

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
        <div>
          App starts here!
        </div>
      </div>
      
    );
  }
}

export default connect()(App);
