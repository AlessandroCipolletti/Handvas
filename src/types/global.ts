
export type eventDataType = {
  e: string
}

export type handvasOptionsType = {
  enableCanvasZoom: boolean
  onEventStart: (eventData: eventDataType) => void
  onEventChange: (eventData: eventDataType) => void
  onEventEnd: (eventData: eventDataType) => void
}
