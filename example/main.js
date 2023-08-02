import Handvas from '../src/handvas'

const init = () => {
  const container = document.getElementById('container')
  const style = getComputedStyle(container)

  const MyCanvas = Handvas(container)

  console.log(style.position)
  console.log(MyCanvas)
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    init()
  }
}
