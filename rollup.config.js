import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import alias from 'rollup-plugin-alias';
import replace from 'rollup-plugin-replace'
import scss from 'rollup-plugin-scss'

export default {
  input: 'main.jsx',
    output: {
      name: 'app',
      format: 'umd',
      file: 'bundle.js'
    },
  plugins: [
    alias({
      'react': __dirname + '/node_modules/nervjs/dist/index.esm.js',
      'react-dom': __dirname + '/node_modules/nervjs/dist/index.esm.js'
    }),
    scss({
      output: true
    }),
    babel({
      babelrc: false,
      plugins: [
        'babel-plugin-transform-react-jsx',
        ['module-resolver', {
          'alias': {
            'nerv': 'nervjs/dist/index.esm.js',
            'react': 'nervjs/dist/index.esm.js',
            'react-dom': 'nervjs/dist/index.esm.js'
          }
        }],
        'transform-class-properties',
        'transform-object-rest-spread',
        'external-helpers'
      ]
    }),
    nodeResolve(),
    replace({'process.env.NODE_ENV': JSON.stringify('development')}),
    commonjs()]
}
