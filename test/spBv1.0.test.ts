import { describe, it } from 'mocha'
import { expect } from 'chai'
import { encodePayload, decodePayload, InputPayload } from '../src/spBv1.0'
import Long from 'long'

function checkValueRoundTrip(value, type, expected = value) {
  const decoded = decodePayload(
    encodePayload({
      timestamp: Date.now(),
      metrics: [{ value, type }],
    })
  ).metrics[0]

  if (expected !== expected) expect(decoded.value).to.be.NaN
  else expect(decoded.value).to.deep.equal(expected)
  expect(decoded.type).to.equal(type)
}

function checkRoundTrip(payload: InputPayload, expected = payload) {
  const decoded = decodePayload(encodePayload(payload))
  expect(decoded).to.deep.equal(expected)
}

const floatBuf = Buffer.alloc(4)
function float(intBits) {
  floatBuf.writeUInt32BE(intBits, 0)
  return floatBuf.readFloatBE(0)
}

describe(`spBv1.0`, function () {
  it(`round trip of all fields`, function () {
    checkRoundTrip({
      timestamp: BigInt(Date.now()),
      seq: 98723n,
      uuid: '12341234-1234-1234-1234-123412341234',
      body: Buffer.from([1, 2, 3, 4]),
      metrics: [
        { type: 'UInt8', value: 0xff },
        { type: 'UInt16', value: 0xffff },
        { type: 'UInt32', value: 0xffffffff },
        { type: 'UInt64', value: 0xffffffffffffffffn },
        { type: 'Int8', value: 0x7f },
        { type: 'Int16', value: 0x7fff },
        { type: 'Int32', value: 0x7fffffff },
        { type: 'Int64', value: 0x7fffffffffffffffn },
        { type: 'Float', value: 123.45600128173828 },
        { type: 'Double', value: 123.456 },
        { type: 'String', value: 'hello' },
        { type: 'Text', value: 'hello' },
        { type: 'UUID', value: '12341234-1234-1234-1234-123412341234' },
        { type: 'Boolean', value: true },
        { type: 'DateTime', value: BigInt(Date.now()) },
        { type: 'UInt8', value: null },
        { type: 'UInt16', value: null },
        { type: 'UInt32', value: null },
        { type: 'UInt64', value: null },
        { type: 'Int8', value: null },
        { type: 'Int16', value: null },
        { type: 'Int32', value: null },
        { type: 'Int64', value: null },
        { type: 'Float', value: null },
        { type: 'Double', value: null },
        { type: 'String', value: null },
        { type: 'Text', value: null },
        { type: 'UUID', value: null },
        { type: 'Boolean', value: null },
        { type: 'DateTime', value: null },
        {
          value: 1,
          type: 'Int8',
          name: 'foo',
          alias: 1234n,
          timestamp: 2345n,
          isHistorical: true,
          isTransient: false,
          metadata: {
            isMultiPart: false,
            contentType: 'foo',
            size: 3456n,
            seq: 4567n,
            fileName: 'blah',
            fileType: 'foog',
            md5: 'alkjs',
            description: 'lkajsdfak',
          },
          properties: {
            a0: { type: 'UInt8', value: null },
            b0: { type: 'UInt16', value: null },
            c0: { type: 'UInt32', value: null },
            d0: { type: 'UInt64', value: null },
            e0: { type: 'Int8', value: null },
            f0: { type: 'Int16', value: null },
            g0: { type: 'Int32', value: null },
            h0: { type: 'Int64', value: null },
            hf0: { type: 'Float', value: null },
            hd0: { type: 'Double', value: null },
            i0: { type: 'String', value: null },
            j0: { type: 'Text', value: null },
            k0: { type: 'UUID', value: null },
            l0: { type: 'Boolean', value: null },
            m0: { type: 'DateTime', value: null },
            a: { type: 'UInt8', value: 0xff },
            b: { type: 'UInt16', value: 0xffff },
            c: { type: 'UInt32', value: 0xffffffff },
            d: { type: 'UInt64', value: 0xffffffffffffffffn },
            e: { type: 'Int8', value: 0x7f },
            f: { type: 'Int16', value: 0x7fff },
            g: { type: 'Int32', value: 0x7fffffff },
            h: { type: 'Int64', value: 0x7fffffffffffffffn },
            hf: { type: 'Float', value: 123.45600128173828 },
            hd: { type: 'Double', value: 123.456 },
            i: { type: 'String', value: 'hello' },
            j: { type: 'Text', value: 'hello' },
            k: { type: 'UUID', value: '12341234-1234-1234-1234-123412341234' },
            l: { type: 'Boolean', value: true },
            m: { type: 'DateTime', value: BigInt(Date.now()) },
            n: {
              type: 'PropertySet',
              value: {
                a: { type: 'UInt8', value: 0xff },
                b: { type: 'UInt16', value: 0xffff },
              },
            },
            n0: {
              type: 'PropertySet',
              value: null,
            },
            n00: {
              type: 'PropertySet',
              value: {},
            },
            o: {
              type: 'PropertySetList',
              value: [
                {
                  a: { type: 'UInt8', value: 0xff },
                  b: { type: 'UInt16', value: 0xffff },
                },
                {
                  c: { type: 'UInt32', value: 0xffffffff },
                  d: { type: 'UInt64', value: 0xffffffffffffffffn },
                },
              ],
            },
            o0: {
              type: 'PropertySetList',
              value: null,
            },
            o00: {
              type: 'PropertySetList',
              value: [],
            },
          },
        },
        {
          value: {
            numOfColumns: 2,
            columns: ['a', 'b'],
            types: ['String', 'Boolean'],
            rows: [
              ['hello', true],
              ['world', false],
            ],
          },
          type: 'DataSet',
        },
        {
          type: 'Template',
          value: {
            metrics: [{ type: 'Float', value: 123.45600128173828 }],
            version: '2',
            isDefinition: false,
            templateRef: 'blargh',
            parameters: [
              { type: 'UInt8', value: 0xff },
              { name: 'b', type: 'UInt16', value: 0xffff },
              { name: 'c', type: 'UInt32', value: 0xffffffff },
              { name: 'd', type: 'UInt64', value: 0xffffffffffffffffn },
              { name: 'e', type: 'Int8', value: 0x7f },
              { name: 'f', type: 'Int16', value: 0x7fff },
              { name: 'g', type: 'Int32', value: 0x7fffffff },
              { name: 'h', type: 'Int64', value: 0x7fffffffffffffffn },
              { name: 'hf', type: 'Float', value: 123.45600128173828 },
              { name: 'hd', type: 'Double', value: 123.456 },
              { name: 'i', type: 'String', value: 'hello' },
              { name: 'j', type: 'Text', value: 'hello' },
              {
                name: 'k',
                type: 'UUID',
                value: '12341234-1234-1234-1234-123412341234',
              },
              { name: 'l', type: 'Boolean', value: true },
              { name: 'm', type: 'DateTime', value: BigInt(Date.now()) },
            ],
          },
        },
      ],
    })
  })
  it(`negative integers bug is fixed`, function () {
    for (const [value, type] of [
      [-0x7f - 1, 'Int8'],
      [-0x7fff - 1, 'Int16'],
      [-0x7fffffff - 1, 'Int32'],
    ]) {
      checkValueRoundTrip(value, type)
    }
  })
  it(`UInt8`, function () {
    for (const value of [0, 0xff]) {
      checkValueRoundTrip(value, 'UInt8')
    }
    checkValueRoundTrip(234.182, 'UInt8', 234)
  })
  it(`UInt16`, function () {
    for (const value of [0, 0xffff]) {
      checkValueRoundTrip(value, 'UInt16')
    }
    checkValueRoundTrip(234.182, 'UInt16', 234)
  })
  it(`UInt32`, function () {
    checkValueRoundTrip(0xffffffff, 'UInt32')
    checkValueRoundTrip(987234.583472, 'UInt32', 987234)
  })
  it(`UInt64`, function () {
    checkValueRoundTrip(0xffffffffffffffffn, 'UInt64')
    checkValueRoundTrip(0xfffffffffffffffen, 'UInt64')
    checkValueRoundTrip(0n, 'UInt64')
    checkValueRoundTrip(null, 'UInt64')
    checkValueRoundTrip(987234.583472, 'UInt64', 987234n)
  })
  it(`Int8`, function () {
    for (const value of [-0x7f - 1, 0x7f]) {
      checkValueRoundTrip(value, 'Int8')
    }
    checkValueRoundTrip(234.182, 'Int8', 234)
  })
  it(`Int16`, function () {
    for (const value of [-0x7fff - 1, 0xffff]) {
      checkValueRoundTrip(value, 'Int16')
    }
    checkValueRoundTrip(234.182, 'Int16', 234)
  })
  it(`Int64`, function () {
    checkValueRoundTrip(-0x7fffffffffffffffn - 1n, 'Int64')
    checkValueRoundTrip(0x7ffffffffffffffen, 'Int64')
    checkValueRoundTrip(null, 'Int64')
    checkValueRoundTrip(987234.583472, 'Int64', 987234n)
    checkValueRoundTrip(Long.fromNumber(987234), 'Int64', 987234n)
    checkValueRoundTrip(-987234.583472, 'Int64', -987234n)
  })
  it(`Int32 issue`, function () {
    for (const value of [
      -0x7fffffff - 1,
      -0x7fffffff,
      0,
      0x7ffffffe,
      0x7fffffff,
    ]) {
      checkValueRoundTrip(value, 'Int32')
    }
  })
  it(`fractional value for Int8`, function () {
    const value = -38.4
    checkValueRoundTrip(value, 'Int32', -38)
  })
  it(`Float`, function () {
    checkValueRoundTrip(float(0xff7fffff), 'Float')
    checkValueRoundTrip(float(0x80000001), 'Float')
    checkValueRoundTrip(float(0x00000001), 'Float')
    checkValueRoundTrip(float(0x7f7fffff), 'Float')
    checkValueRoundTrip(float(0x7fc00000), 'Float', NaN)
    checkValueRoundTrip(null, 'Float')
  })
  it(`DateTime`, function () {
    checkValueRoundTrip(123412341, 'DateTime', 123412341n)
    checkValueRoundTrip(123412341n, 'DateTime')
    checkValueRoundTrip(
      new Date('Jan 1 2021'),
      'DateTime',
      BigInt(new Date('Jan 1 2021').getTime()) // eslint-disable-line no-undef
    )
  })
  it(`Bytes`, function () {
    checkValueRoundTrip(Buffer.from([0, 1, 2, 3]), 'Bytes')
  })
  it(`File`, function () {
    checkValueRoundTrip(Buffer.from([0, 1, 2, 3]), 'File')
  })
})
