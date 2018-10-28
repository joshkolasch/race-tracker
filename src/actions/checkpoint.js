import { getCheckpoint } from '../utils/api'

export const RECEIVE_CHECKPOINT = 'RECEIVE_CHECKPOINT'
export const SELECT_CHECKPOINT = 'SELECT_CHECKPOINT'


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