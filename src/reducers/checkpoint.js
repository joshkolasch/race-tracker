import { RECEIVE_CHECKPOINT } from '../actions/checkpoint'

export default function checkpoint (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CHECKPOINT:
      return {
        ...state,
        ...action.checkpoint
      }
    default:
      return state
  }
}