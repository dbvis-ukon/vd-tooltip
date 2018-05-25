import { VdTooltip } from '../vd-tooltip'

describe('VdTooltip', () => {
  it('should initialize class', () => {
    const vdTooltip = new VdTooltip(document.body)
    expect(vdTooltip).toBeInstanceOf(VdTooltip)
  })

  it('should append stuff to body', () => {
    // tslint:disable-next-line:no-unused-expression
    new VdTooltip(document.body)
    const div: HTMLDivElement | null = document.querySelector('body div')
    expect(div).not.toBeNull()
    expect(div!.classList.contains('vd-tooltip')).toBeTruthy()
  })
})
