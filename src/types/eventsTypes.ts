/**
 * Any type of pointer input event
 * @typedef {MouseEvent | PointerEvent | TouchEvent} AnyPointerEvent
 */
export type AnyPointerEvent = MouseEvent | PointerEvent | TouchEvent

/**
  * Any type of pointer / touch input variable who indentify one or more pointers / fingers
  * @typedef {MouseEvent | PointerEvent | Touch | TouchEvent | TouchList} AnyPointerEventOrArray
  */
export type AnyPointerEventOrArray = MouseEvent | PointerEvent | Touch | TouchEvent | TouchList

/**
  * Any type of pointer / touch input variable who identify only one pointer / finger
  * @typedef {MouseEvent | PointerEvent | Touch} OnePointerEvent
  */
export type OnePointerEvent = MouseEvent | PointerEvent | Touch

/**
 * @typedef IosTouch
 * Extends a Touch to add the ios prop touchType for 'direct' vs 'stylus'
 * @prop {string} touchType
 */
export interface IosTouch extends Touch {
  touchType: string,
}

/**
 * @typedef PointerEventWithTouchType
 * Extends a PointerEvent to add the ios prop touchType for 'direct' vs 'stylus'
 * @prop {string} touchType
 */
export interface PointerEventWithTouchType extends PointerEvent {
  touchType: 'direct',
}

/**
 * @typedef MouseEventWithTouchType
 * Extends a MouseEvent to add the ios prop touchType for 'direct' vs 'stylus'
 * @prop {string} touchType
 */
export interface MouseEventWithTouchType extends MouseEvent {
  touchType: 'direct',
}

/**
 * Custom handler for touchstart/pointerdown and touchmove/pointermove events
 * @typedef {(e: TouchEvent, touch: IosTouch) => void} TouchHandler
 */
export type TouchHandler = (
  e: AnyPointerEvent,
  touch: IosTouch | PointerEventWithTouchType | MouseEventWithTouchType,
) => void

/**
 * Custom handler for touchend event
 * @typedef {(e: TouchEvent|IosTouch) => void} TouchEndHandler
 */
export type TouchEndHandler = (
  e: AnyPointerEvent|IosTouch,
) => void

/**
 * Custom handler for onOneFingerSingleTap event
 * @typedef {(e: TouchEvent, touche:IosTouch) => void} TapHandler
 */
export type TapHandler = (
  e: AnyPointerEvent,
  touch: IosTouch | PointerEventWithTouchType | MouseEventWithTouchType,
) => void

/**
 * Custom handler for onOneFingerSingleTap onTwoFingersSingleTap onThreeFingersSingleTap onFourFingersSingleTap events
 * @typedef {(e: TouchEvent, touches: Array<IosTouch>) => void} TapsHandler
 */
export type TapsHandler = (
  e: AnyPointerEvent,
  touches: Array<IosTouch | PointerEventWithTouchType | MouseEventWithTouchType>,
) => void

/**
 * Custom handler for gesturestart gesturechange gestureend events
 * @typedef {(x: number, y: number, scale: number, rotation: number) => void} GestureHandler
 */
export type GestureHandler = (
  x: number,
  y: number,
  scale: number,
  rotation: number,
) => void

/**
 * @typeof MultiTouchHandlers
 * An object with all the touch handlers needed
 *
 * @prop {TouchHandler} onSingleTouchStart
 * @prop {TouchHandler} onSingleTouchMove
 * @prop {TouchHandler} onSingleTouchEnd
 * @prop {GestureHandler} onGestureStart
 * @prop {GestureHandler} onGestureChange
 * @prop {GestureHandler} onGestureEnd
 * @prop {TapHandler} onOneFingerLongPress
 * @prop {TapHandler} onOneFingerSingleTap
 * @prop {TapHandler} onTwoFingersSingleTap
 * @prop {TapHandler} onThreeFingersSingleTap
 * @prop {TapHandler} onFourFingersSingleTap
 */
export type MultiTouchHandlers = {
  onSingleTouchStart?: TouchHandler,
  onSingleTouchMove?: TouchHandler,
  onSingleTouchEnd?: TouchEndHandler,
  onGestureStart?: GestureHandler,
  onGestureChange?: GestureHandler,
  onGestureEnd?: GestureHandler,
  onOneFingerLongPress?: TapHandler,
  onOneFingerSingleTap?: TapHandler,
  onTwoFingersSingleTap?: TapsHandler,
  onThreeFingersSingleTap?: TapsHandler,
  onFourFingersSingleTap?: TapsHandler,
}
