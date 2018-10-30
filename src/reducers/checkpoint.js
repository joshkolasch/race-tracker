import { RECEIVE_CHECKPOINT, SELECT_CHECKPOINT, ADD_SPLIT } from '../actions/checkpoint'

export default function checkpoint (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CHECKPOINT:
      return {
        ...state,
        ...action.checkpoint
      }
    case SELECT_CHECKPOINT:
      return {
        ...action.checkpoint
      }
    case ADD_SPLIT:
      return {
        ...action.checkpoint
      }
    default:
      return state
  }
}