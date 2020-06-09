const { describe, it } = require('mocha')
const { expect } = require('chai')
const { encodePayload, decodePayload } = require('../spBv1.0')

describe(`spBv1.0`, function() {
  it(`negative integers bug is fixed`, function() {
    for (const [value, type] of [
      [-0x7f - 1, 'Int8'],
      [-0x7fff - 1, 'Int16'],
      [-0x7fffffff - 1, 'Int32'],
    ]) {
      expect(
        decodePayload(
          encodePayload({
            timestamp: Date.now(),
            metrics: [{ value, type }],
          })
        ).metrics[0].value
      ).to.equal(value)
    }
  })
  it(`UInt32`, function() {
    const value = 0xffffffff
    expect(
      decodePayload(
        encodePayload({
          timestamp: Date.now(),
          metrics: [{ value, type: 'UInt32' }],
        })
      ).metrics[0].value
    ).to.equal(value)
  })
  it(`Int32 issue`, function() {
    for (const value of [
      -0x7fffffff - 1,
      -0x7fffffff,
      0,
      0x7ffffffe,
      0x7fffffff,
    ]) {
      expect(
        decodePayload(
          encodePayload({
            timestamp: Date.now(),
            metrics: [{ value, type: 'Int32' }],
          })
        ).metrics[0].value
      ).to.equal(value)
    }
  })
})
