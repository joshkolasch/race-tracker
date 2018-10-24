import { RECEIVE_EVENT } from '../actions/event'

//state = {} is a default parameter. ES6 feature
export default function event (state = {}, action) {
  switch (action.type) {
    case RECEIVE_EVENT:
      return {
        ...state,
        ...action.event
      }
    default:
      return state
  }

}