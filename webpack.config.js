module.exports = env => ({
  mode: env.mode,
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /moduleA\/.*\.js$/,
        sideEffects: false,
      },
    ],
  },
})
