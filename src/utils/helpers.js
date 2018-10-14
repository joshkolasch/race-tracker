//make function for calculating the difference between 'event.startTime' and 'user.split'
//convertSplitToUTC(time)

//convertUTCToSplit(time)

//validateTime(time)

//could include other forms of validation
function validateRunner(numRunners, runnerID) {
  if(runnerID <= numRunners && runnerID >= 1){
    return true
  }
  return false
}

