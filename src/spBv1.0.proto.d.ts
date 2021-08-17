/* eslint-disable */

import * as $protobuf from 'protobufjs'
/** Properties of a Payload. */
export interface IPayload {
  /** Payload timestamp */
  timestamp?: number | Long | null

  /** Payload metrics */
  metrics?: Payload.IMetric[] | null

  /** Payload seq */
  seq?: number | Long | null

  /** Payload uuid */
  uuid?: string | null

  /** Payload body */
  body?: Uint8Array | null
}

/** Represents a Payload. */
export class Payload implements IPayload {
  /**
   * Constructs a new Payload.
   * @param [properties] Properties to set
   */
  constructor(properties?: IPayload)

  /** Payload timestamp. */
  public timestamp: number | Long

  /** Payload metrics. */
  public metrics: Payload.IMetric[]

  /** Payload seq. */
  public seq: number | Long

  /** Payload uuid. */
  public uuid: string

  /** Payload body. */
  public body: Uint8Array

  /**
   * Creates a new Payload instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Payload instance
   */
  public static create(properties?: IPayload): Payload

  /**
   * Encodes the specified Payload message. Does not implicitly {@link Payload.verify|verify} messages.
   * @param message Payload message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IPayload,
    writer?: $protobuf.Writer
  ): $protobuf.Writer

  /**
   * Encodes the specified Payload message, length delimited. Does not implicitly {@link Payload.verify|verify} messages.
   * @param message Payload message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IPayload,
    writer?: $protobuf.Writer
  ): $protobuf.Writer

  /**
   * Decodes a Payload message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Payload
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): Payload

  /**
   * Decodes a Payload message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Payload
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Payload

  /**
   * Verifies a Payload message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null

  /**
   * Creates a Payload message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Payload
   */
  public static fromObject(object: { [k: string]: any }): Payload

  /**
   * Creates a plain object from a Payload message. Also converts values to other types if specified.
   * @param message Payload
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Payload,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any }

  /**
   * Converts this Payload to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any }
}

export namespace Payload {
  /** Properties of a Template. */
  interface ITemplate {
    /** Template version */
    version?: string | null

    /** Template metrics */
    metrics?: Payload.IMetric[] | null

    /** Template parameters */
    parameters?: Payload.Template.IParameter[] | null

    /** Template templateRef */
    templateRef?: string | null

    /** Template isDefinition */
    isDefinition?: boolean | null
  }

  /** Represents a Template. */
  class Template implements ITemplate {
    /**
     * Constructs a new Template.
     * @param [properties] Properties to set
     */
    constructor(properties?: Payload.ITemplate)

    /** Template version. */
    public version: string

    /** Template metrics. */
    public metrics: Payload.IMetric[]

    /** Template parameters. */
    public parameters: Payload.Template.IParameter[]

    /** Template templateRef. */
    public templateRef: string

    /** Template isDefinition. */
    public isDefinition: boolean

    /**
     * Creates a new Template instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Template instance
     */
    public static create(properties?: Payload.ITemplate): Payload.Template

    /**
     * Encodes the specified Template message. Does not implicitly {@link Payload.Template.verify|verify} messages.
     * @param message Template message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: Payload.ITemplate,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified Template message, length delimited. Does not implicitly {@link Payload.Template.verify|verify} messages.
     * @param message Template message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: Payload.ITemplate,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a Template message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Template
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): Payload.Template

    /**
     * Decodes a Template message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Template
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): Payload.Template

    /**
     * Verifies a Template message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a Template message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Template
     */
    public static fromObject(object: { [k: string]: any }): Payload.Template

    /**
     * Creates a plain object from a Template message. Also converts values to other types if specified.
     * @param message Template
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: Payload.Template,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this Template to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }

  namespace Template {
    /** Properties of a Parameter. */
    interface IParameter {
      /** Parameter name */
      name?: string | null

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
      extensionValue?: Payload.Template.Parameter.IParameterValueExtension | null
    }

    /** Represents a Parameter. */
    class Parameter implements IParameter {
      /**
       * Constructs a new Parameter.
       * @param [properties] Properties to set
       */
      constructor(properties?: Payload.Template.IParameter)

      /** Parameter name. */
      public name: string

      /** Parameter type. */
      public type: number

      /** Parameter intValue. */
      public intValue: number

      /** Parameter longValue. */
      public longValue: number | Long

      /** Parameter floatValue. */
      public floatValue: number

      /** Parameter doubleValue. */
      public doubleValue: number

      /** Parameter booleanValue. */
      public booleanValue: boolean

      /** Parameter stringValue. */
      public stringValue: string

      /** Parameter extensionValue. */
      public extensionValue?: Payload.Template.Parameter.IParameterValueExtension | null

      /** Parameter value. */
      public value?:
        | 'intValue'
        | 'longValue'
        | 'floatValue'
        | 'doubleValue'
        | 'booleanValue'
        | 'stringValue'
        | 'extensionValue'

      /**
       * Creates a new Parameter instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Parameter instance
       */
      public static create(
        properties?: Payload.Template.IParameter
      ): Payload.Template.Parameter

      /**
       * Encodes the specified Parameter message. Does not implicitly {@link Payload.Template.Parameter.verify|verify} messages.
       * @param message Parameter message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: Payload.Template.IParameter,
        writer?: $protobuf.Writer
      ): $protobuf.Writer

      /**
       * Encodes the specified Parameter message, length delimited. Does not implicitly {@link Payload.Template.Parameter.verify|verify} messages.
       * @param message Parameter message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: Payload.Template.IParameter,
        writer?: $protobuf.Writer
      ): $protobuf.Writer

      /**
       * Decodes a Parameter message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Parameter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): Payload.Template.Parameter

      /**
       * Decodes a Parameter message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Parameter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): Payload.Template.Parameter

      /**
       * Verifies a Parameter message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Parameter
       */
      public static fromObject(object: {
        [k: string]: any
      }): Payload.Template.Parameter

      /**
       * Creates a plain object from a Parameter message. Also converts values to other types if specified.
       * @param message Parameter
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: Payload.Template.Parameter,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any }

      /**
       * Converts this Parameter to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any }
    }

    namespace Parameter {
      /** Properties of a ParameterValueExtension. */
      interface IParameterValueExtension {}

      /** Represents a ParameterValueExtension. */
      class ParameterValueExtension implements IParameterValueExtension {
        /**
         * Constructs a new ParameterValueExtension.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: Payload.Template.Parameter.IParameterValueExtension
        )

        /**
         * Creates a new ParameterValueExtension instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParameterValueExtension instance
         */
        public static create(
          properties?: Payload.Template.Parameter.IParameterValueExtension
        ): Payload.Template.Parameter.ParameterValueExtension

        /**
         * Encodes the specified ParameterValueExtension message. Does not implicitly {@link Payload.Template.Parameter.ParameterValueExtension.verify|verify} messages.
         * @param message ParameterValueExtension message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: Payload.Template.Parameter.IParameterValueExtension,
          writer?: $protobuf.Writer
        ): $protobuf.Writer

        /**
         * Encodes the specified ParameterValueExtension message, length delimited. Does not implicitly {@link Payload.Template.Parameter.ParameterValueExtension.verify|verify} messages.
         * @param message ParameterValueExtension message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: Payload.Template.Parameter.IParameterValueExtension,
          writer?: $protobuf.Writer
        ): $protobuf.Writer

        /**
         * Decodes a ParameterValueExtension message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParameterValueExtension
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): Payload.Template.Parameter.ParameterValueExtension

        /**
         * Decodes a ParameterValueExtension message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParameterValueExtension
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): Payload.Template.Parameter.ParameterValueExtension

        /**
         * Verifies a ParameterValueExtension message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a ParameterValueExtension message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParameterValueExtension
         */
        public static fromObject(object: {
          [k: string]: any
        }): Payload.Template.Parameter.ParameterValueExtension

        /**
         * Creates a plain object from a ParameterValueExtension message. Also converts values to other types if specified.
         * @param message ParameterValueExtension
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: Payload.Template.Parameter.ParameterValueExtension,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any }

        /**
         * Converts this ParameterValueExtension to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any }
      }
    }
  }

  /** Properties of a DataSet. */
  interface IDataSet {
    /** DataSet numOfColumns */
    numOfColumns?: number | Long | null

    /** DataSet columns */
    columns?: string[] | null

    /** DataSet types */
    types?: number[] | null

    /** DataSet rows */
    rows?: Payload.DataSet.IRow[] | null
  }

  /** Represents a DataSet. */
  class DataSet implements IDataSet {
    /**
     * Constructs a new DataSet.
     * @param [properties] Properties to set
     */
    constructor(properties?: Payload.IDataSet)

    /** DataSet numOfColumns. */
    public numOfColumns: number | Long

    /** DataSet columns. */
    public columns: string[]

    /** DataSet types. */
    public types: number[]

    /** DataSet rows. */
    public rows: Payload.DataSet.IRow[]

    /**
     * Creates a new DataSet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DataSet instance
     */
    public static create(properties?: Payload.IDataSet): Payload.DataSet

    /**
     * Encodes the specified DataSet message. Does not implicitly {@link Payload.DataSet.verify|verify} messages.
     * @param message DataSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: Payload.IDataSet,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified DataSet message, length delimited. Does not implicitly {@link Payload.DataSet.verify|verify} messages.
     * @param message DataSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: Payload.IDataSet,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a DataSet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DataSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): Payload.DataSet

    /**
     * Decodes a DataSet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DataSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): Payload.DataSet

    /**
     * Verifies a DataSet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a DataSet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DataSet
     */
    public static fromObject(object: { [k: string]: any }): Payload.DataSet

    /**
     * Creates a plain object from a DataSet message. Also converts values to other types if specified.
     * @param message DataSet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: Payload.DataSet,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this DataSet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }

  namespace DataSet {
    /** Properties of a DataSetValue. */
    interface IDataSetValue {
      /** DataSetValue intValue */
      intValue?: number | null

      /** DataSetValue longValue */
      longValue?: number | Long | null

      /** DataSetValue floatValue */
      floatValue?: number | null

      /** DataSetValue doubleValue */
      doubleValue?: number | null

      /** DataSetValue booleanValue */
      booleanValue?: boolean | null

      /** DataSetValue stringValue */
      stringValue?: string | null

      /** DataSetValue extensionValue */
      extensionValue?: Payload.DataSet.DataSetValue.IDataSetValueExtension | null
    }

    /** Represents a DataSetValue. */
    class DataSetValue implements IDataSetValue {
      /**
       * Constructs a new DataSetValue.
       * @param [properties] Properties to set
       */
      constructor(properties?: Payload.DataSet.IDataSetValue)

      /** DataSetValue intValue. */
      public intValue: number

      /** DataSetValue longValue. */
      public longValue: number | Long

      /** DataSetValue floatValue. */
      public floatValue: number

      /** DataSetValue doubleValue. */
      public doubleValue: number

      /** DataSetValue booleanValue. */
      public booleanValue: boolean

      /** DataSetValue stringValue. */
      public stringValue: string

      /** DataSetValue extensionValue. */
      public extensionValue?: Payload.DataSet.DataSetValue.IDataSetValueExtension | null

      /** DataSetValue value. */
      public value?:
        | 'intValue'
        | 'longValue'
        | 'floatValue'
        | 'doubleValue'
        | 'booleanValue'
        | 'stringValue'
        | 'extensionValue'

      /**
       * Creates a new DataSetValue instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DataSetValue instance
       */
      public static create(
        properties?: Payload.DataSet.IDataSetValue
      ): Payload.DataSet.DataSetValue

      /**
       * Encodes the specified DataSetValue message. Does not implicitly {@link Payload.DataSet.DataSetValue.verify|verify} messages.
       * @param message DataSetValue message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: Payload.DataSet.IDataSetValue,
        writer?: $protobuf.Writer
      ): $protobuf.Writer

      /**
       * Encodes the specified DataSetValue message, length delimited. Does not implicitly {@link Payload.DataSet.DataSetValue.verify|verify} messages.
       * @param message DataSetValue message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: Payload.DataSet.IDataSetValue,
        writer?: $protobuf.Writer
      ): $protobuf.Writer

      /**
       * Decodes a DataSetValue message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns DataSetValue
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): Payload.DataSet.DataSetValue

      /**
       * Decodes a DataSetValue message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns DataSetValue
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): Payload.DataSet.DataSetValue

      /**
       * Verifies a DataSetValue message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a DataSetValue message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns DataSetValue
       */
      public static fromObject(object: {
        [k: string]: any
      }): Payload.DataSet.DataSetValue

      /**
       * Creates a plain object from a DataSetValue message. Also converts values to other types if specified.
       * @param message DataSetValue
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: Payload.DataSet.DataSetValue,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any }

      /**
       * Converts this DataSetValue to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any }
    }

    namespace DataSetValue {
      /** Properties of a DataSetValueExtension. */
      interface IDataSetValueExtension {}

      /** Represents a DataSetValueExtension. */
      class DataSetValueExtension implements IDataSetValueExtension {
        /**
         * Constructs a new DataSetValueExtension.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: Payload.DataSet.DataSetValue.IDataSetValueExtension
        )

        /**
         * Creates a new DataSetValueExtension instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DataSetValueExtension instance
         */
        public static create(
          properties?: Payload.DataSet.DataSetValue.IDataSetValueExtension
        ): Payload.DataSet.DataSetValue.DataSetValueExtension

        /**
         * Encodes the specified DataSetValueExtension message. Does not implicitly {@link Payload.DataSet.DataSetValue.DataSetValueExtension.verify|verify} messages.
         * @param message DataSetValueExtension message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: Payload.DataSet.DataSetValue.IDataSetValueExtension,
          writer?: $protobuf.Writer
        ): $protobuf.Writer

        /**
         * Encodes the specified DataSetValueExtension message, length delimited. Does not implicitly {@link Payload.DataSet.DataSetValue.DataSetValueExtension.verify|verify} messages.
         * @param message DataSetValueExtension message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: Payload.DataSet.DataSetValue.IDataSetValueExtension,
          writer?: $protobuf.Writer
        ): $protobuf.Writer

        /**
         * Decodes a DataSetValueExtension message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DataSetValueExtension
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): Payload.DataSet.DataSetValue.DataSetValueExtension

        /**
         * Decodes a DataSetValueExtension message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DataSetValueExtension
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): Payload.DataSet.DataSetValue.DataSetValueExtension

        /**
         * Verifies a DataSetValueExtension message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a DataSetValueExtension message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DataSetValueExtension
         */
        public static fromObject(object: {
          [k: string]: any
        }): Payload.DataSet.DataSetValue.DataSetValueExtension

        /**
         * Creates a plain object from a DataSetValueExtension message. Also converts values to other types if specified.
         * @param message DataSetValueExtension
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: Payload.DataSet.DataSetValue.DataSetValueExtension,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any }

        /**
         * Converts this DataSetValueExtension to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any }
      }
    }

    /** Properties of a Row. */
    interface IRow {
      /** Row elements */
      elements?: Payload.DataSet.IDataSetValue[] | null
    }

    /** Represents a Row. */
    class Row implements IRow {
      /**
       * Constructs a new Row.
       * @param [properties] Properties to set
       */
      constructor(properties?: Payload.DataSet.IRow)

      /** Row elements. */
      public elements: Payload.DataSet.IDataSetValue[]

      /**
       * Creates a new Row instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Row instance
       */
      public static create(
        properties?: Payload.DataSet.IRow
      ): Payload.DataSet.Row

      /**
       * Encodes the specified Row message. Does not implicitly {@link Payload.DataSet.Row.verify|verify} messages.
       * @param message Row message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: Payload.DataSet.IRow,
        writer?: $protobuf.Writer
      ): $protobuf.Writer

      /**
       * Encodes the specified Row message, length delimited. Does not implicitly {@link Payload.DataSet.Row.verify|verify} messages.
       * @param message Row message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: Payload.DataSet.IRow,
        writer?: $protobuf.Writer
      ): $protobuf.Writer

      /**
       * Decodes a Row message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Row
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): Payload.DataSet.Row

      /**
       * Decodes a Row message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Row
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): Payload.DataSet.Row

      /**
       * Verifies a Row message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a Row message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Row
       */
      public static fromObject(object: {
        [k: string]: any
      }): Payload.DataSet.Row

      /**
       * Creates a plain object from a Row message. Also converts values to other types if specified.
       * @param message Row
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: Payload.DataSet.Row,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any }

      /**
       * Converts this Row to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any }
    }
  }

  /** Properties of a PropertyValue. */
  interface IPropertyValue {
    /** PropertyValue type */
    type?: number | null

    /** PropertyValue isNull */
    isNull?: boolean | null

    /** PropertyValue intValue */
    intValue?: number | null

    /** PropertyValue longValue */
    longValue?: number | Long | null

    /** PropertyValue floatValue */
    floatValue?: number | null

    /** PropertyValue doubleValue */
    doubleValue?: number | null

    /** PropertyValue booleanValue */
    booleanValue?: boolean | null

    /** PropertyValue stringValue */
    stringValue?: string | null

    /** PropertyValue propertysetValue */
    propertysetValue?: Payload.IPropertySet | null

    /** PropertyValue propertysetsValue */
    propertysetsValue?: Payload.IPropertySetList | null

    /** PropertyValue extensionValue */
    extensionValue?: Payload.PropertyValue.IPropertyValueExtension | null
  }

  /** Represents a PropertyValue. */
  class PropertyValue implements IPropertyValue {
    /**
     * Constructs a new PropertyValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: Payload.IPropertyValue)

    /** PropertyValue type. */
    public type: number

    /** PropertyValue isNull. */
    public isNull: boolean

    /** PropertyValue intValue. */
    public intValue: number

    /** PropertyValue longValue. */
    public longValue: number | Long

    /** PropertyValue floatValue. */
    public floatValue: number

    /** PropertyValue doubleValue. */
    public doubleValue: number

    /** PropertyValue booleanValue. */
    public booleanValue: boolean

    /** PropertyValue stringValue. */
    public stringValue: string

    /** PropertyValue propertysetValue. */
    public propertysetValue?: Payload.IPropertySet | null

    /** PropertyValue propertysetsValue. */
    public propertysetsValue?: Payload.IPropertySetList | null

    /** PropertyValue extensionValue. */
    public extensionValue?: Payload.PropertyValue.IPropertyValueExtension | null

    /** PropertyValue value. */
    public value?:
      | 'intValue'
      | 'longValue'
      | 'floatValue'
      | 'doubleValue'
      | 'booleanValue'
      | 'stringValue'
      | 'propertysetValue'
      | 'propertysetsValue'
      | 'extensionValue'

    /**
     * Creates a new PropertyValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PropertyValue instance
     */
    public static create(
      properties?: Payload.IPropertyValue
    ): Payload.PropertyValue

    /**
     * Encodes the specified PropertyValue message. Does not implicitly {@link Payload.PropertyValue.verify|verify} messages.
     * @param message PropertyValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: Payload.IPropertyValue,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified PropertyValue message, length delimited. Does not implicitly {@link Payload.PropertyValue.verify|verify} messages.
     * @param message PropertyValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: Payload.IPropertyValue,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a PropertyValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PropertyValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): Payload.PropertyValue

    /**
     * Decodes a PropertyValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PropertyValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): Payload.PropertyValue

    /**
     * Verifies a PropertyValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a PropertyValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PropertyValue
     */
    public static fromObject(object: {
      [k: string]: any
    }): Payload.PropertyValue

    /**
     * Creates a plain object from a PropertyValue message. Also converts values to other types if specified.
     * @param message PropertyValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: Payload.PropertyValue,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this PropertyValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }

  namespace PropertyValue {
    /** Properties of a PropertyValueExtension. */
    interface IPropertyValueExtension {}

    /** Represents a PropertyValueExtension. */
    class PropertyValueExtension implements IPropertyValueExtension {
      /**
       * Constructs a new PropertyValueExtension.
       * @param [properties] Properties to set
       */
      constructor(properties?: Payload.PropertyValue.IPropertyValueExtension)

      /**
       * Creates a new PropertyValueExtension instance using the specified properties.
       * @param [properties] Properties to set
       * @returns PropertyValueExtension instance
       */
      public static create(
        properties?: Payload.PropertyValue.IPropertyValueExtension
      ): Payload.PropertyValue.PropertyValueExtension

      /**
       * Encodes the specified PropertyValueExtension message. Does not implicitly {@link Payload.PropertyValue.PropertyValueExtension.verify|verify} messages.
       * @param message PropertyValueExtension message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: Payload.PropertyValue.IPropertyValueExtension,
        writer?: $protobuf.Writer
      ): $protobuf.Writer

      /**
       * Encodes the specified PropertyValueExtension message, length delimited. Does not implicitly {@link Payload.PropertyValue.PropertyValueExtension.verify|verify} messages.
       * @param message PropertyValueExtension message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: Payload.PropertyValue.IPropertyValueExtension,
        writer?: $protobuf.Writer
      ): $protobuf.Writer

      /**
       * Decodes a PropertyValueExtension message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns PropertyValueExtension
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): Payload.PropertyValue.PropertyValueExtension

      /**
       * Decodes a PropertyValueExtension message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns PropertyValueExtension
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): Payload.PropertyValue.PropertyValueExtension

      /**
       * Verifies a PropertyValueExtension message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a PropertyValueExtension message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns PropertyValueExtension
       */
      public static fromObject(object: {
        [k: string]: any
      }): Payload.PropertyValue.PropertyValueExtension

      /**
       * Creates a plain object from a PropertyValueExtension message. Also converts values to other types if specified.
       * @param message PropertyValueExtension
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: Payload.PropertyValue.PropertyValueExtension,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any }

      /**
       * Converts this PropertyValueExtension to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any }
    }
  }

  /** Properties of a PropertySet. */
  interface IPropertySet {
    /** PropertySet keys */
    keys?: string[] | null

    /** PropertySet values */
    values?: Payload.IPropertyValue[] | null
  }

  /** Represents a PropertySet. */
  class PropertySet implements IPropertySet {
    /**
     * Constructs a new PropertySet.
     * @param [properties] Properties to set
     */
    constructor(properties?: Payload.IPropertySet)

    /** PropertySet keys. */
    public keys: string[]

    /** PropertySet values. */
    public values: Payload.IPropertyValue[]

    /**
     * Creates a new PropertySet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PropertySet instance
     */
    public static create(properties?: Payload.IPropertySet): Payload.PropertySet

    /**
     * Encodes the specified PropertySet message. Does not implicitly {@link Payload.PropertySet.verify|verify} messages.
     * @param message PropertySet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: Payload.IPropertySet,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified PropertySet message, length delimited. Does not implicitly {@link Payload.PropertySet.verify|verify} messages.
     * @param message PropertySet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: Payload.IPropertySet,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a PropertySet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PropertySet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): Payload.PropertySet

    /**
     * Decodes a PropertySet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PropertySet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): Payload.PropertySet

    /**
     * Verifies a PropertySet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a PropertySet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PropertySet
     */
    public static fromObject(object: { [k: string]: any }): Payload.PropertySet

    /**
     * Creates a plain object from a PropertySet message. Also converts values to other types if specified.
     * @param message PropertySet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: Payload.PropertySet,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this PropertySet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }

  /** Properties of a PropertySetList. */
  interface IPropertySetList {
    /** PropertySetList propertyset */
    propertyset?: Payload.IPropertySet[] | null
  }

  /** Represents a PropertySetList. */
  class PropertySetList implements IPropertySetList {
    /**
     * Constructs a new PropertySetList.
     * @param [properties] Properties to set
     */
    constructor(properties?: Payload.IPropertySetList)

    /** PropertySetList propertyset. */
    public propertyset: Payload.IPropertySet[]

    /**
     * Creates a new PropertySetList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PropertySetList instance
     */
    public static create(
      properties?: Payload.IPropertySetList
    ): Payload.PropertySetList

    /**
     * Encodes the specified PropertySetList message. Does not implicitly {@link Payload.PropertySetList.verify|verify} messages.
     * @param message PropertySetList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: Payload.IPropertySetList,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified PropertySetList message, length delimited. Does not implicitly {@link Payload.PropertySetList.verify|verify} messages.
     * @param message PropertySetList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: Payload.IPropertySetList,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a PropertySetList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PropertySetList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): Payload.PropertySetList

    /**
     * Decodes a PropertySetList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PropertySetList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): Payload.PropertySetList

    /**
     * Verifies a PropertySetList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a PropertySetList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PropertySetList
     */
    public static fromObject(object: {
      [k: string]: any
    }): Payload.PropertySetList

    /**
     * Creates a plain object from a PropertySetList message. Also converts values to other types if specified.
     * @param message PropertySetList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: Payload.PropertySetList,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this PropertySetList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }

  /** Properties of a MetaData. */
  interface IMetaData {
    /** MetaData isMultiPart */
    isMultiPart?: boolean | null

    /** MetaData contentType */
    contentType?: string | null

    /** MetaData size */
    size?: number | Long | null

    /** MetaData seq */
    seq?: number | Long | null

    /** MetaData fileName */
    fileName?: string | null

    /** MetaData fileType */
    fileType?: string | null

    /** MetaData md5 */
    md5?: string | null

    /** MetaData description */
    description?: string | null
  }

  /** Represents a MetaData. */
  class MetaData implements IMetaData {
    /**
     * Constructs a new MetaData.
     * @param [properties] Properties to set
     */
    constructor(properties?: Payload.IMetaData)

    /** MetaData isMultiPart. */
    public isMultiPart: boolean

    /** MetaData contentType. */
    public contentType: string

    /** MetaData size. */
    public size: number | Long

    /** MetaData seq. */
    public seq: number | Long

    /** MetaData fileName. */
    public fileName: string

    /** MetaData fileType. */
    public fileType: string

    /** MetaData md5. */
    public md5: string

    /** MetaData description. */
    public description: string

    /**
     * Creates a new MetaData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MetaData instance
     */
    public static create(properties?: Payload.IMetaData): Payload.MetaData

    /**
     * Encodes the specified MetaData message. Does not implicitly {@link Payload.MetaData.verify|verify} messages.
     * @param message MetaData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: Payload.IMetaData,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified MetaData message, length delimited. Does not implicitly {@link Payload.MetaData.verify|verify} messages.
     * @param message MetaData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: Payload.IMetaData,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a MetaData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MetaData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): Payload.MetaData

    /**
     * Decodes a MetaData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MetaData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): Payload.MetaData

    /**
     * Verifies a MetaData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a MetaData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MetaData
     */
    public static fromObject(object: { [k: string]: any }): Payload.MetaData

    /**
     * Creates a plain object from a MetaData message. Also converts values to other types if specified.
     * @param message MetaData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: Payload.MetaData,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this MetaData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }

  /** Properties of a Metric. */
  interface IMetric {
    /** Metric name */
    name?: string | null

    /** Metric alias */
    alias?: number | Long | null

    /** Metric timestamp */
    timestamp?: number | Long | null

    /** Metric datatype */
    datatype?: number | null

    /** Metric isHistorical */
    isHistorical?: boolean | null

    /** Metric isTransient */
    isTransient?: boolean | null

    /** Metric isNull */
    isNull?: boolean | null

    /** Metric metadata */
    metadata?: Payload.IMetaData | null

    /** Metric properties */
    properties?: Payload.IPropertySet | null

    /** Metric intValue */
    intValue?: number | null

    /** Metric longValue */
    longValue?: number | Long | null

    /** Metric floatValue */
    floatValue?: number | null

    /** Metric doubleValue */
    doubleValue?: number | null

    /** Metric booleanValue */
    booleanValue?: boolean | null

    /** Metric stringValue */
    stringValue?: string | null

    /** Metric bytesValue */
    bytesValue?: Uint8Array | null

    /** Metric datasetValue */
    datasetValue?: Payload.IDataSet | null

    /** Metric templateValue */
    templateValue?: Payload.ITemplate | null

    /** Metric extensionValue */
    extensionValue?: Payload.Metric.IMetricValueExtension | null
  }

  /** Represents a Metric. */
  class Metric implements IMetric {
    /**
     * Constructs a new Metric.
     * @param [properties] Properties to set
     */
    constructor(properties?: Payload.IMetric)

    /** Metric name. */
    public name: string

    /** Metric alias. */
    public alias: number | Long

    /** Metric timestamp. */
    public timestamp: number | Long

    /** Metric datatype. */
    public datatype: number

    /** Metric isHistorical. */
    public isHistorical: boolean

    /** Metric isTransient. */
    public isTransient: boolean

    /** Metric isNull. */
    public isNull: boolean

    /** Metric metadata. */
    public metadata?: Payload.IMetaData | null

    /** Metric properties. */
    public properties?: Payload.IPropertySet | null

    /** Metric intValue. */
    public intValue: number

    /** Metric longValue. */
    public longValue: number | Long

    /** Metric floatValue. */
    public floatValue: number

    /** Metric doubleValue. */
    public doubleValue: number

    /** Metric booleanValue. */
    public booleanValue: boolean

    /** Metric stringValue. */
    public stringValue: string

    /** Metric bytesValue. */
    public bytesValue: Uint8Array

    /** Metric datasetValue. */
    public datasetValue?: Payload.IDataSet | null

    /** Metric templateValue. */
    public templateValue?: Payload.ITemplate | null

    /** Metric extensionValue. */
    public extensionValue?: Payload.Metric.IMetricValueExtension | null

    /** Metric value. */
    public value?:
      | 'intValue'
      | 'longValue'
      | 'floatValue'
      | 'doubleValue'
      | 'booleanValue'
      | 'stringValue'
      | 'bytesValue'
      | 'datasetValue'
      | 'templateValue'
      | 'extensionValue'

    /**
     * Creates a new Metric instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Metric instance
     */
    public static create(properties?: Payload.IMetric): Payload.Metric

    /**
     * Encodes the specified Metric message. Does not implicitly {@link Payload.Metric.verify|verify} messages.
     * @param message Metric message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: Payload.IMetric,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified Metric message, length delimited. Does not implicitly {@link Payload.Metric.verify|verify} messages.
     * @param message Metric message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: Payload.IMetric,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a Metric message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Metric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): Payload.Metric

    /**
     * Decodes a Metric message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Metric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): Payload.Metric

    /**
     * Verifies a Metric message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a Metric message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Metric
     */
    public static fromObject(object: { [k: string]: any }): Payload.Metric

    /**
     * Creates a plain object from a Metric message. Also converts values to other types if specified.
     * @param message Metric
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: Payload.Metric,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this Metric to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }

  namespace Metric {
    /** Properties of a MetricValueExtension. */
    interface IMetricValueExtension {}

    /** Represents a MetricValueExtension. */
    class MetricValueExtension implements IMetricValueExtension {
      /**
       * Constructs a new MetricValueExtension.
       * @param [properties] Properties to set
       */
      constructor(properties?: Payload.Metric.IMetricValueExtension)

      /**
       * Creates a new MetricValueExtension instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MetricValueExtension instance
       */
      public static create(
        properties?: Payload.Metric.IMetricValueExtension
      ): Payload.Metric.MetricValueExtension

      /**
       * Encodes the specified MetricValueExtension message. Does not implicitly {@link Payload.Metric.MetricValueExtension.verify|verify} messages.
       * @param message MetricValueExtension message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: Payload.Metric.IMetricValueExtension,
        writer?: $protobuf.Writer
      ): $protobuf.Writer

      /**
       * Encodes the specified MetricValueExtension message, length delimited. Does not implicitly {@link Payload.Metric.MetricValueExtension.verify|verify} messages.
       * @param message MetricValueExtension message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: Payload.Metric.IMetricValueExtension,
        writer?: $protobuf.Writer
      ): $protobuf.Writer

      /**
       * Decodes a MetricValueExtension message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns MetricValueExtension
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): Payload.Metric.MetricValueExtension

      /**
       * Decodes a MetricValueExtension message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns MetricValueExtension
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): Payload.Metric.MetricValueExtension

      /**
       * Verifies a MetricValueExtension message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a MetricValueExtension message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns MetricValueExtension
       */
      public static fromObject(object: {
        [k: string]: any
      }): Payload.Metric.MetricValueExtension

      /**
       * Creates a plain object from a MetricValueExtension message. Also converts values to other types if specified.
       * @param message MetricValueExtension
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: Payload.Metric.MetricValueExtension,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any }

      /**
       * Converts this MetricValueExtension to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any }
    }
  }
}
