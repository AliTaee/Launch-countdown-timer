export const setSocialsSection = (socials = []) => {
  const SocialsElement = document.getElementById('socials-list')

  if (SocialsElement) {
    socials.forEach((social) => {
      const linkElement = document.createElement('a')

      if (social.link) {
        linkElement.href = social.link
        linkElement.target = '_blank'
        linkElement.className = 'socials-list__link'
        linkElement.rel = 'noopener noreferrer'
      }

      const iconSvg = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
      )
      const iconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      )
      if (social.icon) {
        iconSvg.setAttribute('width', '24')
        iconSvg.setAttribute('height', '24')
        iconSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        iconSvg.setAttribute('viewBox', '0 0 24 24')
        iconPath.setAttribute('fill', social.color)
        iconPath.setAttribute('d', social.icon)
        iconSvg.appendChild(iconPath)
      }
      linkElement.appendChild(iconSvg)

      const listElement = document.createElement('li')
      listElement.className = 'socials-list__item'
      listElement.appendChild(linkElement)

      SocialsElement.appendChild(listElement)
    })
  }
}
