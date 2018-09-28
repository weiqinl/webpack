import printMe from './print.js'
import './styles.css'
import {
  cube
} from './math'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

async function getComponent() {
  /**
   * 在注释中使用 webpackChunkName。
   * 这样做会导致我们的bundle被命名为 lodash.bundle.js,而不是[id].bundle.js
   */
  // return import( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
  const element = document.createElement('div')
  // _ = _.default
  const _ = await import( /* webpackChunkName: "lodash" */ 'lodash')

  element.innerHTML = _.join(['Hello', 'webpack', '5 cubed is equal to ' + cube(5)], ' ')

  var btn = document.createElement('button')

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

getComponent().then(component => {
  document.body.appendChild(component)
})

// function component() {
//   let element = document.createElement('pre')

//   var btn = document.createElement('button')

//   element.innerHTML = _.join([
//     'Hello webpack! ',
//     '5 cubed is equal to ' + cube(5)
//   ], '\n\n')

//   btn.innerHTML = 'Click me and check the console!'
//   btn.onclick = printMe

//   element.appendChild(btn)

//   return element
// }
// let element = component() // 当print.js改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element)

// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printMe module!-weiqinl')
//     // printMe()
//     document.body.removeChild(element)
//     element = component() // 重新渲染页面后， component 更新 click 事件处理
//     document.body.appendChild(element)
//   })
// }

let func = () => {
  console.log('weiqinl')
}
func()