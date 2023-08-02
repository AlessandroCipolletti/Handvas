import { AnyPointerEvent, IosTouch, PointerEventWithTouchType, MouseEventWithTouchType } from '../types/eventsTypes'

const state = {
  touchDown: false,
}

console.log(state)

export const onDrawingEventStart = (
  e: AnyPointerEvent,
  point: IosTouch|PointerEventWithTouchType|MouseEventWithTouchType,
) => {
  console.log(e, point)
}

export const onDrawingEventMove = (
  e: AnyPointerEvent,
  point: IosTouch|PointerEventWithTouchType|MouseEventWithTouchType,
) => {
  console.log(e, point)
}

export const onDrawingEventEnd = (e: AnyPointerEvent|IosTouch) => {
  console.log(e)
}
