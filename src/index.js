import { store } from './store'

console.log('store', store)

let button = document.createElement('button')
button.innerText = 'Load action'

document.body.appendChild(button)
button.addEventListener('click', () =>
  import(/* webpackPrefetch: true */ './usingModuleA').then(({ execute }) => {
    console.log('moduleA loaded')
    execute()
  })
)

// NOTE: uncommenting will create another bundle that will include all actions and getters

// button = document.createElement('button')
// button.innerText = 'Load other action'

// document.body.appendChild(button)
// button.addEventListener('click', () =>
//   import(/* webpackPrefetch: true */ './usingOtherAction').then(
//     ({ execute }) => {
//       console.log('moduleA loaded')
//       execute()
//     }
//   )
// )
