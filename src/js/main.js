'use strict'
require('normalize.css')

// customize heading, title, social links...
import { config } from './config'

// functions
import { setPageHeading } from './functions/setPageHeading'
import { setSocialsSection } from './functions/setSocialsSection'

setPageHeading(config.mainTitle)
setSocialsSection(config.socials)
