import { Store } from './vuex'
import a from './moduleA'

const store = new Store({
  modules: { a },
})
const getter = store.getter.bind(store)

export { store, getter }
