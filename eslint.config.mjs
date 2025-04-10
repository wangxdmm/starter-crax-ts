import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
  },
  {
    ignores: [
      '*.cjs',
      '**/*.css',
      '**/dist',
      '**/temp',
      '**/volar.d.ts',
      '**/env.d.ts',
      '**/pnpm-lock.yaml',
      'packages/*/*.mjs',
      'packages/*/types',
      'tools/*/types',
    ],
  },
)
