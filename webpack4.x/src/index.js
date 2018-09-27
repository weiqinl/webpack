import _ from 'lodash'
import printMe from './print.js'
import './styles.css'
import {
  cube
} from './math'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

function component() {
  let element = document.createElement('pre')

  var btn = document.createElement('button')

  element.innerHTML = _.join([
    'Hello webpack! ',
    '5 cubed is equal to ' + cube(5)
  ], '\n\n')

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