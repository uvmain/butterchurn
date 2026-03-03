export default class Utils {
  static atan2(x: number, y: number): number {
    let a = Math.atan2(x, y)
    if (a < 0) {
      a += 2 * Math.PI
    }
    return a
  }

  static cloneVars(vars: Record<string, any>): Record<string, any> {
    return Object.assign({}, vars)
  }

  static range(start: number, end?: number): number[] {
    if (end === undefined) {
      return Array.from({ length: start }, (_, i) => i)
    }

    return Array.from({ length: end - start }, (_, i) => i + start)
  }

  static pick(obj: Record<string, any>, keys: string[]): Record<string, any> {
    const newObj: Record<string, any> = {}
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      newObj[key] = obj[key] || 0
    }
    return newObj
  }

  static omit(obj: Record<string, any>, keys: string[]): Record<string, any> {
    const newObj = Object.assign({}, obj)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      delete newObj[key]
    }
    return newObj
  }

  static setWasm(wasmGlobals: Record<string, WebAssembly.Global>, obj: Record<string, any>, keys: string[]) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]

      wasmGlobals[key].value = obj[key]
    }
  }

  static pickWasm(wasmGlobals: Record<string, WebAssembly.Global>, keys: string[]) {
    const newObj: Record<string, any> = {}
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      newObj[key] = wasmGlobals[key].value
    }
    return newObj
  }
}
