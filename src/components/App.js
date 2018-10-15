import React, { Component } from 'react';
import '../styles/App.css';
import { getEvent, getCheckpoint } from '../utils/api';
import { getUTCTime, callConvertTimeToSplit, isValidSplit, formatSplit } from '../utils/helpers';

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
          {console.log('result ', formatSplit('9:5:1:45'))}
        </div>
      </div>
      
    );
  }
}

export default App;
