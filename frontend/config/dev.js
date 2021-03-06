'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./webpack.prod')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})