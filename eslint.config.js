import antfu from '@antfu/eslint-config'

export default antfu({
  vue: false,
  unocss: false,
  rules: {
    'no-console': 'off',
    'brace-style': ['error', 'stroustrup'],
    'curly': ['off'],
    'test/no-identical-title': 'off',
    'no-new': 'off',
    'test/prefer-lowercase-title': 'off',
    'test/no-import-node-test': 'off',
    'no-undef': 'off',
  },
}, {
  ignores: [
    'experiments/wasm-eel/presets/',
    'dist/',
    'node_modules/',
    'src/assemblyscript/presetFunctions.ts',
  ],
})
