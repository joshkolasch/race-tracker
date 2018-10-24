export const RECEIVE_CHECKPOINT = 'RECEIVE_CHECKPOINT'

//action creator 
export function receiveCheckpoint(checkpoint) {
  return {
    type: RECEIVE_CHECKPOINT,
    checkpoint,
  }
}