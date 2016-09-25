'use strict'

var roundPrecision = require('round-precision')
var precision = require('precision')

module.exports = decimalToPercent

function decimalToPercent (decimal) {
  return roundPrecision(decimal * 100, precision(decimal)) + '%'
}
