import mergeStateProps from './utils/jsUtils/mergeStateProps'
import { handvasOptionsType } from './types/global'
import { MultiTouchHandlers } from './types/eventsTypes'
import multiTouchMultiDeviceEventsHandlers from './utils/uiUtils/multiTouchMultiDeviceEventsHandlers'
import roundNumber from './utils/mathUtils/roundNumber'
import noop from './utils/jsUtils/noop'
import {
  onDrawingEventStart,
  onDrawingEventMove,
  onDrawingEventEnd,
} from './drawing/drawing'

const defaultOptions: handvasOptionsType = {
  enableCanvasZoom: true,
  onEventStart: noop,
  onEventChange: noop,
  onEventEnd: noop,
}

/**
 * Handvas!
 *
 * @param {HTMLDivElement} container
 * @param {object} opts
 * @returns Handvas object
 */
const Handvas = (container: HTMLDivElement, opts = {}) => {
  const options = mergeStateProps(defaultOptions, opts) as handvasOptionsType

  initHandvasDom(container, options)

  const setToolProps = (props: Record<string, unknown>): void => {
    console.log(props)
  }

  const setToolColor = (color: string): void => {
    console.log(color)
  }

  const setInputMode = (mode: 'drag' | 'draw'): void => {
    console.log(mode)
  }

  const getBase64 = (): string => {
    return 'base64'
  }

  return {
    setToolProps,
    setToolColor,
    setInputMode,
    getBase64,
  }
}

const initHandvasDom = (container: HTMLDivElement, options: handvasOptionsType) => {
  const containerStyle = getComputedStyle(container)
  const containerRect = container.getBoundingClientRect()

  if (containerStyle.position === 'static') {
    container.style.position = 'relative'
  }

  const canvas = document.createElement('canvas')
  const touchLayer = document.createElement('div')

  canvas.width = roundNumber(containerRect.width)
  canvas.height = roundNumber(containerRect.height)

  canvas.style.cssText = `
    position: absolute;
    widht: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 500;
  `
  touchLayer.style.cssText = `
    position: absolute;
    widht: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 1000;
  `

  container.appendChild(canvas)
  container.appendChild(touchLayer)

  const handlers: MultiTouchHandlers = {}

  handlers.onSingleTouchStart = onDrawingEventStart
  handlers.onSingleTouchMove = onDrawingEventMove
  handlers.onSingleTouchEnd = onDrawingEventEnd

  if (options.enableCanvasZoom) {
    handlers.onGestureStart = noop
    handlers.onGestureChange = noop
    handlers.onGestureEnd = noop
  }

  multiTouchMultiDeviceEventsHandlers(touchLayer, handlers)
}

export default Handvas
