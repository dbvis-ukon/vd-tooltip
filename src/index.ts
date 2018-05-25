import { VdTooltip } from './vd-tooltip/vd-tooltip'

const tooltip = new VdTooltip(document.body)

const hoverMeDiv = document.getElementsByTagName('div')[0]

hoverMeDiv.addEventListener('mouseover', () => {
  tooltip.setContent('Example', 'Hello <em>world!</em>').show(hoverMeDiv)
})

hoverMeDiv.addEventListener('mouseleave', () => {
  tooltip.hide()
})
