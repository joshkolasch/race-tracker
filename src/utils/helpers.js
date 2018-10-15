const HOUR = 3600000;
const MINUTE = 60000;
const SECOND = 1000;


export function convertTimeToSplit(startTime, splitTime){
  
  let diff = splitTime - startTime;

  //catch NaN
  if(diff !== diff) {
    return null;
  }
  //catch improper splitTime
  if(diff < 0) {
    return null;
  }
  const hours = Math.floor(diff / HOUR);
  diff %= HOUR;
  const minutes = Math.floor(diff / MINUTE);
  diff %= MINUTE;
  const seconds = Math.floor(diff / SECOND);
  diff %= SECOND;
  const milliseconds = diff;

  return convertSplitToString(hours, minutes, seconds, milliseconds);
  
}

function convertSplitToString(hours, minutes, seconds, milliseconds) {
  let result = [];
  if(hours < 10) {
    result.push('0');
  }
  result.push(hours.toString() + ':');
  if(minutes < 10) {
    result.push('0');
  }
  result.push(minutes.toString() + ':');
  if(seconds < 10) {
    result.push('0');
  }
  result.push(seconds.toString());
  result.push(':');
  if(milliseconds < 10){
    result.push('00');
  }
  else if(milliseconds < 100) {
    result.push('0');
  }
  result.push(milliseconds.toString());
  return result.join('');
}


//---------------------------  timeRegex Explained   -----------------------------------//
//                   hours     :     minutes     :     seconds     :     milliseconds   //
// any first digits (optional) : 0-59 (optional) : 0-59 (required) : 0-999 (optional)   //
//                |     optional start       |  required   |     optional end    |      //
//                ^(([\d]*:)?([0-5]?[0-9]))?  (:[0-5]?[0-9])  (:[0-9]?[0-9]?[0-9])?$/   //

export function isValidSplit(time) {
  
  let timeRegex = /^(([\d]*:)?([0-5]?[0-9]))?(:[0-5]?[0-9])(:[0-9]?[0-9]?[0-9])?$/

  return timeRegex.test(time);
}

//TODO: make a function that trims leading zeros
//function trimLeadingZeros(split)
//turns: 00:00:52:123
//into: 0:52:123


export function formatSplit(time) {
  let segments = time.split(':');
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;

  if(segments.length === 4) {
    hours = segments[0];
    minutes = segments[1];
    seconds = segments[2];
    milliseconds = segments[3];
  }
  else if(segments.length === 3) {
    if(segments[segments.length - 1].length === 3){
      minutes = segments[0];
      seconds = segments[1];
      milliseconds = segments[2];
    }
    else {
      hours = segments[0];
      minutes = segments[1];
      seconds = segments[2];
    }
  }
  else {
    if(segments[0] === '') {
      seconds = segments[1];
    }
    else if(segments[segments.length - 1].length === 3) {
      seconds = segments[0];
      milliseconds = segments[1];
    }
    else {
      minutes = segments[0];
      seconds = segments[1];
    }
  }

  return convertSplitToString(hours, minutes, seconds, milliseconds);
}

//could include other forms of validation
//client-side
export function validateRunner(numRunners, runnerID) {
  if(runnerID <= numRunners && runnerID >= 1){
    return true
  }
  return false
}


//used to generate event.startTime
//also used to generate runner.split 
//server-side & client-side
export function getUTCTime() {
  return new Date().getTime();
}


