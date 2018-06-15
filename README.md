# VdTooltip

A simple library to attach a tooltip to elements. The attachment is handled by the awesome tether library.

Sample usage:

```javascript
import { VdTooltip } from './vd-tooltip/vd-tooltip'

//add the tooltip to the body
const tooltip = new VdTooltip(document.body)

const hoverMeDiv = document.getElementsByTagName('div')[0]

hoverMeDiv.addEventListener('mouseover', () => {
  //set the content and attach the tooltip to the div
  tooltip.setContent('Example', 'Hello <em>world!</em>').show(hoverMeDiv)
})

hoverMeDiv.addEventListener('mouseleave', () => {
  tooltip.hide()
})
```