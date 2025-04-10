import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    entries: ['./src/index.ts', './src/cli.ts'],
    clean: true,
    declaration: false,
    failOnWarn: false,
    externals: [],
    rollup: {
      esbuild: {
        minify: false,
      },
      inlineDependencies: true,
    },
    hooks: {},
  },
])
