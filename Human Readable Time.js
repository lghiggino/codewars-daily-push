/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

function humanReadable(time) {
    // TODO
    let hours = Math.trunc(time / 3600)
    let remainderMinutes = (time % 3600)
    let minutes = Math.trunc(remainderMinutes / 60)
    let remainderSeconds = minutes % 60
    let seconds = time % 60
    if (hours < 10){
        hours =`0${hours}`
    }
    if (hours === 0){
        hours = "00"
    }
    if (minutes < 10){
        minutes = `0${minutes}`
    }
    if (minutes === 0){
        minutes = "00"
    }
    if (seconds < 10){
        seconds = `0${seconds}`
    }
    if (seconds === 0){
        seconds = "00"
    }
    console.log(hours, minutes, seconds)
    return `${hours}:${minutes}:${seconds}`
  }
  humanReadable(359999)
  humanReadable(360000)
  humanReadable(368799)
  humanReadable(359999)