export const setPageHeading = (title = '') => {
  const pageHeadingElement = document.getElementById('main-title')

  if (pageHeadingElement) {
    pageHeadingElement.innerText = title
  }
}
