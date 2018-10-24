import { getEvent } from '../utils/api'
import { receiveEvent } from '../actions/event'
import { setAuthedUser } from '../actions/authedUser'

//TODO: put a setAuthedUser() function in the api folder.
const myUser = 'Wuce Brayn';


export function handleGetEvent (eventID) {
  return (dispatch) => {
    return getEvent(eventID)
      .then(({ event }) => {
        dispatch(receiveEvent(event))
        dispatch(setAuthedUser(myUser))
      })
  }
}

/*-------Taking advantage of Thunk middleware-------//
thunk allows you to separate api logic out of your UI logic.
defn: allows you to write action creators that return a function instead of an action

//----some generic thunk function that gets called from UI----//
export function getDataFromDatabase (myData) {
  return (dispatch) => {
    //----make any changes to the UI here with----//
    dispatch(actionCreator())

    //----make api call, sending whatever data needs to be passed----
    return API.getDataFromDatabase(myData)
      .then(({ receivedData }) => {
        //--------do stuff with that received data----------//
        dispatch(actionCreator(receivedData.data1))
        dispatch(actionCreator(receivedData.data2))
      })
      .catch(() => {
        //----error occured, update your UI here to reflect that the Promise was rejected----//
        dispatch(shitBroke())
      })
  }
}



 */