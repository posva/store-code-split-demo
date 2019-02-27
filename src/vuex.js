export class Store {
  // register a getter
  getter(name, fn) {
    return (...args) => {
      console.log('getter', name)
      fn(...args)
    }
  }
}

export class Module {}
