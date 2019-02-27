import { store } from './store'

console.log('store', store)

const loadModule = () =>
  import(/* webpackPrefetch: true */ './usingModuleA').then(() => {
    console.log('moduleA loaded')
  })

const button = document.createElement('button')
button.innerText = 'Load'

document.body.appendChild(button)

button.addEventListener('click', loadModule)
