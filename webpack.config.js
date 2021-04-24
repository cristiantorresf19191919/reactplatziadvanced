const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const projectRoot = path.resolve(__dirname, '../')
module.exports = {
  devtool: 'inline-source-map',
  mode:'development',
  output: {
    filename: 'app.bundle.js',
    publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  // resolve: {
  //   modules: [path.join(projectRoot, 'node_modules')]
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: [['@babel/preset-env', { targets: { node: '10' } }], '@babel/preset-react']
            // eslint-disable-next-line quotes
            // eslint-disable-next-line quote-props
          }
        }
      }
    ]
  }
}
