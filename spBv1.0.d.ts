// @flow

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

export type StringDataType = 'String' | 'Text' | 'UUID'

export type MetaData = {
  isMultiPart?: boolean
  contentType?: string
  size?: number
  seq?: number
  fileName?: string
  fileType?: string
  md5?: string
  description?: string
}

export type Bytes = Uint8Array | Buffer | Array<number>

export type NumberPropertyValue = {
  type: NumberDataType
  value?: number | null
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
  value?: Date | number | null
}

export type PropertySetValue = {
  type: 'PropertySet'
  value: PropertySet
}

export type PropertySetListValue = {
  type: 'PropertySetList'
  value: Array<PropertySet>
}

export type PropertyValue =
  | NumberPropertyValue
  | StringPropertyValue
  | BooleanPropertyValue
  | DateTimePropertyValue
  | PropertySetValue
  | PropertySetListValue

export type PropertySet = Record<string, PropertyValue>

export type MetricBase = {
  name?: string
  alias?: number
  isHistorical?: boolean
  isTransient?: boolean
  metadata?: MetaData
  properties?: PropertySet
}

export type NumberMetric = MetricBase & {
  type: NumberDataType
  value?: number | null
}

export type DateTimeMetric = MetricBase & {
  type: 'DateTime'
  value?: Date | number | null
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
  Int64: number
  UInt8: number
  UInt16: number
  UInt32: number
  UInt64: number
  Float: number
  Double: number
  Boolean: boolean
  String: string
  DateTime: Date | number
  Text: string
  UUID: string
}

export type DataSetValueType = keyof DataSetValueTypes

export type Row<Types extends DataSetValueType[]> = {
  [K in keyof Types]: DataSetValueType | null | undefined
}

export type DataSet<Types extends Array<DataSetValueType>> = {
  numOfColumns: number
  columns: { [K in keyof Types]: string }
  types: Types
  rows: Array<Row<Types>>
}

export type DataSetMetric = MetricBase & {
  type: 'DataSet'
  value: DataSet<any>
}

export type Template = {
  metrics?: Array<Metric>
  version?: string
  isDefinition?: boolean
  templateRef?: string
}

export type TemplateMetric = MetricBase & {
  type: 'Template'
  value: Template
}

export type Metric =
  | NumberMetric
  | BooleanMetric
  | StringMetric
  | DateTimeMetric
  | DataSetMetric
  | TemplateMetric

export type NumberParameter = {
  name?: string
  type: NumberDataType
  value?: number | null
}

export type BooleanParameter = {
  name?: string
  type: 'Boolean'
  value?: boolean | null
}

export type StringParameter = {
  name?: string
  type: StringDataType
  value?: string | null
}

export type DateTimeParameter = {
  name?: string
  type: 'DateTime'
  value?: Date | number | null
}

export type Parameter =
  | NumberParameter
  | BooleanParameter
  | StringParameter
  | DateTimeParameter

export type Payload = {
  timestamp: number
  seq?: number
  uuid?: string
  body?: Bytes
  metrics?: Array<Metric>
}

export function encodePayload(payload: Payload): Uint8Array
export function decodePayload(payload: Uint8Array): Payload
