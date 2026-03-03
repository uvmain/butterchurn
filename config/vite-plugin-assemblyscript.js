import buffer from 'node:buffer'
import asc from 'assemblyscript/asc'
import { createFilter } from 'vite'

function assemblyscriptPlugin(options = {}) {
  const filter = createFilter(options.include || /\.as$/, options.exclude)

  return {
    name: 'assemblyscript',
    enforce: 'pre',

    async transform(code, id) {
      if (!filter(id)) {
        return null
      }

      await asc.ready
      const result = await asc.compileString(code, {
        optimize: true,
        optimizeLevel: 3,
        runtime: 'stub',
        pedantic: true,
        // noUnsafe: true,
      })

      const binary = result.binary || result
      const stderr = result.stderr || result.error

      if (stderr && stderr.length > 0) {
        this.error(stderr.toString())
        return
      }

      if (!binary) {
        this.error('AssemblyScript compilation failed: no binary output')
        return
      }

      const output = `
var data = "${buffer.Buffer.from(binary).toString('base64')}";
export default () => data;
`

      return {
        code: output,
        map: null,
      }
    },
  }
}

export default assemblyscriptPlugin
