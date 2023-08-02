
const mergeStateProps = (
  state: Record<string, unknown>,
  props: Record<string, unknown>,
): Record<string, unknown> => {
  for (const key in props) {
    if (typeof state[key] !== 'undefined') {
      state[key] = props[key]
    }
  }

  return state
}

export default mergeStateProps
