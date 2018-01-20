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
    scss({
      output: true
    }),
    babel({
      babelrc: false,
      plugins: [
        'babel-plugin-transform-react-jsx',
        ['module-resolver', {
          'alias': {
            'react': 'react/cjs/react.development.js',
            'react-dom': 'react-dom/cjs/react-dom.development.js'
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
