//TODO - import more functions from _DATA
import { _getEvent, _getCheckpoint } from './_DATA.js';

/*TODO:
import { someFunction } from './helpers'
Reference Video: TM-> React-redux-> 'Real World Redux' -> 'Starter Code'

*/

//getEvent(eventID)
export function getEvent(eventID) {
  return Promise.all([
    _getEvent(eventID),
  ]).then(([event]) => ({
    event: formatEvent(event)
  })).catch((e) => {
    console.log(e);
  })
}
//validateUser(eventID, passwd)

//getCheckpoint(eventID, checkpointID)
export function getCheckpoint(eventID, checkpointID) {
  return Promise.all([
    _getCheckpoint(eventID, checkpointID)
  ]).then(([checkpoint]) => ({
    checkpoint: formatCheckpoint(checkpoint),
    runners: formatRunners(checkpoint),
  }))
}
//addSplit(eventID, checkpointID, runnerID, time)
export function addSplit(eventID, checkpointID, runnerID, time) {
  
}
//updateSplit(eventID, checkpointID, runnerID, time, timestamp)

//addEvent(eventName, numParticipants, numCheckpoints, password)

//updateEvent(eventJSON)

//restartEvent(eventJSON)

//startEvent(eventID, time)

function formatEvent (event) {
  return {
    id: event.id,
    name: event.name,
    numRunners: event.numRunners,
    numCheckpoints: event.numCheckpoints,
    startTime: event.startTime,
  }
}


//TODO:
function formatCheckpoint (checkpoint) {
  return checkpoint.id;
}

function formatRunners (checkpoint) {
  const { runners } = checkpoint;
  if (runners === null) {
    return null;
  }

  //I don't think this is necessary right now
  /*Object.keys(runners).reduce((formattedRunners, id) => {
    formattedRunners[id] = runners[id]
  }, {})*/
  return runners;
}

/*
Object.keys(runners) would return [1, 23] if:

checkpoint = { 
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
*/