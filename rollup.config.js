import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import { terser } from 'rollup-plugin-terser'
import packageJson from './package.json'

export default {
  input: 'src/index.tsx',
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true
    }),
    postcss({
      extract: true,
      minimize: true,
      plugins: [autoprefixer()]
    }),
    terser()
  ],
  output: {
    file: packageJson.main,
    format: 'cjs',
    sourcemap: true
  }
}
