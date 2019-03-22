/* eslint-env commonjs */
module.exports = `const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    alias: {
      Root: path.resolve(__dirname),
      App: path.resolve(__dirname, 'src/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Actions: path.resolve(__dirname, 'src/actions/'),
      Const: path.resolve(__dirname, 'src/const/'),
      Helpers: path.resolve(__dirname, 'src/helpers/'),
      Reducers: path.resolve(__dirname, 'src/reducers/'),
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.join(__dirname, '/../server/public'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?scss',
            options: {
              importLoaders: 1,
              modules: "global",
            }
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
    ]
  },
};`;
