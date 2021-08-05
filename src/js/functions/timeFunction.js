export const timeFunction = (time) => {
  const addZeroBeforeNumber = (timeNumber) =>
    timeNumber < 10 ? `0${timeNumber}` : timeNumber

  const shouldUpdateTime = (timeElement, currentTime) => {
    // For performance only update time if it changes
    if (Number(timeElement.innerText) !== currentTime) {
      timeElement.innerText = addZeroBeforeNumber(currentTime)
    }
  }

  const convertSecToTimeUnits = (sec) => {
    const days = Math.floor(sec / (24 * 3600))

    sec = sec % (24 * 3600)
    const hours = Math.floor(sec / 3600)

    sec %= 3600
    let minutes = Math.floor(sec / 60)

    sec %= 60
    let seconds = Math.floor(sec)

    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }

  //Validation time object
  if (time) {
    const errorTimeUnitText =
      'value is not correct! format must be a number, the range of input should not bigger or smaller than given time unit'

    if (typeof time.days !== 'number' || time.days < 0)
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
  const timeWrapper = document.getElementById('time')

  if (
    timeWrapper &&
    daysElements &&
    hoursElements &&
    minutesElements &&
    secondsElements
  ) {
    // Set init time to document
    daysElements.innerText = addZeroBeforeNumber(days)
    hoursElements.innerText = addZeroBeforeNumber(hours)
    minutesElements.innerText = addZeroBeforeNumber(minutes)
    secondsElements.innerText = addZeroBeforeNumber(seconds)

    let totalSeconds = days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds
    let time = convertSecToTimeUnits(totalSeconds)

    let timeInterval = null
    const countDownTimer = () => {
      if (
        time.days === 0 &&
        time.hours === 0 &&
        time.minutes === 0 &&
        time.seconds === 0
      ) {
        // End of the time!
        clearInterval(timeInterval)
      } else {
        totalSeconds -= 1
        time = convertSecToTimeUnits(totalSeconds)

        timeWrapper.setAttribute(
          'aria-label',
          `${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`
        )

        // Set real time counter
        shouldUpdateTime(daysElements, time.days)
        shouldUpdateTime(hoursElements, time.hours)
        shouldUpdateTime(minutesElements, time.minutes)
        secondsElements.innerText = addZeroBeforeNumber(time.seconds)
      }
    }

    timeInterval = setInterval(countDownTimer, 1000)
  }
}
