require('normalize.css')

// customize heading, title, social links...
import { config } from './config'

// functions
import { setPageHeading } from './functions/setPageHeading'

setPageHeading(config.mainTitle)
