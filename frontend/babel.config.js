module.exports = {
  presets: [
    '@babel/preset-env',
    {
      targets: {
        browsers: ['>0.1%', 'ie >= 10', 'Chrome >= 32', 'Firefox >= 31'],
      },
      useBuiltIns: 'usage',
    },
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
}
