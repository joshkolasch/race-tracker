export const RECEIVE_EVENT = 'RECEIVE_EVENT'

const eventID = 2305;

//action creator
//the action is inside the body of the return
export function receiveEvent (event) {
  return {
    type: RECEIVE_EVENT,
    event,
  }
}








