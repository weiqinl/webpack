import './style.css'

function component() {
  let element = document.createElement('div')
  element.innerHTML = 'Hello webpack' + new Date()
  element.classList.add('hello')
  return element
}
document.body.appendChild(component())
let func = () => {
  console.log('weiqinl')
}
func()