
/**
 * @function delayFn
 * Utils to delay as little as possible a function call
 *
 * @example
 * const myFn = (a, b) => console.log(a + b)
 * const myFnDelayed = delayFn(myFn)
 * myFnDelayed(12, 21)
 * console.log('hello world') // <-- this one is printed before
 *
 * @param {(...args: any[]) => any} fn
 * @returns {(any|Array<any>) => void}
 */
const delayFn = (fn: (..._: any[]) => any) => (...args: unknown[]): void => { //eslint-disable-line
  requestAnimationFrame(() => {
    fn(...args as [])
  })
}

export default delayFn
