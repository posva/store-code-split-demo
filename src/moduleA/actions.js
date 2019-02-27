import { someGetter } from './getters'

export const someAction = () => {
  console.log('loggin someGetter', someGetter())
  console.log('Im an action')
}

export const otherAction = () => {
  console.log('Im another action')
}
