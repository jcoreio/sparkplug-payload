const { describe, it } = require('mocha')
const { expect } = require('chai')
const { encodePayload, decodePayload } = require('../spBv1.0')

function checkRoundTrip(value, type, expected) {
  const actual = decodePayload(
    encodePayload({
      timestamp: Date.now(),
      metrics: [{ value, type }],
    })
  ).metrics[0].value

  expect(actual).to.equal(expected !== undefined ? expected : value)
}

describe(`spBv1.0`, function() {
  it(`negative integers bug is fixed`, function() {
    for (const [value, type] of [
      [-0x7f - 1, 'Int8'],
      [-0x7fff - 1, 'Int16'],
      [-0x7fffffff - 1, 'Int32'],
    ]) {
      checkRoundTrip(value, type)
    }
  })
  it(`UInt32`, function() {
    checkRoundTrip(0xffffffff, 'UInt32')
  })
  it(`UInt64`, function() {
    checkRoundTrip(0xffffffffffffffffn, 'UInt64')
    checkRoundTrip(0xfffffffffffffffen, 'UInt64')
    checkRoundTrip(0n, 'UInt64')
    checkRoundTrip(null, 'UInt64')
  })
  it(`Int64`, function() {
    checkRoundTrip(-0x7fffffffffffffffn - 1n, 'Int64')
    checkRoundTrip(0x7ffffffffffffffen, 'Int64')
    checkRoundTrip(null, 'Int64')
  })
  it(`Int32 issue`, function() {
    for (const value of [
      -0x7fffffff - 1,
      -0x7fffffff,
      0,
      0x7ffffffe,
      0x7fffffff,
    ]) {
      checkRoundTrip(value, 'Int32')
    }
  })
  it(`fractional value for Int8`, function() {
    const value = -38.4
    checkRoundTrip(value, 'Int32', -38)
  })
})
