import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    entries: ['./src/index.ts'],
    clean: true,
    declaration: false,
    failOnWarn: false,
    rollup: {
      esbuild: {
        minify: false,
      },
      inlineDependencies: true,
    },
    // inline libs
    externals: [],
    hooks: {
      'rollup:options': (_, options) => {
        options.plugins.push()
      },
    },
  },
])
