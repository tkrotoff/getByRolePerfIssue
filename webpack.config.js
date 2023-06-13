// @ts-check

/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('node:path');

/**
 * @param {any} _webpackEnv
 * @param {any} argv
 */
module.exports = (_webpackEnv, argv) => {
  /** @type {import('webpack').Configuration} */
  const config = {
    entry: {
      App: './src/App.tsx'
    },

    output: {
      path: path.resolve('build')
    },

    devtool: 'source-map',

    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },

    module: {
      rules: [
        {
          test: /\.(js|tsx?)$/,
          loader: 'babel-loader'
        },
        {
          test: /\.html$/,
          type: 'asset/resource',
          generator: { filename: '[name][ext]' }
        }
      ]
    }
  };

  return config;
};
