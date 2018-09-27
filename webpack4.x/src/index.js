import printMe from './print.js'
import './styles.css'

function component() {
  let element = document.createElement('div')

  var btn = document.createElement('button')

  element.innerHTML = 'Hello webpack ' + new Date()

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  element.appendChild(btn)


  return element
}
let element = component() // 当print.js改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!-weiqinl')
    // printMe()
    document.body.removeChild(element)
    element = component() // 重新渲染页面后， component 更新 click 事件处理
    document.body.appendChild(element)
  })
}


let func = () => {
  console.log('weiqinl')
}
func()