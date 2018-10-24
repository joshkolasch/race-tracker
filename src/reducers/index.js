import { combineReducers } from 'redux';
import event from './event'
import checkpoint from './checkpoint'
import authedUser from './authedUser'

export default combineReducers({
  authedUser,
  event,
  checkpoint,
})