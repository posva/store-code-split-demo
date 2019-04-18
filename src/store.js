import { Store } from './vuex'

const store = new Store({})
const getter = store.getter.bind(store)

export { store, getter }
