//this represents what should be stored on the database
//state should only need to contain 'event' and 'checkpoint'
//the app only needs to be made aware of the current checkpoint
//if someone wants to 
let testEvent = {
  eventID: 2305,
  name: 'Sunny Hills Relay',
  numRunners: 25,
  numCheckpoints: 10,
  startTime: '10:00:000'
}

/* */
let testCheckpoint = {
  checkpointID: 1,
  runners: {
    1: {
      runnerID: 1234,
      runnerNumber: 1,
      split: '10:20',
      timestamp: 1540084649946,
      updateMethod: 'auto'
    },
    23: {
      runnerID: 1235,
      runerNumber: 23,
      split: '5:15',
      timestamp: 1540084688057,
      updateMethod: 'manual'
    }
  }
}

let runID = 300;

//store should look like the following
//updateMethod refers to how the user added the split (this is important for a future feature)
//if the user adjusts the event.startTime, the splits with 'auto' will all be updated
/*
  store = {
    event: {stuff},
    user: {
      isAuthenticated: true,
    },
    checkpoint: 3,
    runners: {
      1: {
        runnerID: 1234,
        runnerNumber: 1,
        split: '10:20',
        timestamp: '1540084649946',
        updateMethod: 'auto'
      },
      23: {
        runnerID: 1235, 
        runnerNumber: 23,
        split: '5:15',
        timestamp: '1540084688057',
        updateMethod: 'manual'
      }
    }
  }
*/


//test: DONE
export function _createEvent(event) {
  return new Promise((res, rej) => {
    const formattedEvent = formatEvent(event);
    console.log('testEvent before in db', testEvent)
    setTimeout(() => {
      testEvent = {
        ...formattedEvent,
      }
      console.log('testEvent in db', testEvent)
      res(formattedEvent);
    }, 1000)
  })
}

//test: DONE
export function _getEvent () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...testEvent}), 1000)
  })
}

//test: DONE
export function _startEvent(eventID, startTime) {
  console.log('event before startEvent', testEvent);
  return new Promise((res, rej) => {
    setTimeout(() => {
      testEvent = {
        ...testEvent,
        startTime: startTime
      }
      console.log('event after startEvent', testEvent);
      res();
    }, 1000)
  })
}

//test: DONE
export function _restartEvent(eventID) {
  console.log('event before restartEvent', testEvent);
  return new Promise((res, rej) => {
    setTimeout(() => {
      testEvent = {
        ...testEvent,
        startTime: ''
      }
      console.log('event after restartEvent', testEvent);
    }, 1000)
  })
}

//test: DONE
export function _editEvent(event) {
  return new Promise((res, rej) => {
    console.log('before edit', testEvent);
    setTimeout(() => {
      testEvent = {
        ...event
      }
      console.log('after edit', testEvent);
      res(event);
    }, 1000)
  })
}

//test: DONE
export function _getCheckpoint (eventID, checkpointID) {
  return new Promise((res, rej) => {
    setTimeout(() => res({...testCheckpoint}), 1000)
  })
}


//test: DONE
export function _addSplit(eventID, checkpointID, runner) {
  return new Promise((res, rej) => {
    const formattedRunner = formatRunner(runner);
    setTimeout(() => {
      testCheckpoint = {
        ...testCheckpoint,
        runners: {
          ...testCheckpoint.runners,
          [formattedRunner.runnerNumber]: formattedRunner
        }
        
      }
      res(formattedRunner);
    }, 1000)
  })
}

//test: DONE
export function _updateSplit(eventID, checkpointID, runner) {
  return new Promise((res, rej) => {
    console.log('before update split', testCheckpoint)
    setTimeout(() => {
      testCheckpoint = {
        ...testCheckpoint,
        runners: {
          ...testCheckpoint.runners,
          [runner.runnerNumber]: {
            ...runner
          }
        }
      }
      console.log('after update split', testCheckpoint);
      res();
    }, 1000)
  })
}


//test: DONE
function formatRunner(runner) {
  const { runnerNumber, split, updateMethod } = runner;
  const runnerID = generateRunnerID();
  const timestamp = getUTCTime();

  let newRunner = {
    runnerID,
    runnerNumber,
    split,
    timestamp,
    updateMethod
  };

  return newRunner;
}


//test: DONE
//used for creating an event
function formatEvent(event) {
  const { name, numRunners, numCheckpoints, startTime } = event;
  //TODO:
  // do some sort of variable validation here

  let newEvent = {
    eventID: generateUID(),
    name,
    numRunners,
    numCheckpoints,
    startTime,
  }

  return newEvent;
}

//TODO: test -
function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

//test: DONE
export function getUTCTime() {
  return new Date().getTime();
}


function generateRunnerID() {
  runID += 1;
  return runID;
}