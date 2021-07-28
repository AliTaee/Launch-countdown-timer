'use strict'
require('normalize.css')

// customize heading, title, social links...
import { config } from './config'

// functions
import { timeFunction } from './functions/timeFunction'
import { setPageHeading } from './functions/setPageHeading'
import { setSocialsSection } from './functions/setSocialsSection'

try {
  timeFunction(config.time)
  setPageHeading(config.mainTitle)
  setSocialsSection(config.socials)
} catch (error) {
  // Error handling
  setPageHeading(error, true)
  console.error(error)
}
