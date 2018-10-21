import React, { Component } from 'react';
import '../styles/App.css';
import { getEvent, getCheckpoint } from '../utils/api';
import { getUTCTime, callConvertTimeToSplit, isValidSplit, formatSplit } from '../utils/helpers';
import { callGetEvent, callCreateEvent, callGetCheckpoint, callAddSplit, callRestartEvent, callStartEvent, callUpdateSplit, callUpdateEvent, callEditEvent } from '../secrets/tests'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Race Tracker
        </header>
        <div>
          App starts here!
        </div>
        <div>
          {console.log('call from app', callEditEvent())}
        </div>
      </div>
      
    );
  }
}

export default App;
