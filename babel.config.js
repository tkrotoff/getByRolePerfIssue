// @ts-check

module.exports = {
  // https://github.com/babel/babel/issues/12731#issuecomment-819158117
  sourceType: 'unambiguous',

  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript'
  ]
};
