function component() {
  let element = document.createElement('div')
  element.innerHTML = 'Hello webpack' + new Date()
  return element
}
document.body.appendChild(component())
let func = () => {
  console.log('weiqinl')
}
func()