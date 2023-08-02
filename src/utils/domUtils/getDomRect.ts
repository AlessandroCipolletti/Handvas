import roundNumber from '../mathUtils/roundNumber'

/**
 * @typeof DomRect
 * @prop {number} width
 * @prop {number} height
 * @prop {number} x
 * @prop {number} y
 * @prop {number} left
 * @prop {number} top
 * @prop {number} right
 * @prop {number} bottom
 * @prop {number} centerX
 * @prop {number} centerY
 */
 declare interface BetterDomRect {
  width: number,
  height: number,
  x: number,
  y: number,
  left: number,
  top: number,
  right: number,
  bottom: number,
  centerX: number,
  centerY: number,
}

/**
 * @function getDomRect
 * Gets a detailed positioning information about the given dom element (in px, rounded a N decimal digit)
 * If you want to get coords related to its container, you can specify container's 'offsetX' and 'offsetY' position.
 * Otherwise it returns coords relative to the page.
 *
 * @example
 * const myDomRect = getDomRect(myDom)
 *
 * @param {HTMLElement} element
 * @param {number} [decimals]
 * @param {number} [offsetX]
 * @param {number} [offsetY]
 * @returns {DomRect}
 */
const getDomRect = (
  element: HTMLElement,
  decimals = 0,
  offsetX = 0,
  offsetY = 0,
): BetterDomRect => {
  const rect = JSON.parse(JSON.stringify(element.getBoundingClientRect())) as DOMRect

  return {
    width: roundNumber(rect.width, decimals),
    height: roundNumber(rect.height, decimals),
    x: roundNumber(rect.left - offsetX, decimals),
    y: roundNumber(rect.top - offsetY, decimals),
    left: roundNumber(rect.left - offsetX, decimals),
    top: roundNumber(rect.top - offsetY, decimals),
    right: roundNumber(rect.right - offsetX, decimals),
    bottom: roundNumber(rect.bottom - offsetY, decimals),
    centerX: roundNumber(rect.left + (rect.width / 2), decimals),
    centerY: roundNumber(rect.top + (rect.height / 2), decimals),
  }
}

export default getDomRect
