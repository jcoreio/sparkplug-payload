/********************************************************************************
 * Copyright (c) 2016-2018 Cirrus Link Solutions and others
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Cirrus Link Solutions - initial implementation
 *   JCore Systems - bug fixes
 ********************************************************************************/

import Long from 'long'

function hasOwnProperty<T>(obj: T, prop: keyof T): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

export type NumberDataType =
  | 'Int8'
  | 'Int16'
  | 'Int32'
  | 'Int64'
  | 'UInt8'
  | 'UInt16'
  | 'UInt32'
  | 'UInt64'
  | 'Float'
  | 'Double'

export type BigIntDataType = 'Int64' | 'UInt64'

export type StringDataType = 'String' | 'Text' | 'UUID'

export type MetaData = {
  isMultiPart?: boolean | null
  contentType?: string | null
  size?: bigint | null
  seq?: bigint | null
  fileName?: string | null
  fileType?: string | null
  md5?: string | null
  description?: string | null
}

export type Bytes = Uint8Array

export type NumberPropertyValue = {
  type: NumberDataType
  value?: number | null
}

export type BigIntPropertyValue = {
  type: BigIntDataType
  value?: bigint | null
}

export type StringPropertyValue = {
  type: StringDataType
  value?: string | null
}

export type BooleanPropertyValue = {
  type: 'Boolean'
  value?: boolean | null
}

export type DateTimePropertyValue = {
  type: 'DateTime'
  value?: bigint | null
}

export type PropertySetValue = {
  type: 'PropertySet'
  value?: PropertySet | null
}

export type PropertySetListValue = {
  type: 'PropertySetList'
  value?: Array<PropertySet> | null
}

export type PropertyValue =
  | NumberPropertyValue
  | BigIntPropertyValue
  | StringPropertyValue
  | BooleanPropertyValue
  | DateTimePropertyValue
  | PropertySetValue
  | PropertySetListValue

export type PropertyType = PropertyValue['type']

export type PropertySet = Record<string, PropertyValue>

export type MetricBase = {
  name?: string | null
  alias?: bigint | null
  timestamp?: bigint | null
  isHistorical?: boolean | null
  isTransient?: boolean | null
  metadata?: MetaData | null
  properties?: PropertySet | null
}

export type NumberMetric = MetricBase & {
  type: NumberDataType
  value?: number | null
}

export type BigIntMetric = MetricBase & {
  type: BigIntDataType
  value?: bigint | null
}

export type DateTimeMetric = MetricBase & {
  type: 'DateTime'
  value?: bigint | null
}

export type BooleanMetric = MetricBase & {
  type: 'Boolean'
  value?: boolean | null
}

export type StringMetric = MetricBase & {
  type: StringDataType
  value?: string | null
}

export type DataSetValueTypes = {
  Int8: number
  Int16: number
  Int32: number
  Int64: bigint
  UInt8: number
  UInt16: number
  UInt32: number
  UInt64: bigint
  Float: number
  Double: number
  Boolean: boolean
  String: string
  DateTime: bigint
  Text: string
  UUID: string
}

export type DataSetValueType = keyof DataSetValueTypes

export type Row = (number | bigint | string | boolean | null | undefined)[]

export type DataSet = {
  numOfColumns: number
  columns: string[]
  types: (keyof DataSetValueTypes)[]
  rows: Array<Row>
}

export type DataSetMetric = MetricBase & {
  type: 'DataSet'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: DataSet | null
}

export type Template = {
  metrics?: Metric[] | null
  version?: string | null
  isDefinition?: boolean | null
  templateRef?: string | null
  parameters?: Parameter[] | null
}

export type TemplateMetric = MetricBase & {
  type: 'Template'
  value?: Template | null
}

export type BytesMetric = MetricBase & {
  type: 'Bytes'
  value?: Bytes | null
}

export type FileMetric = MetricBase & {
  type: 'File'
  value?: Bytes | null
}

export type Metric =
  | NumberMetric
  | BigIntMetric
  | BooleanMetric
  | StringMetric
  | DateTimeMetric
  | DataSetMetric
  | TemplateMetric
  | BytesMetric
  | FileMetric

export type MetricDataType = Metric['type']

export type NumberParameter = {
  name?: string | null
  type: NumberDataType
  value?: number | null
}

export type BigIntParameter = {
  name?: string | null
  type: BigIntDataType
  value?: bigint | null
}

export type BooleanParameter = {
  name?: string | null
  type: 'Boolean'
  value?: boolean | null
}

export type StringParameter = {
  name?: string | null
  type: StringDataType
  value?: string | null
}

export type DateTimeParameter = {
  name?: string | null
  type: 'DateTime'
  value?: bigint | null
}

export type Parameter =
  | NumberParameter
  | BigIntParameter
  | BooleanParameter
  | StringParameter
  | DateTimeParameter

export type ParameterType = Parameter['type']

export type Payload = {
  timestamp: bigint
  seq?: bigint | null
  uuid?: string | null
  body?: Bytes | null
  metrics?: Array<Metric> | null
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type InputNumberDataType =
  | 'Int8'
  | 'Int16'
  | 'Int32'
  | 'Int64'
  | 'UInt8'
  | 'UInt16'
  | 'UInt32'
  | 'UInt64'
  | 'Float'
  | 'Double'

export type InputBigIntDataType = 'Int64' | 'UInt64'

export type InputStringDataType = 'String' | 'Text' | 'UUID'

export type InputMetaData = {
  isMultiPart?: boolean
  contentType?: string
  size?: InputInt64
  seq?: InputInt64
  fileName?: string
  fileType?: string
  md5?: string
  description?: string
}

export type InputBytes = Uint8Array | Buffer | Array<number>

export type InputNumberPropertyValue = {
  type: InputNumberDataType
  value?: number | null
}

export type InputBigIntPropertyValue = {
  type: InputBigIntDataType
  value?: InputInt64 | null
}

export type InputStringPropertyValue = {
  type: InputStringDataType
  value?: string | null
}

export type InputBooleanPropertyValue = {
  type: 'Boolean'
  value?: boolean | null
}

export type InputDateTimePropertyValue = {
  type: 'DateTime'
  value?: Date | InputInt64 | null
}

export type InputPropertySetValue = {
  type: 'PropertySet'
  value?: InputPropertySet | null
}

export type InputPropertySetListValue = {
  type: 'PropertySetList'
  value?: Array<InputPropertySet> | null
}

export type InputPropertyValue =
  | InputNumberPropertyValue
  | InputBigIntPropertyValue
  | InputStringPropertyValue
  | InputBooleanPropertyValue
  | InputDateTimePropertyValue
  | InputPropertySetValue
  | InputPropertySetListValue

export type InputPropertySet = Record<string, InputPropertyValue>

export type InputMetricBase = {
  name?: string
  alias?: InputInt64
  timestamp?: InputInt64
  isHistorical?: boolean
  isTransient?: boolean
  metadata?: InputMetaData
  properties?: InputPropertySet
}

export type InputNumberMetric = InputMetricBase & {
  type: InputNumberDataType
  value?: number | null
}

export type InputBigIntMetric = InputMetricBase & {
  type: InputBigIntDataType
  value?: InputInt64 | null
}

export type InputDateTimeMetric = InputMetricBase & {
  type: 'DateTime'
  value?: Date | InputInt64 | null
}

export type InputBooleanMetric = InputMetricBase & {
  type: 'Boolean'
  value?: boolean | null
}

export type InputStringMetric = InputMetricBase & {
  type: InputStringDataType
  value?: string | null
}

export type InputDataSetValueTypes = {
  Int8: number
  Int16: number
  Int32: number
  Int64: InputInt64
  UInt8: number
  UInt16: number
  UInt32: number
  UInt64: InputInt64
  Float: number
  Double: number
  Boolean: boolean
  String: string
  DateTime: Date | InputInt64
  Text: string
  UUID: string
}

export type InputDataSetValueType = keyof InputDataSetValueTypes

export type InputRow = (
  | InputInt64
  | boolean
  | string
  | Date
  | null
  | undefined
)[]

export type InputDataSet = {
  numOfColumns: number
  columns: string[]
  types: (keyof InputDataSetValueTypes)[]
  rows: Array<InputRow>
}

export type InputDataSetMetric = InputMetricBase & {
  type: 'DataSet'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: InputDataSet | null
}

export type InputTemplate = {
  metrics?: InputMetric[] | null
  version?: string | null
  isDefinition?: boolean | null
  templateRef?: string | null
  parameters?: InputParameter[] | null
}

export type InputTemplateMetric = InputMetricBase & {
  type: 'Template'
  value?: InputTemplate | null
}

export type InputBytesMetric = InputMetricBase & {
  type: 'Bytes'
  value?: InputBytes | null
}

export type InputFileMetric = InputMetricBase & {
  type: 'File'
  value?: InputBytes | null
}

export type InputMetric =
  | InputNumberMetric
  | InputBigIntMetric
  | InputBooleanMetric
  | InputStringMetric
  | InputDateTimeMetric
  | InputDataSetMetric
  | InputTemplateMetric
  | InputBytesMetric
  | InputFileMetric

export type InputNumberParameter = {
  name?: string
  type: InputNumberDataType
  value?: number | null
}

export type InputBigIntParameter = {
  name?: string
  type: InputBigIntDataType
  value?: InputInt64 | null
}

export type InputBooleanParameter = {
  name?: string
  type: 'Boolean'
  value?: boolean | null
}

export type InputStringParameter = {
  name?: string
  type: StringDataType
  value?: string | null
}

export type InputDateTimeParameter = {
  name?: string
  type: 'DateTime'
  value?: Date | InputInt64 | null
}

export type InputParameter =
  | InputNumberParameter
  | InputBigIntParameter
  | InputBooleanParameter
  | InputStringParameter
  | InputDateTimeParameter

export type InputPayload = {
  timestamp: InputInt64
  seq?: InputInt64
  uuid?: string
  body?: InputBytes
  metrics?: Array<InputMetric>
}

import { Payload as Proto } from './spBv1.0.proto.js'

const longBuf: Buffer | null =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typeof Buffer !== 'undefined' ? Buffer.alloc(8) : null

type InputInt64 = number | bigint | Long

const toLong: (value: InputInt64, signed?: boolean) => Long = longBuf
  ? (value: InputInt64, signed?: boolean): Long => {
      if (Long.isLong(value)) return value
      value = typeof value === 'bigint' ? value : BigInt(value - (value % 1)) // eslint-disable-line no-undef
      if (signed) longBuf.writeBigInt64BE(value, 0)
      else longBuf.writeBigUInt64BE(value, 0)
      return new Long(longBuf.readInt32BE(4), longBuf.readInt32BE(0))
    }
  : (value: InputInt64): Long =>
      Long.isLong(value)
        ? value
        : Long.fromString(
            (typeof value === 'bigint' ? value : value - (value % 1)).toString(
              16
            ),
            16
          )

const toBigInt: (value: number | bigint | Long, signed?: boolean) => bigint =
  longBuf
    ? (value: number | bigint | Long, signed?: boolean): bigint => {
        if (Long.isLong(value)) {
          longBuf.writeInt32BE(value.high, 0)
          longBuf.writeInt32BE(value.low, 4)
          return signed ? longBuf.readBigInt64BE(0) : longBuf.readBigUInt64BE(0)
        }
        return BigInt(value)
      }
    : (value: number | bigint | Long) => BigInt(value.toString()) // eslint-disable-line no-undef

function toMaybeLong(
  value: InputInt64 | null | undefined,
  signed?: boolean
): Long | null {
  return value == null ? null : toLong(value, signed)
}

function toMaybeBigInt(
  value: number | bigint | Long | null | undefined,
  signed?: boolean
): bigint | null {
  return value == null ? null : toBigInt(value, signed)
}

function toUint8Array(input: InputBytes): Uint8Array {
  return Array.isArray(input) ? Uint8Array.from(input) : input
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function encodeDataSet({
  numOfColumns,
  columns,
  types,
  rows,
}: InputDataSet): Proto.DataSet {
  const outTypes: number[] = []

  const paramIn:
    | InputNumberPropertyValue
    | InputBigIntPropertyValue
    | InputStringPropertyValue
    | InputBooleanPropertyValue
    | InputDateTimePropertyValue = { type: 'Int8', value: null }
  const paramOut: Proto.Template.IParameter = {}

  return Proto.DataSet.create({
    numOfColumns: toLong(numOfColumns),
    columns,
    types: outTypes,
    rows: rows.map((row) =>
      Proto.DataSet.Row.create({
        elements: row.map((e, i) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          paramIn.type = types[i] as any
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          paramIn.value = e as any
          setParameterValue(paramIn, paramOut)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          outTypes[i] = paramOut.type as any
          return Proto.DataSet.DataSetValue.create(paramOut)
        }),
      })
    ),
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function decodeDataSet({
  numOfColumns,
  columns,
  types,
  rows,
}: Proto.IDataSet): DataSet {
  const num = Long.isLong(numOfColumns)
    ? numOfColumns.toNumber()
    : numOfColumns || 0

  const outTypes: (keyof DataSetValueTypes)[] = []

  return {
    numOfColumns: num,
    columns: columns || [],
    types: outTypes,
    rows:
      rows?.map(
        ({ elements }) =>
          elements?.map((e, i) => {
            const decoded = decodeParameterValue(e, types?.[i])
            outTypes[i] = decoded.type
            return decoded.value
          }) || []
      ) || [],
  }
}

function encodeMetaData({ size, seq, ...rest }: InputMetaData): Proto.MetaData {
  return Proto.MetaData.create({
    ...rest,
    size: toMaybeLong(size),
    seq: toMaybeLong(seq),
  })
}

function decodeMetaData({ size, seq, ...rest }: Proto.IMetaData): MetaData {
  return {
    ...rest,
    size: size != null ? toBigInt(size) : undefined,
    seq: seq != null ? toBigInt(seq) : undefined,
  }
}

function setParameterValue(
  input:
    | InputNumberPropertyValue
    | InputBigIntPropertyValue
    | InputStringPropertyValue
    | InputBooleanPropertyValue
    | InputDateTimePropertyValue,
  output: {
    /** Parameter type */
    type?: number | null

    /** Parameter intValue */
    intValue?: number | null

    /** Parameter longValue */
    longValue?: number | Long | null

    /** Parameter floatValue */
    floatValue?: number | null

    /** Parameter doubleValue */
    doubleValue?: number | null

    /** Parameter booleanValue */
    booleanValue?: boolean | null

    /** Parameter stringValue */
    stringValue?: string | null

    /** Parameter extensionValue */
    extensionValue?: Proto.Template.Parameter.IParameterValueExtension | null
  }
) {
  switch (input.type.toUpperCase()) {
    case 'INT8':
      output.type = 1
      output.intValue = (input as InputNumberPropertyValue).value
      break
    case 'INT16':
      output.type = 2
      output.intValue = (input as InputNumberPropertyValue).value
      break
    case 'INT32':
      output.type = 3
      output.intValue = (input as InputNumberPropertyValue).value
      break
    case 'INT64': {
      output.type = 4
      output.longValue = toMaybeLong(
        (input as InputBigIntPropertyValue).value,
        true
      )
      break
    }
    case 'UINT8':
      output.type = 5
      output.intValue = (input as InputNumberPropertyValue).value
      break
    case 'UINT16':
      output.type = 6
      output.intValue = (input as InputNumberPropertyValue).value
      break
    case 'UINT32':
      output.type = 7
      output.intValue = (input as InputNumberPropertyValue).value
      break
    case 'UINT64': {
      output.type = 8
      output.longValue = toMaybeLong(
        (input as InputBigIntPropertyValue).value,
        false
      )
      break
    }
    case 'FLOAT':
      output.type = 9
      output.floatValue = (input as InputNumberPropertyValue).value
      break
    case 'DOUBLE':
      output.type = 10
      output.doubleValue = (input as InputNumberPropertyValue).value
      break
    case 'BOOLEAN':
      output.type = 11
      output.booleanValue = (input as InputBooleanPropertyValue).value
      break
    case 'STRING':
      output.type = 12
      output.stringValue = (input as InputStringPropertyValue).value
      break
    case 'DATETIME': {
      output.type = 13
      const pv = input as InputBigIntPropertyValue
      output.longValue = pv.value == null ? null : toLong(pv.value, false)
      break
    }
    case 'TEXT':
      output.type = 14
      output.stringValue = (input as InputStringPropertyValue).value
      break
    case 'UUID':
      output.type = 15
      output.stringValue = (input as InputStringPropertyValue).value
      break
    default:
      throw new Error(`invalid type: ${input.type}`)
  }
}

function encodeParameter(p: InputParameter): Proto.Template.Parameter {
  const newParameter = Proto.Template.Parameter.create({
    name: p.name,
  })
  setParameterValue(p, newParameter)
  return newParameter
}

function decodeParameterValue(
  p: {
    /** Parameter type */
    type?: number | null

    /** Parameter intValue */
    intValue?: number | null

    /** Parameter longValue */
    longValue?: number | Long | null

    /** Parameter floatValue */
    floatValue?: number | null

    /** Parameter doubleValue */
    doubleValue?: number | null

    /** Parameter booleanValue */
    booleanValue?: boolean | null

    /** Parameter stringValue */
    stringValue?: string | null

    /** Parameter extensionValue */
    extensionValue?: Proto.Template.Parameter.IParameterValueExtension | null
  },
  type = p.type
):
  | NumberPropertyValue
  | BigIntPropertyValue
  | StringPropertyValue
  | BooleanPropertyValue
  | DateTimePropertyValue {
  switch (type) {
    case 1: // Int8
      return { type: 'Int8', value: p.intValue != null ? p.intValue | 0 : null }
    case 2: // Int16
      return {
        type: 'Int16',
        value: p.intValue != null ? p.intValue | 0 : null,
      }
    case 3: // Int32
      return {
        type: 'Int32',
        value: p.intValue != null ? p.intValue | 0 : null,
      }
    case 4: // Int64
      return {
        type: 'Int64',
        value: toMaybeBigInt(p.longValue, true),
      }
    case 5: // UInt8
      return { type: 'UInt8', value: p.intValue }
    case 6: // UInt16
      return { type: 'UInt16', value: p.intValue }
    case 7: // UInt32
      return { type: 'UInt32', value: p.intValue }
    case 8: // UInt64
      return {
        type: 'UInt64',
        value: toMaybeBigInt(p.longValue, false),
      }
    case 9: // Float
      return { type: 'Float', value: p.floatValue }
    case 10: // Double
      return { type: 'Double', value: p.doubleValue }
    case 11: // Boolean
      return { type: 'Boolean', value: p.booleanValue }
    case 12: // String
      return { type: 'String', value: p.stringValue }
    case 13: // DateTime
      return {
        type: 'DateTime',
        value: toMaybeBigInt(p.longValue, false),
      }
    case 14: // Text
      return { type: 'Text', value: p.stringValue }
    case 15: // UUID
      return { type: 'UUID', value: p.stringValue }
    default:
      throw new Error(`invalid type: ${type}`)
  }
}

function decodeParameter(p: Proto.Template.IParameter): Parameter {
  const decoded: Parameter = decodeParameterValue(p)
  if (hasOwnProperty(p, 'name')) decoded.name = p.name
  return decoded
}

function setPropertyValue(
  input: InputPropertyValue,
  output: Proto.IPropertyValue
) {
  if (input.value == null) output.isNull = true
  switch (input.type.toUpperCase()) {
    case 'PROPERTYSET': {
      output.type = 20
      const { value } = input as InputPropertySetValue
      output.propertysetValue = value ? encodePropertySet(value) : null
      break
    }
    case 'PROPERTYSETLIST': {
      output.type = 21
      const { value } = input as InputPropertySetListValue
      output.propertysetsValue = value ? encodePropertySetList(value) : null
      break
    }
    default:
      setParameterValue(
        input as
          | InputNumberPropertyValue
          | InputBigIntPropertyValue
          | InputStringPropertyValue
          | InputBooleanPropertyValue
          | InputDateTimePropertyValue,
        output
      )
  }
}

function encodePropertyValue(p: InputPropertyValue): Proto.PropertyValue {
  const newPropertyValue = Proto.PropertyValue.create()
  setPropertyValue(p, newPropertyValue)
  return newPropertyValue
}

function decodePropertyValue(p: Proto.IPropertyValue): PropertyValue {
  switch (p.type) {
    case 20:
      return {
        type: 'PropertySet',
        value:
          p.propertysetValue != null
            ? decodePropertySet(p.propertysetValue)
            : null,
      }
    case 21:
      return {
        type: 'PropertySetList',
        value:
          p.propertysetsValue != null
            ? decodePropertySetList(p.propertysetsValue)
            : null,
      }
    default: {
      const result = decodeParameterValue(p)
      if (p.isNull) result.value = null
      return result
    }
  }
}

function encodePropertySet(object: InputPropertySet): Proto.PropertySet {
  return Proto.PropertySet.create({
    keys: Object.keys(object),
    values: Object.values(object).map((v) => encodePropertyValue(v)),
  })
}

function decodePropertySet({ keys, values }: Proto.IPropertySet): PropertySet {
  const propertySet: PropertySet = {}

  if (keys && values) {
    for (let i = 0; i < keys.length; i++) {
      propertySet[keys[i]] = decodePropertyValue(values[i])
    }
  }

  return propertySet
}

function encodePropertySetList(
  object: InputPropertySet[]
): Proto.PropertySetList {
  return Proto.PropertySetList.create({
    propertyset: object.map((s) => encodePropertySet(s)),
  })
}

function decodePropertySetList({
  propertyset,
}: Proto.IPropertySetList): PropertySet[] {
  return propertyset?.map((s) => decodePropertySet(s)) || []
}

function encodeTemplate({
  metrics,
  parameters,
  ...rest
}: InputTemplate): Proto.Template {
  return Proto.Template.create({
    ...rest,
    metrics: metrics?.map((m) => encodeMetric(m)),
    parameters: parameters?.map((p) => encodeParameter(p)),
  })
}

function decodeTemplate({
  metrics,
  parameters,
  ...rest
}: Proto.ITemplate): Template {
  const template: Template = { ...rest }

  if (metrics) template.metrics = metrics.map((m) => decodeMetric(m))
  if (parameters)
    template.parameters = parameters.map((p) => decodeParameter(p))

  return template
}

function setMetricValue(input: InputMetric, output: Proto.IMetric) {
  switch (input.type.toUpperCase()) {
    case 'DATASET': {
      output.datatype = 16
      const ds = input as InputDataSetMetric
      output.datasetValue = ds.value == null ? null : encodeDataSet(ds.value)
      break
    }
    case 'BYTES': {
      output.datatype = 17
      const { value } = input as InputBytesMetric
      output.bytesValue = value == null ? null : toUint8Array(value)
      break
    }
    case 'FILE': {
      output.datatype = 18
      const { value } = input as InputBytesMetric
      output.bytesValue = value == null ? null : toUint8Array(value)
      break
    }
    case 'TEMPLATE': {
      output.datatype = 19
      const { value } = input as InputTemplateMetric
      output.templateValue = value == null ? null : encodeTemplate(value)
      break
    }
    default: {
      const prop: Proto.IPropertyValue = {}
      setPropertyValue(input as InputPropertyValue, prop)
      const { type, ...rest } = prop
      output.datatype = type
      Object.assign(output, rest)
      break
    }
  }
  output.isNull = input.value == null
}

function encodeMetric(metric: InputMetric): Proto.Metric {
  const { alias, metadata, timestamp, properties, ...rest } = metric
  const newMetric = Proto.Metric.create({
    ...rest,
    timestamp: toMaybeLong(timestamp),
    alias: toMaybeLong(alias),
    metadata: metadata ? encodeMetaData(metadata) : null,
    properties: properties ? encodePropertySet(properties) : null,
  })
  setMetricValue(metric, newMetric)

  return newMetric
}

function decodeMetricValue(m: Proto.IMetric): Metric {
  switch (m.datatype) {
    case 16:
      return {
        type: 'DataSet',
        value: m.datasetValue != null ? decodeDataSet(m.datasetValue) : null,
      }
    case 17:
      return { type: 'Bytes', value: m.bytesValue }
    case 18:
      return { type: 'File', value: m.bytesValue }
    case 19:
      return {
        type: 'Template',
        value: m.templateValue != null ? decodeTemplate(m.templateValue) : null,
      }
    default:
      return decodeParameterValue(m, m.datatype)
  }
}

function decodeMetric(protoMetric: Proto.IMetric): Metric {
  const metric = decodeMetricValue(protoMetric)
  if (protoMetric.isNull) metric.value = null

  const {
    name,
    alias,
    timestamp,
    isHistorical,
    isTransient,
    metadata,
    properties,
  } = protoMetric

  if (hasOwnProperty(protoMetric, 'name')) metric.name = name
  if (hasOwnProperty(protoMetric, 'alias')) metric.alias = toMaybeBigInt(alias)
  if (hasOwnProperty(protoMetric, 'timestamp'))
    metric.timestamp = toMaybeBigInt(timestamp)
  if (hasOwnProperty(protoMetric, 'isHistorical'))
    metric.isHistorical = isHistorical
  if (hasOwnProperty(protoMetric, 'isTransient'))
    metric.isTransient = isTransient
  if (hasOwnProperty(protoMetric, 'metadata') && metadata)
    metric.metadata = decodeMetaData(metadata)
  if (hasOwnProperty(protoMetric, 'properties') && properties)
    metric.properties = decodePropertySet(properties)

  return metric
}

export function encodePayload({
  timestamp,
  metrics,
  seq,
  uuid,
  body,
}: InputPayload): Uint8Array {
  const payload = Proto.create({
    timestamp: toLong(timestamp),
    metrics: metrics ? metrics.map((m) => encodeMetric(m)) : null,
    seq: toMaybeLong(seq),
    uuid,
    body: body ? toUint8Array(body) : null,
  })

  return Proto.encode(payload).finish()
}

export function decodePayload(proto: Uint8Array): Payload {
  const decoded = Proto.decode(proto)
  const { timestamp, metrics, seq, ...rest } = decoded
  const payload: Payload = {
    ...rest,
    timestamp: toBigInt(timestamp),
  }
  if (metrics && hasOwnProperty(decoded, 'metrics'))
    payload.metrics = metrics.map((m) => decodeMetric(m))
  if (seq != null && hasOwnProperty(decoded, 'seq')) payload.seq = toBigInt(seq)

  return payload
}

export function encodeType(
  typeString: MetricDataType | 'PropertySet' | 'PropertySetList'
): number {
  switch (typeString.toUpperCase()) {
    case 'INT8':
      return 1
    case 'INT16':
      return 2
    case 'INT32':
    case 'INT':
      return 3
    case 'INT64':
    case 'LONG':
      return 4
    case 'UINT8':
      return 5
    case 'UINT16':
      return 6
    case 'UINT32':
      return 7
    case 'UINT64':
      return 8
    case 'FLOAT':
      return 9
    case 'DOUBLE':
      return 10
    case 'BOOLEAN':
      return 11
    case 'STRING':
      return 12
    case 'DATETIME':
      return 13
    case 'TEXT':
      return 14
    case 'UUID':
      return 15
    case 'DATASET':
      return 16
    case 'BYTES':
      return 17
    case 'FILE':
      return 18
    case 'TEMPLATE':
      return 19
    case 'PROPERTYSET':
      return 20
    case 'PROPERTYSETLIST':
      return 21
    default:
      return 0
  }
}

export function decodeType(
  typeInt: number
): MetricDataType | 'PropertySet' | 'PropertySetList' {
  switch (typeInt) {
    case 1:
      return 'Int8'
    case 2:
      return 'Int16'
    case 3:
      return 'Int32'
    case 4:
      return 'Int64'
    case 5:
      return 'UInt8'
    case 6:
      return 'UInt16'
    case 7:
      return 'UInt32'
    case 8:
      return 'UInt64'
    case 9:
      return 'Float'
    case 10:
      return 'Double'
    case 11:
      return 'Boolean'
    case 12:
      return 'String'
    case 13:
      return 'DateTime'
    case 14:
      return 'Text'
    case 15:
      return 'UUID'
    case 16:
      return 'DataSet'
    case 17:
      return 'Bytes'
    case 18:
      return 'File'
    case 19:
      return 'Template'
    case 20:
      return 'PropertySet'
    case 21:
      return 'PropertySetList'
  }
  throw new Error(`invalid type: ${typeInt}`)
}
