const react = [
  "axios @types/axios",
  "react @types/react",
  "react-dom @types/react-dom",
  "react-router-dom @types/react-router-dom"
];

const redux = [
  ...react,
  "@types/react-redux",
  "react-redux",
  "redux",
  "redux-thunk",
];

const dev = [
  "@babel/cli",
  "@babel/core",
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-syntax-import-meta",
  "@babel/plugin-transform-typescript",
  "@babel/preset-env",
  "@babel/preset-react",
  "@babel/preset-typescript",
  "@braces/tslint-config",
  "autoprefixer",
  "babel-loader",
  "css-loader",
  "express",
  "html-webpack-plugin",
  "node-sass",
  "postcss-loader",
  "postcss-scss",
  "sass-loader",
  "style-loader",
  "ts-loader",
  "tslint",
  "typescript",
  "webpack",
  "webpack-cli",
];

module.exports = {
  react,
  redux,
  dev,
};



