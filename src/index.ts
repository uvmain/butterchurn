import type { VisualiserOptions } from './utils/rngContext'
import Visualizer from './visualizer'
import 'ecma-proposal-math-extensions'
import './presetBase'

export default class Butterchurn {
  static createVisualizer(context: AudioContext, canvas: HTMLCanvasElement, opts: VisualiserOptions = {}) {
    return new Visualizer(context, canvas, opts)
  }
}
