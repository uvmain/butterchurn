export interface BasePreset {
  baseVals: BaseVals
  init_eqs: () => Record<string, any>
  frame_eqs: (m: Record<string, any>) => Record<string, any>
  pixel_eqs: (m: Record<string, any>) => Record<string, any>
  waves: Array<{
    baseVals: BaseVals
    init_eqs: (m: Record<string, any>) => Record<string, any>
    frame_eqs: (m: Record<string, any>) => Record<string, any>
    point_eqs: string
  }>
  shapes: Array<{
    baseVals: BaseVals
    init_eqs: (m: Record<string, any>) => Record<string, any>
    frame_eqs: (m: Record<string, any>) => Record<string, any>
    point_eqs?: string
  }>
  warp: string
  comp: string
}

export interface BaseVals {
  [key: string]: number
}
