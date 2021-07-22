export const setPageHeading = (title = "We're launching soon") => {
  const pageHeadingElement = document.getElementById('main-title')

  if (pageHeadingElement) {
    pageHeadingElement.innerText = title
  }
}
