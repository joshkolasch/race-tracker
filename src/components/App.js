import React, { Component } from 'react';
import '../styles/App.css';
import { getEvent, getCheckpoint } from '../utils/api';

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
          {console.log(getEvent(1))}
          {console.log('checkpoint', getCheckpoint(1, 1))}
        </div>
      </div>
      
    );
  }
}

export default App;
