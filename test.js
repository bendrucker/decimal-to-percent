'use strict'

var test = require('tape')
var toPercent = require('./')

test(function (t) {
  t.equal(toPercent(0), '0%')

  t.equal(toPercent(0.01), '1%')
  t.equal(toPercent(0.01001), '1.001%')
  t.equal(toPercent(0.00001), '0.001%')

  t.equal(toPercent(0.1), '10%')
  t.equal(toPercent(0.25), '25%')

  t.equal(toPercent(-0.25), '-25%')

  t.equal(toPercent(0.08754), '8.754%')
  t.equal(toPercent(0.9999), '99.99%')

  t.equal(toPercent(2), '200%')

  t.end()
})
