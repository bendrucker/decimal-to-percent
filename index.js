'use strict'

const roundPrecision = require('round-precision')
const precision = require('precision')

module.exports = decimalToPercent

function decimalToPercent (decimal) {
  return roundPrecision(decimal * 100, precision(decimal)) + '%'
}
