import { getCheckpoint, addSplit } from '../utils/api'
import { convertTimeToSplit } from '../utils/helpers'

export const RECEIVE_CHECKPOINT = 'RECEIVE_CHECKPOINT'
export const SELECT_CHECKPOINT = 'SELECT_CHECKPOINT'
export const ADD_SPLIT = 'ADD_SPLIT'


//action creator 
export function receiveCheckpoint(checkpoint) {
  return {
    type: RECEIVE_CHECKPOINT,
    checkpoint,
  }
}


function selectCheckpoint(checkpoint) {
  return {
    type: SELECT_CHECKPOINT,
    checkpoint
  }
}

function getSplit(checkpoint) {
  return {
    type: ADD_SPLIT,
    checkpoint
  }
}

export function handleSelectCheckpoint (checkpointID) {
  return (dispatch, getState) => {
    const { event } = getState()
    //TODO:
    //dispatch(showLoading())
    return getCheckpoint(event.eventID, checkpointID)
      .then((checkpoint) => dispatch(selectCheckpoint(checkpoint)))
      //.then(() => dispatch(hideLoading()))
  }
}

export function handleAddSplit (runner, checkpointID) {
  return (dispatch, getState) => {
    const { event } = getState()
    let time = new Date().getTime()

    const newRunner = {
      ...runner,
      split: convertTimeToSplit(event.startTime, time)
    }
    return addSplit(event.eventID, checkpointID, newRunner)
      .then((checkpoint) => {
        //console.log('checkpoint in handleAddSplit', checkpoint)
        dispatch(getSplit(checkpoint))}) 
  }
}

