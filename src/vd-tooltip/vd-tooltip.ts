import Tether from 'tether'
export class VdTooltip {
  protected container: HTMLElement
  private titleElement: HTMLElement
  private bodyElement: HTMLElement

  private tether: Tether | null = null

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

  public hide(): VdTooltip {
    if (this.container) {
      this.container.classList.add('hidden')
    }
    if (this.tether) {
      this.tether.destroy()
    }

    return this
  }

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

  public setContent(header: string, body: string): VdTooltip {
    this.titleElement.innerHTML = header
    this.bodyElement.innerHTML = body

    return this
  }
}
