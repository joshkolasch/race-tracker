//this represents what should be stored on the database
//state should only need to contain 'event' and 'checkpoint'
//the app only needs to be made aware of the current checkpoint
//if someone wants to 
let event = {
  id: 2305,
  name: 'Sunny Hills Relay',
  numRunners: 25,
  numCheckpoints: 10,
  startTime: '10:00:000',
  checkpoints: [
    {
      id: 1,
      runners: {
        1: {
          split: '10:20',
          timestamp: '10:10:100'
        },
        23: {
          split: '5:15',
          timestamp: '10:05:200'
        }
      }
    },
    {
      id: 2
    },
    {
      id: 3
    },
  ]
}

let checkpoint = {
  id: 1,
  runners: {
    1: {
      split: '10:20',
      timestamp: '10:10:100'
    },
    23: {
      split: '5:15',
      timestamp: '10:05:200'
    }
  }
}

//store should look like the following
/*
  store = {
    event: {stuff},
    user: {
      isAuthenticated: true,
    },
    checkpoint: 3,
    runners: {
      1: {
        split: '10:20',
        timestamp: '10:10:100'
      },
      23: {
        split: '5:15',
        timestamp: '10:05:200'
      }
    }
  }

*/

//DONE: test these two functions to make sure they return the correct piece of state
export function _getEvent () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...event}), 1000)
  })
}

export function _getCheckpoint (eventID, checkpointID) {
  return new Promise((res, rej) => {
    setTimeout(() => res({...checkpoint}), 1000)
  })
}
