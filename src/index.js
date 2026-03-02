import Visualizer from './visualizer'
import 'ecma-proposal-math-extensions'
import './presetBase'

export default class Butterchurn {
  static createVisualizer(context, canvas, opts) {
    return new Visualizer(context, canvas, opts)
  }
}
