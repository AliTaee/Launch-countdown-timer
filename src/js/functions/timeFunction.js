export const timeFunction = (time) => {
  const addZeroBeforeNumber = (timeNumber) =>
    timeNumber < 10 ? `0${timeNumber}` : timeNumber

  const shouldUpdateTime = (timeElement, currentTime) => {
    // For performance only update time if it changes
    if (Number(timeElement.innerText) !== currentTime) {
      timeElement.innerText = addZeroBeforeNumber(currentTime)
    }
  }

  if (time) {
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
          time.getDate() === 0 &&
          time.getHours() === 0 &&
          time.getMinutes() === 0 &&
          time.getSeconds() === 0
        ) {
          // End of the time!
          clearInterval(timeInterval)
        }

        time.setSeconds(time.getSeconds() - 1)

        // Set real time counter
        shouldUpdateTime(daysElements, time.getDate())
        shouldUpdateTime(hoursElements, time.getHours())
        shouldUpdateTime(minutesElements, time.getMinutes())
        secondsElements.innerText = addZeroBeforeNumber(time.getSeconds())
      }

      timeInterval = setInterval(() => countDownTimer(), 1000)
    }
  }
}
