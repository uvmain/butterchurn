import { resolve } from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vite'
import assemblyscriptPlugin from './config/vite-plugin-assemblyscript.js'

export default defineConfig(() => {
  return {
    plugins: [
      assemblyscriptPlugin({
        include: /\.ts$/,
      }),
    ],
    build: {
      lib: {
        entry: {
          butterchurn: resolve(process.cwd(), 'src/index.js'),
          isSupported: resolve(process.cwd(), 'src/isSupported.js'),
        },
        formats: ['es'],
      },
      rollupOptions: {
        external: [],
        output: {
          dir: 'dist',
          format: 'es',
        },
      },
      sourcemap: true,
      target: 'es2020',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(process.cwd(), 'src'),
      },
    },
  }
})
