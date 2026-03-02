import buffer from 'node:buffer'
import { createFilter } from '@rollup/pluginutils'
import asc from 'assemblyscript/cli/asc'

function assemblyscriptPlugin(options = {}) {
  const filter = createFilter(options.include || /\.ts$/, options.exclude)

  return {
    name: 'assemblyscript',

    async transform(code, id) {
      if (!filter(id)) {
        return null
      }

      await asc.ready
      const { binary, stderr } = asc.compileString(code, {
        optimize: true,
        optimizeLevel: 3,
        runtime: 'none',
        pedantic: true,
        // noUnsafe: true,
      })

      if (stderr.toString()) {
        this.error(stderr.toString())
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
