import { store } from './store'

console.log('store', store)

import('./usingModuleA').then(() => {
  console.log('moduleA loaded')
})
