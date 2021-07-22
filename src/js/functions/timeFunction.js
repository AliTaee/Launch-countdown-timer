export const timeFunction = (time) => {
  const addZeroBeforeNumber = (timeNumber) =>
    timeNumber < 10 ? `0${timeNumber}` : timeNumber

  const shouldUpdateTime = (timeElement, currentTime) => {
    // For performance only update time if it changes
    if (Number(timeElement.innerText) !== currentTime) {
      timeElement.innerText = addZeroBeforeNumber(currentTime)
    }
  }

  //Validation time object
  if (time) {
    const errorTimeUnitText =
      'value is not correct! format must be a number, the range of input should not bigger or smaller than given time unit'

    if (typeof time.days !== 'number' || time.days > 31 || time.days < 0)
      throw `Days ${errorTimeUnitText}`

    if (typeof time.hours !== 'number' || time.hours > 24 || time.hours < 0)
      throw `Hours ${errorTimeUnitText}`

    if (
      typeof time.minutes !== 'number' ||
      time.minutes > 60 ||
      time.minutes < 0
    )
      throw `Minutes ${errorTimeUnitText}`

    if (
      typeof time.seconds !== 'number' ||
      time.seconds > 60 ||
      time.seconds < 0
    )
      throw `Seconds ${errorTimeUnitText}`
  } else {
    throw 'There is no time to show!'
  }

  let { days, hours, minutes, seconds } = time

  const daysElements = document.getElementById('time-days')
  const hoursElements = document.getElementById('time-hours')
  const minutesElements = document.getElementById('time-minutes')
  const secondsElements = document.getElementById('time-seconds')

  if (daysElements && hoursElements && minutesElements && secondsElements) {
    // Set init time to document
    daysElements.innerText = addZeroBeforeNumber(days)
    hoursElements.innerText = addZeroBeforeNumber(hours)
    minutesElements.innerText = addZeroBeforeNumber(minutes)
    secondsElements.innerText = addZeroBeforeNumber(seconds)

    let time = new Date()

    time.setDate(days)
    time.setHours(hours)
    time.setMinutes(minutes)
    time.setSeconds(seconds)

    let timeInterval = null
    const countDownTimer = () => {
      if (
        days === 0 &&
        time.getHours() === 0 &&
        time.getMinutes() === 0 &&
        time.getSeconds() === 0
      ) {
        // End of the time!
        clearInterval(timeInterval)
      } else {
        time.setSeconds(time.getSeconds() - 1)

        // Set real time counter
        shouldUpdateTime(
          daysElements,
          days !== 0 && time.getDate() <= days ? time.getDate() : 0
        )
        shouldUpdateTime(hoursElements, time.getHours())
        shouldUpdateTime(minutesElements, time.getMinutes())
        secondsElements.innerText = addZeroBeforeNumber(time.getSeconds())
      }
    }

    timeInterval = setInterval(() => countDownTimer(), 1000)
  }
}
