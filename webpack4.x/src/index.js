import printMe from './print.js'

function component() {
  let element = document.createElement('div')

  var btn = document.createElement('button')

  element.innerHTML = 'Hello webpack ' + new Date()

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  element.appendChild(btn)


  return element
}
document.body.appendChild(component())
let func = () => {
  console.log('weiqinl')
}
func()