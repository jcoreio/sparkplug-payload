const { describe, it } = require('mocha')
const { expect } = require('chai')
const { encodePayload, decodePayload } = require('../spBv1.0')

function checkRoundTrip(value, type, expected) {
  const decoded = decodePayload(
    encodePayload({
      timestamp: Date.now(),
      metrics: [{ value, type }],
    })
  ).metrics[0]

  if (expected !== expected) expect(decoded.value).to.be.NaN
  else
    expect(decoded.value).to.deep.equal(
      expected !== undefined ? expected : value
    )
  expect(decoded.type).to.equal(type)
}

const floatBuf = Buffer.alloc(4)
function float(intBits) {
  floatBuf.writeUInt32BE(intBits, 0)
  return floatBuf.readFloatBE(0)
}

describe(`spBv1.0`, function () {
  it(`negative integers bug is fixed`, function () {
    for (const [value, type] of [
      [-0x7f - 1, 'Int8'],
      [-0x7fff - 1, 'Int16'],
      [-0x7fffffff - 1, 'Int32'],
    ]) {
      checkRoundTrip(value, type)
    }
  })
  it(`UInt32`, function () {
    checkRoundTrip(0xffffffff, 'UInt32')
    checkRoundTrip(987234.583472, 'UInt32', 987234)
  })
  it(`UInt64`, function () {
    checkRoundTrip(0xffffffffffffffffn, 'UInt64')
    checkRoundTrip(0xfffffffffffffffen, 'UInt64')
    checkRoundTrip(0n, 'UInt64')
    checkRoundTrip(null, 'UInt64')
    checkRoundTrip(987234.583472, 'UInt64', 987234n)
  })
  it(`Int64`, function () {
    checkRoundTrip(-0x7fffffffffffffffn - 1n, 'Int64')
    checkRoundTrip(0x7ffffffffffffffen, 'Int64')
    checkRoundTrip(null, 'Int64')
    checkRoundTrip(987234.583472, 'Int64', 987234n)
    checkRoundTrip(-987234.583472, 'Int64', -987234n)
  })
  it(`Int32 issue`, function () {
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
  it(`fractional value for Int8`, function () {
    const value = -38.4
    checkRoundTrip(value, 'Int32', -38)
  })
  it(`Float`, function () {
    checkRoundTrip(float(0xff7fffff), 'Float')
    checkRoundTrip(float(0x80000001), 'Float')
    checkRoundTrip(float(0x00000001), 'Float')
    checkRoundTrip(float(0x7f7fffff), 'Float')
    checkRoundTrip(float(0x7fc00000), 'Float', NaN)
  })
  it(`DateTime`, function () {
    checkRoundTrip(123412341n, 'DateTime')
    checkRoundTrip(
      new Date('Jan 1 2021'),
      'DateTime',
      BigInt(new Date('Jan 1 2021').getTime()) // eslint-disable-line no-undef
    )
  })
  it(`Bytes`, function () {
    checkRoundTrip(Buffer.from([0, 1, 2, 3]), 'Bytes')
  })
  it(`File`, function () {
    checkRoundTrip(Buffer.from([0, 1, 2, 3]), 'File')
  })
})
