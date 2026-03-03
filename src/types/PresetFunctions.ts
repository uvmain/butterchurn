export interface PresetFunctionsModule {
  exports: {
    createFloat32Array: (size: number) => number
    __getFloat32ArrayView: (ptr: number) => Float32Array
    runPixelEquations: (arrayPtr: number, ...args: any[]) => void
    saveQs: () => void
    restoreQs: () => void
    saveTs: () => void
    restoreTs: () => void
  }
}
