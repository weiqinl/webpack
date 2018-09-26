import './style.css'
import Icon from './icon.png'

function component() {
  let element = document.createElement('div')
  element.innerHTML = 'Hello webpack' + new Date()
  element.classList.add('hello')

  // 将图像添加到我们现有的 div
  let myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)

  return element
}
document.body.appendChild(component())
let func = () => {
  console.log('weiqinl')
}
func()