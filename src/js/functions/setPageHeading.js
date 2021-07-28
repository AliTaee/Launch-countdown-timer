export const setPageHeading = (
  title = "We're launching soon",
  isError = false
) => {
  const pageHeadingElement = document.getElementById('main-title')

  if (pageHeadingElement) {
    pageHeadingElement.innerText = title

    if (isError) pageHeadingElement.classList.add('main__title--error')
  }
}
