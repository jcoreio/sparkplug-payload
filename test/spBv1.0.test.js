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
})
