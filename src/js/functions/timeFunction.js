export const timeFunction = () => {
  let secondElement = document.getElementById('time-seconds')

  if (secondElement) {
    let initSeconds = 60

    setInterval(() => {
      let seconds = initSeconds--
      seconds = seconds < 10 ? `0${seconds}` : seconds
      secondElement.innerText = seconds

      if (initSeconds < 0) initSeconds = 60
    }, 1000)
  }
}
