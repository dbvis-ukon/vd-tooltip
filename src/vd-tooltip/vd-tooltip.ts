import Tether from 'tether'
/**
 * A simple class to display a tooltip anywhere in your app.
 */
export class VdTooltip {
  protected container: HTMLElement
  private titleElement: HTMLElement
  private bodyElement: HTMLElement

  private tether: Tether | null = null

  /**
   * Creates a new tooltip element.
   * @param appendElement the html element where the tooltip will be added to
   */
  public constructor(appendElement: HTMLElement) {
    this.container = document.createElement('div')
    this.container.classList.add('vd-tooltip', 'hidden')

    this.titleElement = document.createElement('h3')
    this.titleElement.classList.add('title')
    this.container.appendChild(this.titleElement)

    this.bodyElement = document.createElement('div')
    this.bodyElement.classList.add('body')
    this.container.appendChild(this.bodyElement)

    appendElement.appendChild(this.container)

    this.container.addEventListener('mouseleave', () => {
      this.hide()
    })
  }

  /**
   * Hide the tooltip.
   * @returns {VdTooltip} this instance
   */
  public hide(): VdTooltip {
    if (this.container) {
      this.container.classList.add('hidden')
    }
    if (this.tether) {
      this.tether.destroy()
    }

    return this
  }

  /**
   * Shows the tooltip and attaches it to the target element.
   * @param target the target where the tooltip will be attached to
   * @returns {VdTooltip} this instance
   */
  public show(target: HTMLElement): VdTooltip {
    // const obj: $ = $(target);

    this.container.classList.remove('hidden')

    this.tether = new Tether({
      attachment: 'top center',
      constraints: [
        {
          attachment: 'together',
          to: 'window',
        },
      ],
      element: this.container,
      target,
      targetAttachment: 'bottom center',
    })

    return this
  }

  /**
   *
   * @param header the header content
   * @param body the body content
   * @returns {VdTooltip} this instance
   */
  public setContent(header: string, body: string): VdTooltip {
    this.titleElement.innerHTML = header
    this.bodyElement.innerHTML = body

    return this
  }
}
