// completely fake an uncomplete Store
export class Store {
  // register a getter
  getter(name, fn) {
    return (...args) => {
      console.log('getter', name)
      fn(...args)
    }
  }
}

