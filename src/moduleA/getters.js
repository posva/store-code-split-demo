import { getter } from '../store'

// export const someGetter = () => {
//   console.log('Im a getter')
// }

export const someGetter = getter('someGetter', () => {
  console.log('Im a getter')
})
