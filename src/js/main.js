'use strict'
require('normalize.css')

// customize heading, title, social links...
import { config } from './config'

// functions
import { timeFunction } from './functions/timeFunction'
import { setPageHeading } from './functions/setPageHeading'
import { setSocialsSection } from './functions/setSocialsSection'

timeFunction()
setPageHeading(config.mainTitle)
setSocialsSection(config.socials)
