/* eslint-disable */
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict'

var $protobuf = require('protobufjs/minimal')

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {})

$root.Payload = (function () {
  /**
   * Properties of a Payload.
   * @exports IPayload
   * @interface IPayload
   * @property {number|Long|null} [timestamp] Payload timestamp
   * @property {Array.<Payload.IMetric>|null} [metrics] Payload metrics
   * @property {number|Long|null} [seq] Payload seq
   * @property {string|null} [uuid] Payload uuid
   * @property {Uint8Array|null} [body] Payload body
   */

  /**
   * Constructs a new Payload.
   * @exports Payload
   * @classdesc Represents a Payload.
   * @implements IPayload
   * @constructor
   * @param {IPayload=} [properties] Properties to set
   */
  function Payload(properties) {
    this.metrics = []
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
  }

  /**
   * Payload timestamp.
   * @member {number|Long} timestamp
   * @memberof Payload
   * @instance
   */
  Payload.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, true) : 0

  /**
   * Payload metrics.
   * @member {Array.<Payload.IMetric>} metrics
   * @memberof Payload
   * @instance
   */
  Payload.prototype.metrics = $util.emptyArray

  /**
   * Payload seq.
   * @member {number|Long} seq
   * @memberof Payload
   * @instance
   */
  Payload.prototype.seq = $util.Long ? $util.Long.fromBits(0, 0, true) : 0

  /**
   * Payload uuid.
   * @member {string} uuid
   * @memberof Payload
   * @instance
   */
  Payload.prototype.uuid = ''

  /**
   * Payload body.
   * @member {Uint8Array} body
   * @memberof Payload
   * @instance
   */
  Payload.prototype.body = $util.newBuffer([])

  /**
   * Creates a new Payload instance using the specified properties.
   * @function create
   * @memberof Payload
   * @static
   * @param {IPayload=} [properties] Properties to set
   * @returns {Payload} Payload instance
   */
  Payload.create = function create(properties) {
    return new Payload(properties)
  }

  /**
   * Encodes the specified Payload message. Does not implicitly {@link Payload.verify|verify} messages.
   * @function encode
   * @memberof Payload
   * @static
   * @param {IPayload} message Payload message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Payload.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create()
    if (message.timestamp != null && message.hasOwnProperty('timestamp'))
      writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.timestamp)
    if (message.metrics != null && message.metrics.length)
      for (var i = 0; i < message.metrics.length; ++i)
        $root.Payload.Metric.encode(
          message.metrics[i],
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim()
    if (message.seq != null && message.hasOwnProperty('seq'))
      writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.seq)
    if (message.uuid != null && message.hasOwnProperty('uuid'))
      writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.uuid)
    if (message.body != null && message.hasOwnProperty('body'))
      writer.uint32(/* id 5, wireType 2 =*/ 42).bytes(message.body)
    return writer
  }

  /**
   * Encodes the specified Payload message, length delimited. Does not implicitly {@link Payload.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Payload
   * @static
   * @param {IPayload} message Payload message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Payload.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
   * Decodes a Payload message from the specified reader or buffer.
   * @function decode
   * @memberof Payload
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Payload} Payload
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Payload.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Payload()
    while (reader.pos < end) {
      var tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.uint64()
          break
        case 2:
          if (!(message.metrics && message.metrics.length)) message.metrics = []
          message.metrics.push(
            $root.Payload.Metric.decode(reader, reader.uint32())
          )
          break
        case 3:
          message.seq = reader.uint64()
          break
        case 4:
          message.uuid = reader.string()
          break
        case 5:
          message.body = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  }

  /**
   * Decodes a Payload message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Payload
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Payload} Payload
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Payload.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader)
    return this.decode(reader, reader.uint32())
  }

  /**
   * Verifies a Payload message.
   * @function verify
   * @memberof Payload
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Payload.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected'
    if (message.timestamp != null && message.hasOwnProperty('timestamp'))
      if (
        !$util.isInteger(message.timestamp) &&
        !(
          message.timestamp &&
          $util.isInteger(message.timestamp.low) &&
          $util.isInteger(message.timestamp.high)
        )
      )
        return 'timestamp: integer|Long expected'
    if (message.metrics != null && message.hasOwnProperty('metrics')) {
      if (!Array.isArray(message.metrics)) return 'metrics: array expected'
      for (var i = 0; i < message.metrics.length; ++i) {
        var error = $root.Payload.Metric.verify(message.metrics[i])
        if (error) return 'metrics.' + error
      }
    }
    if (message.seq != null && message.hasOwnProperty('seq'))
      if (
        !$util.isInteger(message.seq) &&
        !(
          message.seq &&
          $util.isInteger(message.seq.low) &&
          $util.isInteger(message.seq.high)
        )
      )
        return 'seq: integer|Long expected'
    if (message.uuid != null && message.hasOwnProperty('uuid'))
      if (!$util.isString(message.uuid)) return 'uuid: string expected'
    if (message.body != null && message.hasOwnProperty('body'))
      if (
        !(
          (message.body && typeof message.body.length === 'number') ||
          $util.isString(message.body)
        )
      )
        return 'body: buffer expected'
    return null
  }

  /**
   * Creates a Payload message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Payload
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Payload} Payload
   */
  Payload.fromObject = function fromObject(object) {
    if (object instanceof $root.Payload) return object
    var message = new $root.Payload()
    if (object.timestamp != null)
      if ($util.Long)
        (message.timestamp = $util.Long.fromValue(
          object.timestamp
        )).unsigned = true
      else if (typeof object.timestamp === 'string')
        message.timestamp = parseInt(object.timestamp, 10)
      else if (typeof object.timestamp === 'number')
        message.timestamp = object.timestamp
      else if (typeof object.timestamp === 'object')
        message.timestamp = new $util.LongBits(
          object.timestamp.low >>> 0,
          object.timestamp.high >>> 0
        ).toNumber(true)
    if (object.metrics) {
      if (!Array.isArray(object.metrics))
        throw TypeError('.Payload.metrics: array expected')
      message.metrics = []
      for (var i = 0; i < object.metrics.length; ++i) {
        if (typeof object.metrics[i] !== 'object')
          throw TypeError('.Payload.metrics: object expected')
        message.metrics[i] = $root.Payload.Metric.fromObject(object.metrics[i])
      }
    }
    if (object.seq != null)
      if ($util.Long)
        (message.seq = $util.Long.fromValue(object.seq)).unsigned = true
      else if (typeof object.seq === 'string')
        message.seq = parseInt(object.seq, 10)
      else if (typeof object.seq === 'number') message.seq = object.seq
      else if (typeof object.seq === 'object')
        message.seq = new $util.LongBits(
          object.seq.low >>> 0,
          object.seq.high >>> 0
        ).toNumber(true)
    if (object.uuid != null) message.uuid = String(object.uuid)
    if (object.body != null)
      if (typeof object.body === 'string')
        $util.base64.decode(
          object.body,
          (message.body = $util.newBuffer($util.base64.length(object.body))),
          0
        )
      else if (object.body.length) message.body = object.body
    return message
  }

  /**
   * Creates a plain object from a Payload message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Payload
   * @static
   * @param {Payload} message Payload
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Payload.toObject = function toObject(message, options) {
    if (!options) options = {}
    var object = {}
    if (options.arrays || options.defaults) object.metrics = []
    if (options.defaults) {
      if ($util.Long) {
        var long = new $util.Long(0, 0, true)
        object.timestamp =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.timestamp = options.longs === String ? '0' : 0
      if ($util.Long) {
        var long = new $util.Long(0, 0, true)
        object.seq =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.seq = options.longs === String ? '0' : 0
      object.uuid = ''
      if (options.bytes === String) object.body = ''
      else {
        object.body = []
        if (options.bytes !== Array) object.body = $util.newBuffer(object.body)
      }
    }
    if (message.timestamp != null && message.hasOwnProperty('timestamp'))
      if (typeof message.timestamp === 'number')
        object.timestamp =
          options.longs === String
            ? String(message.timestamp)
            : message.timestamp
      else
        object.timestamp =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.timestamp)
            : options.longs === Number
            ? new $util.LongBits(
                message.timestamp.low >>> 0,
                message.timestamp.high >>> 0
              ).toNumber(true)
            : message.timestamp
    if (message.metrics && message.metrics.length) {
      object.metrics = []
      for (var j = 0; j < message.metrics.length; ++j)
        object.metrics[j] = $root.Payload.Metric.toObject(
          message.metrics[j],
          options
        )
    }
    if (message.seq != null && message.hasOwnProperty('seq'))
      if (typeof message.seq === 'number')
        object.seq =
          options.longs === String ? String(message.seq) : message.seq
      else
        object.seq =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.seq)
            : options.longs === Number
            ? new $util.LongBits(
                message.seq.low >>> 0,
                message.seq.high >>> 0
              ).toNumber(true)
            : message.seq
    if (message.uuid != null && message.hasOwnProperty('uuid'))
      object.uuid = message.uuid
    if (message.body != null && message.hasOwnProperty('body'))
      object.body =
        options.bytes === String
          ? $util.base64.encode(message.body, 0, message.body.length)
          : options.bytes === Array
          ? Array.prototype.slice.call(message.body)
          : message.body
    return object
  }

  /**
   * Converts this Payload to JSON.
   * @function toJSON
   * @memberof Payload
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Payload.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  Payload.Template = (function () {
    /**
     * Properties of a Template.
     * @memberof Payload
     * @interface ITemplate
     * @property {string|null} [version] Template version
     * @property {Array.<Payload.IMetric>|null} [metrics] Template metrics
     * @property {Array.<Payload.Template.IParameter>|null} [parameters] Template parameters
     * @property {string|null} [templateRef] Template templateRef
     * @property {boolean|null} [isDefinition] Template isDefinition
     */

    /**
     * Constructs a new Template.
     * @memberof Payload
     * @classdesc Represents a Template.
     * @implements ITemplate
     * @constructor
     * @param {Payload.ITemplate=} [properties] Properties to set
     */
    function Template(properties) {
      this.metrics = []
      this.parameters = []
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Template version.
     * @member {string} version
     * @memberof Payload.Template
     * @instance
     */
    Template.prototype.version = ''

    /**
     * Template metrics.
     * @member {Array.<Payload.IMetric>} metrics
     * @memberof Payload.Template
     * @instance
     */
    Template.prototype.metrics = $util.emptyArray

    /**
     * Template parameters.
     * @member {Array.<Payload.Template.IParameter>} parameters
     * @memberof Payload.Template
     * @instance
     */
    Template.prototype.parameters = $util.emptyArray

    /**
     * Template templateRef.
     * @member {string} templateRef
     * @memberof Payload.Template
     * @instance
     */
    Template.prototype.templateRef = ''

    /**
     * Template isDefinition.
     * @member {boolean} isDefinition
     * @memberof Payload.Template
     * @instance
     */
    Template.prototype.isDefinition = false

    /**
     * Creates a new Template instance using the specified properties.
     * @function create
     * @memberof Payload.Template
     * @static
     * @param {Payload.ITemplate=} [properties] Properties to set
     * @returns {Payload.Template} Template instance
     */
    Template.create = function create(properties) {
      return new Template(properties)
    }

    /**
     * Encodes the specified Template message. Does not implicitly {@link Payload.Template.verify|verify} messages.
     * @function encode
     * @memberof Payload.Template
     * @static
     * @param {Payload.ITemplate} message Template message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Template.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      if (message.version != null && message.hasOwnProperty('version'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.version)
      if (message.metrics != null && message.metrics.length)
        for (var i = 0; i < message.metrics.length; ++i)
          $root.Payload.Metric.encode(
            message.metrics[i],
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
          ).ldelim()
      if (message.parameters != null && message.parameters.length)
        for (var i = 0; i < message.parameters.length; ++i)
          $root.Payload.Template.Parameter.encode(
            message.parameters[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          ).ldelim()
      if (message.templateRef != null && message.hasOwnProperty('templateRef'))
        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.templateRef)
      if (
        message.isDefinition != null &&
        message.hasOwnProperty('isDefinition')
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).bool(message.isDefinition)
      return writer
    }

    /**
     * Encodes the specified Template message, length delimited. Does not implicitly {@link Payload.Template.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Payload.Template
     * @static
     * @param {Payload.ITemplate} message Template message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Template.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a Template message from the specified reader or buffer.
     * @function decode
     * @memberof Payload.Template
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Payload.Template} Template
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Template.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Payload.Template()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.version = reader.string()
            break
          case 2:
            if (!(message.metrics && message.metrics.length))
              message.metrics = []
            message.metrics.push(
              $root.Payload.Metric.decode(reader, reader.uint32())
            )
            break
          case 3:
            if (!(message.parameters && message.parameters.length))
              message.parameters = []
            message.parameters.push(
              $root.Payload.Template.Parameter.decode(reader, reader.uint32())
            )
            break
          case 4:
            message.templateRef = reader.string()
            break
          case 5:
            message.isDefinition = reader.bool()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a Template message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Payload.Template
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Payload.Template} Template
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Template.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a Template message.
     * @function verify
     * @memberof Payload.Template
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Template.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected'
      if (message.version != null && message.hasOwnProperty('version'))
        if (!$util.isString(message.version)) return 'version: string expected'
      if (message.metrics != null && message.hasOwnProperty('metrics')) {
        if (!Array.isArray(message.metrics)) return 'metrics: array expected'
        for (var i = 0; i < message.metrics.length; ++i) {
          var error = $root.Payload.Metric.verify(message.metrics[i])
          if (error) return 'metrics.' + error
        }
      }
      if (message.parameters != null && message.hasOwnProperty('parameters')) {
        if (!Array.isArray(message.parameters))
          return 'parameters: array expected'
        for (var i = 0; i < message.parameters.length; ++i) {
          var error = $root.Payload.Template.Parameter.verify(
            message.parameters[i]
          )
          if (error) return 'parameters.' + error
        }
      }
      if (message.templateRef != null && message.hasOwnProperty('templateRef'))
        if (!$util.isString(message.templateRef))
          return 'templateRef: string expected'
      if (
        message.isDefinition != null &&
        message.hasOwnProperty('isDefinition')
      )
        if (typeof message.isDefinition !== 'boolean')
          return 'isDefinition: boolean expected'
      return null
    }

    /**
     * Creates a Template message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Payload.Template
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Payload.Template} Template
     */
    Template.fromObject = function fromObject(object) {
      if (object instanceof $root.Payload.Template) return object
      var message = new $root.Payload.Template()
      if (object.version != null) message.version = String(object.version)
      if (object.metrics) {
        if (!Array.isArray(object.metrics))
          throw TypeError('.Payload.Template.metrics: array expected')
        message.metrics = []
        for (var i = 0; i < object.metrics.length; ++i) {
          if (typeof object.metrics[i] !== 'object')
            throw TypeError('.Payload.Template.metrics: object expected')
          message.metrics[i] = $root.Payload.Metric.fromObject(
            object.metrics[i]
          )
        }
      }
      if (object.parameters) {
        if (!Array.isArray(object.parameters))
          throw TypeError('.Payload.Template.parameters: array expected')
        message.parameters = []
        for (var i = 0; i < object.parameters.length; ++i) {
          if (typeof object.parameters[i] !== 'object')
            throw TypeError('.Payload.Template.parameters: object expected')
          message.parameters[i] = $root.Payload.Template.Parameter.fromObject(
            object.parameters[i]
          )
        }
      }
      if (object.templateRef != null)
        message.templateRef = String(object.templateRef)
      if (object.isDefinition != null)
        message.isDefinition = Boolean(object.isDefinition)
      return message
    }

    /**
     * Creates a plain object from a Template message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Payload.Template
     * @static
     * @param {Payload.Template} message Template
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Template.toObject = function toObject(message, options) {
      if (!options) options = {}
      var object = {}
      if (options.arrays || options.defaults) {
        object.metrics = []
        object.parameters = []
      }
      if (options.defaults) {
        object.version = ''
        object.templateRef = ''
        object.isDefinition = false
      }
      if (message.version != null && message.hasOwnProperty('version'))
        object.version = message.version
      if (message.metrics && message.metrics.length) {
        object.metrics = []
        for (var j = 0; j < message.metrics.length; ++j)
          object.metrics[j] = $root.Payload.Metric.toObject(
            message.metrics[j],
            options
          )
      }
      if (message.parameters && message.parameters.length) {
        object.parameters = []
        for (var j = 0; j < message.parameters.length; ++j)
          object.parameters[j] = $root.Payload.Template.Parameter.toObject(
            message.parameters[j],
            options
          )
      }
      if (message.templateRef != null && message.hasOwnProperty('templateRef'))
        object.templateRef = message.templateRef
      if (
        message.isDefinition != null &&
        message.hasOwnProperty('isDefinition')
      )
        object.isDefinition = message.isDefinition
      return object
    }

    /**
     * Converts this Template to JSON.
     * @function toJSON
     * @memberof Payload.Template
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Template.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    Template.Parameter = (function () {
      /**
       * Properties of a Parameter.
       * @memberof Payload.Template
       * @interface IParameter
       * @property {string|null} [name] Parameter name
       * @property {number|null} [type] Parameter type
       * @property {number|null} [intValue] Parameter intValue
       * @property {number|Long|null} [longValue] Parameter longValue
       * @property {number|null} [floatValue] Parameter floatValue
       * @property {number|null} [doubleValue] Parameter doubleValue
       * @property {boolean|null} [booleanValue] Parameter booleanValue
       * @property {string|null} [stringValue] Parameter stringValue
       * @property {Payload.Template.Parameter.IParameterValueExtension|null} [extensionValue] Parameter extensionValue
       */

      /**
       * Constructs a new Parameter.
       * @memberof Payload.Template
       * @classdesc Represents a Parameter.
       * @implements IParameter
       * @constructor
       * @param {Payload.Template.IParameter=} [properties] Properties to set
       */
      function Parameter(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Parameter name.
       * @member {string} name
       * @memberof Payload.Template.Parameter
       * @instance
       */
      Parameter.prototype.name = ''

      /**
       * Parameter type.
       * @member {number} type
       * @memberof Payload.Template.Parameter
       * @instance
       */
      Parameter.prototype.type = 0

      /**
       * Parameter intValue.
       * @member {number} intValue
       * @memberof Payload.Template.Parameter
       * @instance
       */
      Parameter.prototype.intValue = 0

      /**
       * Parameter longValue.
       * @member {number|Long} longValue
       * @memberof Payload.Template.Parameter
       * @instance
       */
      Parameter.prototype.longValue = $util.Long
        ? $util.Long.fromBits(0, 0, true)
        : 0

      /**
       * Parameter floatValue.
       * @member {number} floatValue
       * @memberof Payload.Template.Parameter
       * @instance
       */
      Parameter.prototype.floatValue = 0

      /**
       * Parameter doubleValue.
       * @member {number} doubleValue
       * @memberof Payload.Template.Parameter
       * @instance
       */
      Parameter.prototype.doubleValue = 0

      /**
       * Parameter booleanValue.
       * @member {boolean} booleanValue
       * @memberof Payload.Template.Parameter
       * @instance
       */
      Parameter.prototype.booleanValue = false

      /**
       * Parameter stringValue.
       * @member {string} stringValue
       * @memberof Payload.Template.Parameter
       * @instance
       */
      Parameter.prototype.stringValue = ''

      /**
       * Parameter extensionValue.
       * @member {Payload.Template.Parameter.IParameterValueExtension|null|undefined} extensionValue
       * @memberof Payload.Template.Parameter
       * @instance
       */
      Parameter.prototype.extensionValue = null

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields

      /**
       * Parameter value.
       * @member {"intValue"|"longValue"|"floatValue"|"doubleValue"|"booleanValue"|"stringValue"|"extensionValue"|undefined} value
       * @memberof Payload.Template.Parameter
       * @instance
       */
      Object.defineProperty(Parameter.prototype, 'value', {
        get: $util.oneOfGetter(
          ($oneOfFields = [
            'intValue',
            'longValue',
            'floatValue',
            'doubleValue',
            'booleanValue',
            'stringValue',
            'extensionValue',
          ])
        ),
        set: $util.oneOfSetter($oneOfFields),
      })

      /**
       * Creates a new Parameter instance using the specified properties.
       * @function create
       * @memberof Payload.Template.Parameter
       * @static
       * @param {Payload.Template.IParameter=} [properties] Properties to set
       * @returns {Payload.Template.Parameter} Parameter instance
       */
      Parameter.create = function create(properties) {
        return new Parameter(properties)
      }

      /**
       * Encodes the specified Parameter message. Does not implicitly {@link Payload.Template.Parameter.verify|verify} messages.
       * @function encode
       * @memberof Payload.Template.Parameter
       * @static
       * @param {Payload.Template.IParameter} message Parameter message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Parameter.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.name != null && message.hasOwnProperty('name'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name)
        if (message.type != null && message.hasOwnProperty('type'))
          writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.type)
        if (message.intValue != null && message.hasOwnProperty('intValue'))
          writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.intValue)
        if (message.longValue != null && message.hasOwnProperty('longValue'))
          writer.uint32(/* id 4, wireType 0 =*/ 32).uint64(message.longValue)
        if (message.floatValue != null && message.hasOwnProperty('floatValue'))
          writer.uint32(/* id 5, wireType 5 =*/ 45).float(message.floatValue)
        if (
          message.doubleValue != null &&
          message.hasOwnProperty('doubleValue')
        )
          writer.uint32(/* id 6, wireType 1 =*/ 49).double(message.doubleValue)
        if (
          message.booleanValue != null &&
          message.hasOwnProperty('booleanValue')
        )
          writer.uint32(/* id 7, wireType 0 =*/ 56).bool(message.booleanValue)
        if (
          message.stringValue != null &&
          message.hasOwnProperty('stringValue')
        )
          writer.uint32(/* id 8, wireType 2 =*/ 66).string(message.stringValue)
        if (
          message.extensionValue != null &&
          message.hasOwnProperty('extensionValue')
        )
          $root.Payload.Template.Parameter.ParameterValueExtension.encode(
            message.extensionValue,
            writer.uint32(/* id 9, wireType 2 =*/ 74).fork()
          ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Parameter message, length delimited. Does not implicitly {@link Payload.Template.Parameter.verify|verify} messages.
       * @function encodeDelimited
       * @memberof Payload.Template.Parameter
       * @static
       * @param {Payload.Template.IParameter} message Parameter message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Parameter.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Parameter message from the specified reader or buffer.
       * @function decode
       * @memberof Payload.Template.Parameter
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {Payload.Template.Parameter} Parameter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Parameter.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.Payload.Template.Parameter()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.name = reader.string()
              break
            case 2:
              message.type = reader.uint32()
              break
            case 3:
              message.intValue = reader.uint32()
              break
            case 4:
              message.longValue = reader.uint64()
              break
            case 5:
              message.floatValue = reader.float()
              break
            case 6:
              message.doubleValue = reader.double()
              break
            case 7:
              message.booleanValue = reader.bool()
              break
            case 8:
              message.stringValue = reader.string()
              break
            case 9:
              message.extensionValue =
                $root.Payload.Template.Parameter.ParameterValueExtension.decode(
                  reader,
                  reader.uint32()
                )
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Parameter message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof Payload.Template.Parameter
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {Payload.Template.Parameter} Parameter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Parameter.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Parameter message.
       * @function verify
       * @memberof Payload.Template.Parameter
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Parameter.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected'
        var properties = {}
        if (message.name != null && message.hasOwnProperty('name'))
          if (!$util.isString(message.name)) return 'name: string expected'
        if (message.type != null && message.hasOwnProperty('type'))
          if (!$util.isInteger(message.type)) return 'type: integer expected'
        if (message.intValue != null && message.hasOwnProperty('intValue')) {
          properties.value = 1
          if (!$util.isInteger(message.intValue))
            return 'intValue: integer expected'
        }
        if (message.longValue != null && message.hasOwnProperty('longValue')) {
          if (properties.value === 1) return 'value: multiple values'
          properties.value = 1
          if (
            !$util.isInteger(message.longValue) &&
            !(
              message.longValue &&
              $util.isInteger(message.longValue.low) &&
              $util.isInteger(message.longValue.high)
            )
          )
            return 'longValue: integer|Long expected'
        }
        if (
          message.floatValue != null &&
          message.hasOwnProperty('floatValue')
        ) {
          if (properties.value === 1) return 'value: multiple values'
          properties.value = 1
          if (typeof message.floatValue !== 'number')
            return 'floatValue: number expected'
        }
        if (
          message.doubleValue != null &&
          message.hasOwnProperty('doubleValue')
        ) {
          if (properties.value === 1) return 'value: multiple values'
          properties.value = 1
          if (typeof message.doubleValue !== 'number')
            return 'doubleValue: number expected'
        }
        if (
          message.booleanValue != null &&
          message.hasOwnProperty('booleanValue')
        ) {
          if (properties.value === 1) return 'value: multiple values'
          properties.value = 1
          if (typeof message.booleanValue !== 'boolean')
            return 'booleanValue: boolean expected'
        }
        if (
          message.stringValue != null &&
          message.hasOwnProperty('stringValue')
        ) {
          if (properties.value === 1) return 'value: multiple values'
          properties.value = 1
          if (!$util.isString(message.stringValue))
            return 'stringValue: string expected'
        }
        if (
          message.extensionValue != null &&
          message.hasOwnProperty('extensionValue')
        ) {
          if (properties.value === 1) return 'value: multiple values'
          properties.value = 1
          {
            var error =
              $root.Payload.Template.Parameter.ParameterValueExtension.verify(
                message.extensionValue
              )
            if (error) return 'extensionValue.' + error
          }
        }
        return null
      }

      /**
       * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof Payload.Template.Parameter
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {Payload.Template.Parameter} Parameter
       */
      Parameter.fromObject = function fromObject(object) {
        if (object instanceof $root.Payload.Template.Parameter) return object
        var message = new $root.Payload.Template.Parameter()
        if (object.name != null) message.name = String(object.name)
        if (object.type != null) message.type = object.type >>> 0
        if (object.intValue != null) message.intValue = object.intValue >>> 0
        if (object.longValue != null)
          if ($util.Long)
            (message.longValue = $util.Long.fromValue(
              object.longValue
            )).unsigned = true
          else if (typeof object.longValue === 'string')
            message.longValue = parseInt(object.longValue, 10)
          else if (typeof object.longValue === 'number')
            message.longValue = object.longValue
          else if (typeof object.longValue === 'object')
            message.longValue = new $util.LongBits(
              object.longValue.low >>> 0,
              object.longValue.high >>> 0
            ).toNumber(true)
        if (object.floatValue != null)
          message.floatValue = Number(object.floatValue)
        if (object.doubleValue != null)
          message.doubleValue = Number(object.doubleValue)
        if (object.booleanValue != null)
          message.booleanValue = Boolean(object.booleanValue)
        if (object.stringValue != null)
          message.stringValue = String(object.stringValue)
        if (object.extensionValue != null) {
          if (typeof object.extensionValue !== 'object')
            throw TypeError(
              '.Payload.Template.Parameter.extensionValue: object expected'
            )
          message.extensionValue =
            $root.Payload.Template.Parameter.ParameterValueExtension.fromObject(
              object.extensionValue
            )
        }
        return message
      }

      /**
       * Creates a plain object from a Parameter message. Also converts values to other types if specified.
       * @function toObject
       * @memberof Payload.Template.Parameter
       * @static
       * @param {Payload.Template.Parameter} message Parameter
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Parameter.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.name = ''
          object.type = 0
        }
        if (message.name != null && message.hasOwnProperty('name'))
          object.name = message.name
        if (message.type != null && message.hasOwnProperty('type'))
          object.type = message.type
        if (message.intValue != null && message.hasOwnProperty('intValue')) {
          object.intValue = message.intValue
          if (options.oneofs) object.value = 'intValue'
        }
        if (message.longValue != null && message.hasOwnProperty('longValue')) {
          if (typeof message.longValue === 'number')
            object.longValue =
              options.longs === String
                ? String(message.longValue)
                : message.longValue
          else
            object.longValue =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.longValue)
                : options.longs === Number
                ? new $util.LongBits(
                    message.longValue.low >>> 0,
                    message.longValue.high >>> 0
                  ).toNumber(true)
                : message.longValue
          if (options.oneofs) object.value = 'longValue'
        }
        if (
          message.floatValue != null &&
          message.hasOwnProperty('floatValue')
        ) {
          object.floatValue =
            options.json && !isFinite(message.floatValue)
              ? String(message.floatValue)
              : message.floatValue
          if (options.oneofs) object.value = 'floatValue'
        }
        if (
          message.doubleValue != null &&
          message.hasOwnProperty('doubleValue')
        ) {
          object.doubleValue =
            options.json && !isFinite(message.doubleValue)
              ? String(message.doubleValue)
              : message.doubleValue
          if (options.oneofs) object.value = 'doubleValue'
        }
        if (
          message.booleanValue != null &&
          message.hasOwnProperty('booleanValue')
        ) {
          object.booleanValue = message.booleanValue
          if (options.oneofs) object.value = 'booleanValue'
        }
        if (
          message.stringValue != null &&
          message.hasOwnProperty('stringValue')
        ) {
          object.stringValue = message.stringValue
          if (options.oneofs) object.value = 'stringValue'
        }
        if (
          message.extensionValue != null &&
          message.hasOwnProperty('extensionValue')
        ) {
          object.extensionValue =
            $root.Payload.Template.Parameter.ParameterValueExtension.toObject(
              message.extensionValue,
              options
            )
          if (options.oneofs) object.value = 'extensionValue'
        }
        return object
      }

      /**
       * Converts this Parameter to JSON.
       * @function toJSON
       * @memberof Payload.Template.Parameter
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Parameter.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      Parameter.ParameterValueExtension = (function () {
        /**
         * Properties of a ParameterValueExtension.
         * @memberof Payload.Template.Parameter
         * @interface IParameterValueExtension
         */

        /**
         * Constructs a new ParameterValueExtension.
         * @memberof Payload.Template.Parameter
         * @classdesc Represents a ParameterValueExtension.
         * @implements IParameterValueExtension
         * @constructor
         * @param {Payload.Template.Parameter.IParameterValueExtension=} [properties] Properties to set
         */
        function ParameterValueExtension(properties) {
          if (properties)
            for (
              var keys = Object.keys(properties), i = 0;
              i < keys.length;
              ++i
            )
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]]
        }

        /**
         * Creates a new ParameterValueExtension instance using the specified properties.
         * @function create
         * @memberof Payload.Template.Parameter.ParameterValueExtension
         * @static
         * @param {Payload.Template.Parameter.IParameterValueExtension=} [properties] Properties to set
         * @returns {Payload.Template.Parameter.ParameterValueExtension} ParameterValueExtension instance
         */
        ParameterValueExtension.create = function create(properties) {
          return new ParameterValueExtension(properties)
        }

        /**
         * Encodes the specified ParameterValueExtension message. Does not implicitly {@link Payload.Template.Parameter.ParameterValueExtension.verify|verify} messages.
         * @function encode
         * @memberof Payload.Template.Parameter.ParameterValueExtension
         * @static
         * @param {Payload.Template.Parameter.IParameterValueExtension} message ParameterValueExtension message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParameterValueExtension.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create()
          return writer
        }

        /**
         * Encodes the specified ParameterValueExtension message, length delimited. Does not implicitly {@link Payload.Template.Parameter.ParameterValueExtension.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Payload.Template.Parameter.ParameterValueExtension
         * @static
         * @param {Payload.Template.Parameter.IParameterValueExtension} message ParameterValueExtension message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParameterValueExtension.encodeDelimited = function encodeDelimited(
          message,
          writer
        ) {
          return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a ParameterValueExtension message from the specified reader or buffer.
         * @function decode
         * @memberof Payload.Template.Parameter.ParameterValueExtension
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Payload.Template.Parameter.ParameterValueExtension} ParameterValueExtension
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParameterValueExtension.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          var end = length === undefined ? reader.len : reader.pos + length,
            message =
              new $root.Payload.Template.Parameter.ParameterValueExtension()
          while (reader.pos < end) {
            var tag = reader.uint32()
            switch (tag >>> 3) {
              default:
                reader.skipType(tag & 7)
                break
            }
          }
          return message
        }

        /**
         * Decodes a ParameterValueExtension message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Payload.Template.Parameter.ParameterValueExtension
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Payload.Template.Parameter.ParameterValueExtension} ParameterValueExtension
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParameterValueExtension.decodeDelimited = function decodeDelimited(
          reader
        ) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a ParameterValueExtension message.
         * @function verify
         * @memberof Payload.Template.Parameter.ParameterValueExtension
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParameterValueExtension.verify = function verify(message) {
          if (typeof message !== 'object' || message === null)
            return 'object expected'
          return null
        }

        /**
         * Creates a ParameterValueExtension message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Payload.Template.Parameter.ParameterValueExtension
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Payload.Template.Parameter.ParameterValueExtension} ParameterValueExtension
         */
        ParameterValueExtension.fromObject = function fromObject(object) {
          if (
            object instanceof
            $root.Payload.Template.Parameter.ParameterValueExtension
          )
            return object
          return new $root.Payload.Template.Parameter.ParameterValueExtension()
        }

        /**
         * Creates a plain object from a ParameterValueExtension message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Payload.Template.Parameter.ParameterValueExtension
         * @static
         * @param {Payload.Template.Parameter.ParameterValueExtension} message ParameterValueExtension
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParameterValueExtension.toObject = function toObject() {
          return {}
        }

        /**
         * Converts this ParameterValueExtension to JSON.
         * @function toJSON
         * @memberof Payload.Template.Parameter.ParameterValueExtension
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParameterValueExtension.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return ParameterValueExtension
      })()

      return Parameter
    })()

    return Template
  })()

  Payload.DataSet = (function () {
    /**
     * Properties of a DataSet.
     * @memberof Payload
     * @interface IDataSet
     * @property {number|Long|null} [numOfColumns] DataSet numOfColumns
     * @property {Array.<string>|null} [columns] DataSet columns
     * @property {Array.<number>|null} [types] DataSet types
     * @property {Array.<Payload.DataSet.IRow>|null} [rows] DataSet rows
     */

    /**
     * Constructs a new DataSet.
     * @memberof Payload
     * @classdesc Represents a DataSet.
     * @implements IDataSet
     * @constructor
     * @param {Payload.IDataSet=} [properties] Properties to set
     */
    function DataSet(properties) {
      this.columns = []
      this.types = []
      this.rows = []
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * DataSet numOfColumns.
     * @member {number|Long} numOfColumns
     * @memberof Payload.DataSet
     * @instance
     */
    DataSet.prototype.numOfColumns = $util.Long
      ? $util.Long.fromBits(0, 0, true)
      : 0

    /**
     * DataSet columns.
     * @member {Array.<string>} columns
     * @memberof Payload.DataSet
     * @instance
     */
    DataSet.prototype.columns = $util.emptyArray

    /**
     * DataSet types.
     * @member {Array.<number>} types
     * @memberof Payload.DataSet
     * @instance
     */
    DataSet.prototype.types = $util.emptyArray

    /**
     * DataSet rows.
     * @member {Array.<Payload.DataSet.IRow>} rows
     * @memberof Payload.DataSet
     * @instance
     */
    DataSet.prototype.rows = $util.emptyArray

    /**
     * Creates a new DataSet instance using the specified properties.
     * @function create
     * @memberof Payload.DataSet
     * @static
     * @param {Payload.IDataSet=} [properties] Properties to set
     * @returns {Payload.DataSet} DataSet instance
     */
    DataSet.create = function create(properties) {
      return new DataSet(properties)
    }

    /**
     * Encodes the specified DataSet message. Does not implicitly {@link Payload.DataSet.verify|verify} messages.
     * @function encode
     * @memberof Payload.DataSet
     * @static
     * @param {Payload.IDataSet} message DataSet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DataSet.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      if (
        message.numOfColumns != null &&
        message.hasOwnProperty('numOfColumns')
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.numOfColumns)
      if (message.columns != null && message.columns.length)
        for (var i = 0; i < message.columns.length; ++i)
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.columns[i])
      if (message.types != null && message.types.length)
        for (var i = 0; i < message.types.length; ++i)
          writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.types[i])
      if (message.rows != null && message.rows.length)
        for (var i = 0; i < message.rows.length; ++i)
          $root.Payload.DataSet.Row.encode(
            message.rows[i],
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
          ).ldelim()
      return writer
    }

    /**
     * Encodes the specified DataSet message, length delimited. Does not implicitly {@link Payload.DataSet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Payload.DataSet
     * @static
     * @param {Payload.IDataSet} message DataSet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DataSet.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a DataSet message from the specified reader or buffer.
     * @function decode
     * @memberof Payload.DataSet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Payload.DataSet} DataSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DataSet.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Payload.DataSet()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.numOfColumns = reader.uint64()
            break
          case 2:
            if (!(message.columns && message.columns.length))
              message.columns = []
            message.columns.push(reader.string())
            break
          case 3:
            if (!(message.types && message.types.length)) message.types = []
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos
              while (reader.pos < end2) message.types.push(reader.uint32())
            } else message.types.push(reader.uint32())
            break
          case 4:
            if (!(message.rows && message.rows.length)) message.rows = []
            message.rows.push(
              $root.Payload.DataSet.Row.decode(reader, reader.uint32())
            )
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a DataSet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Payload.DataSet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Payload.DataSet} DataSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DataSet.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a DataSet message.
     * @function verify
     * @memberof Payload.DataSet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DataSet.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected'
      if (
        message.numOfColumns != null &&
        message.hasOwnProperty('numOfColumns')
      )
        if (
          !$util.isInteger(message.numOfColumns) &&
          !(
            message.numOfColumns &&
            $util.isInteger(message.numOfColumns.low) &&
            $util.isInteger(message.numOfColumns.high)
          )
        )
          return 'numOfColumns: integer|Long expected'
      if (message.columns != null && message.hasOwnProperty('columns')) {
        if (!Array.isArray(message.columns)) return 'columns: array expected'
        for (var i = 0; i < message.columns.length; ++i)
          if (!$util.isString(message.columns[i]))
            return 'columns: string[] expected'
      }
      if (message.types != null && message.hasOwnProperty('types')) {
        if (!Array.isArray(message.types)) return 'types: array expected'
        for (var i = 0; i < message.types.length; ++i)
          if (!$util.isInteger(message.types[i]))
            return 'types: integer[] expected'
      }
      if (message.rows != null && message.hasOwnProperty('rows')) {
        if (!Array.isArray(message.rows)) return 'rows: array expected'
        for (var i = 0; i < message.rows.length; ++i) {
          var error = $root.Payload.DataSet.Row.verify(message.rows[i])
          if (error) return 'rows.' + error
        }
      }
      return null
    }

    /**
     * Creates a DataSet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Payload.DataSet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Payload.DataSet} DataSet
     */
    DataSet.fromObject = function fromObject(object) {
      if (object instanceof $root.Payload.DataSet) return object
      var message = new $root.Payload.DataSet()
      if (object.numOfColumns != null)
        if ($util.Long)
          (message.numOfColumns = $util.Long.fromValue(
            object.numOfColumns
          )).unsigned = true
        else if (typeof object.numOfColumns === 'string')
          message.numOfColumns = parseInt(object.numOfColumns, 10)
        else if (typeof object.numOfColumns === 'number')
          message.numOfColumns = object.numOfColumns
        else if (typeof object.numOfColumns === 'object')
          message.numOfColumns = new $util.LongBits(
            object.numOfColumns.low >>> 0,
            object.numOfColumns.high >>> 0
          ).toNumber(true)
      if (object.columns) {
        if (!Array.isArray(object.columns))
          throw TypeError('.Payload.DataSet.columns: array expected')
        message.columns = []
        for (var i = 0; i < object.columns.length; ++i)
          message.columns[i] = String(object.columns[i])
      }
      if (object.types) {
        if (!Array.isArray(object.types))
          throw TypeError('.Payload.DataSet.types: array expected')
        message.types = []
        for (var i = 0; i < object.types.length; ++i)
          message.types[i] = object.types[i] >>> 0
      }
      if (object.rows) {
        if (!Array.isArray(object.rows))
          throw TypeError('.Payload.DataSet.rows: array expected')
        message.rows = []
        for (var i = 0; i < object.rows.length; ++i) {
          if (typeof object.rows[i] !== 'object')
            throw TypeError('.Payload.DataSet.rows: object expected')
          message.rows[i] = $root.Payload.DataSet.Row.fromObject(object.rows[i])
        }
      }
      return message
    }

    /**
     * Creates a plain object from a DataSet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Payload.DataSet
     * @static
     * @param {Payload.DataSet} message DataSet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DataSet.toObject = function toObject(message, options) {
      if (!options) options = {}
      var object = {}
      if (options.arrays || options.defaults) {
        object.columns = []
        object.types = []
        object.rows = []
      }
      if (options.defaults)
        if ($util.Long) {
          var long = new $util.Long(0, 0, true)
          object.numOfColumns =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long
        } else object.numOfColumns = options.longs === String ? '0' : 0
      if (
        message.numOfColumns != null &&
        message.hasOwnProperty('numOfColumns')
      )
        if (typeof message.numOfColumns === 'number')
          object.numOfColumns =
            options.longs === String
              ? String(message.numOfColumns)
              : message.numOfColumns
        else
          object.numOfColumns =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.numOfColumns)
              : options.longs === Number
              ? new $util.LongBits(
                  message.numOfColumns.low >>> 0,
                  message.numOfColumns.high >>> 0
                ).toNumber(true)
              : message.numOfColumns
      if (message.columns && message.columns.length) {
        object.columns = []
        for (var j = 0; j < message.columns.length; ++j)
          object.columns[j] = message.columns[j]
      }
      if (message.types && message.types.length) {
        object.types = []
        for (var j = 0; j < message.types.length; ++j)
          object.types[j] = message.types[j]
      }
      if (message.rows && message.rows.length) {
        object.rows = []
        for (var j = 0; j < message.rows.length; ++j)
          object.rows[j] = $root.Payload.DataSet.Row.toObject(
            message.rows[j],
            options
          )
      }
      return object
    }

    /**
     * Converts this DataSet to JSON.
     * @function toJSON
     * @memberof Payload.DataSet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DataSet.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    DataSet.DataSetValue = (function () {
      /**
       * Properties of a DataSetValue.
       * @memberof Payload.DataSet
       * @interface IDataSetValue
       * @property {number|null} [intValue] DataSetValue intValue
       * @property {number|Long|null} [longValue] DataSetValue longValue
       * @property {number|null} [floatValue] DataSetValue floatValue
       * @property {number|null} [doubleValue] DataSetValue doubleValue
       * @property {boolean|null} [booleanValue] DataSetValue booleanValue
       * @property {string|null} [stringValue] DataSetValue stringValue
       * @property {Payload.DataSet.DataSetValue.IDataSetValueExtension|null} [extensionValue] DataSetValue extensionValue
       */

      /**
       * Constructs a new DataSetValue.
       * @memberof Payload.DataSet
       * @classdesc Represents a DataSetValue.
       * @implements IDataSetValue
       * @constructor
       * @param {Payload.DataSet.IDataSetValue=} [properties] Properties to set
       */
      function DataSetValue(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * DataSetValue intValue.
       * @member {number} intValue
       * @memberof Payload.DataSet.DataSetValue
       * @instance
       */
      DataSetValue.prototype.intValue = 0

      /**
       * DataSetValue longValue.
       * @member {number|Long} longValue
       * @memberof Payload.DataSet.DataSetValue
       * @instance
       */
      DataSetValue.prototype.longValue = $util.Long
        ? $util.Long.fromBits(0, 0, true)
        : 0

      /**
       * DataSetValue floatValue.
       * @member {number} floatValue
       * @memberof Payload.DataSet.DataSetValue
       * @instance
       */
      DataSetValue.prototype.floatValue = 0

      /**
       * DataSetValue doubleValue.
       * @member {number} doubleValue
       * @memberof Payload.DataSet.DataSetValue
       * @instance
       */
      DataSetValue.prototype.doubleValue = 0

      /**
       * DataSetValue booleanValue.
       * @member {boolean} booleanValue
       * @memberof Payload.DataSet.DataSetValue
       * @instance
       */
      DataSetValue.prototype.booleanValue = false

      /**
       * DataSetValue stringValue.
       * @member {string} stringValue
       * @memberof Payload.DataSet.DataSetValue
       * @instance
       */
      DataSetValue.prototype.stringValue = ''

      /**
       * DataSetValue extensionValue.
       * @member {Payload.DataSet.DataSetValue.IDataSetValueExtension|null|undefined} extensionValue
       * @memberof Payload.DataSet.DataSetValue
       * @instance
       */
      DataSetValue.prototype.extensionValue = null

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields

      /**
       * DataSetValue value.
       * @member {"intValue"|"longValue"|"floatValue"|"doubleValue"|"booleanValue"|"stringValue"|"extensionValue"|undefined} value
       * @memberof Payload.DataSet.DataSetValue
       * @instance
       */
      Object.defineProperty(DataSetValue.prototype, 'value', {
        get: $util.oneOfGetter(
          ($oneOfFields = [
            'intValue',
            'longValue',
            'floatValue',
            'doubleValue',
            'booleanValue',
            'stringValue',
            'extensionValue',
          ])
        ),
        set: $util.oneOfSetter($oneOfFields),
      })

      /**
       * Creates a new DataSetValue instance using the specified properties.
       * @function create
       * @memberof Payload.DataSet.DataSetValue
       * @static
       * @param {Payload.DataSet.IDataSetValue=} [properties] Properties to set
       * @returns {Payload.DataSet.DataSetValue} DataSetValue instance
       */
      DataSetValue.create = function create(properties) {
        return new DataSetValue(properties)
      }

      /**
       * Encodes the specified DataSetValue message. Does not implicitly {@link Payload.DataSet.DataSetValue.verify|verify} messages.
       * @function encode
       * @memberof Payload.DataSet.DataSetValue
       * @static
       * @param {Payload.DataSet.IDataSetValue} message DataSetValue message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DataSetValue.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.intValue != null && message.hasOwnProperty('intValue'))
          writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.intValue)
        if (message.longValue != null && message.hasOwnProperty('longValue'))
          writer.uint32(/* id 2, wireType 0 =*/ 16).uint64(message.longValue)
        if (message.floatValue != null && message.hasOwnProperty('floatValue'))
          writer.uint32(/* id 3, wireType 5 =*/ 29).float(message.floatValue)
        if (
          message.doubleValue != null &&
          message.hasOwnProperty('doubleValue')
        )
          writer.uint32(/* id 4, wireType 1 =*/ 33).double(message.doubleValue)
        if (
          message.booleanValue != null &&
          message.hasOwnProperty('booleanValue')
        )
          writer.uint32(/* id 5, wireType 0 =*/ 40).bool(message.booleanValue)
        if (
          message.stringValue != null &&
          message.hasOwnProperty('stringValue')
        )
          writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.stringValue)
        if (
          message.extensionValue != null &&
          message.hasOwnProperty('extensionValue')
        )
          $root.Payload.DataSet.DataSetValue.DataSetValueExtension.encode(
            message.extensionValue,
            writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
          ).ldelim()
        return writer
      }

      /**
       * Encodes the specified DataSetValue message, length delimited. Does not implicitly {@link Payload.DataSet.DataSetValue.verify|verify} messages.
       * @function encodeDelimited
       * @memberof Payload.DataSet.DataSetValue
       * @static
       * @param {Payload.DataSet.IDataSetValue} message DataSetValue message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DataSetValue.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a DataSetValue message from the specified reader or buffer.
       * @function decode
       * @memberof Payload.DataSet.DataSetValue
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {Payload.DataSet.DataSetValue} DataSetValue
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DataSetValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.Payload.DataSet.DataSetValue()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.intValue = reader.uint32()
              break
            case 2:
              message.longValue = reader.uint64()
              break
            case 3:
              message.floatValue = reader.float()
              break
            case 4:
              message.doubleValue = reader.double()
              break
            case 5:
              message.booleanValue = reader.bool()
              break
            case 6:
              message.stringValue = reader.string()
              break
            case 7:
              message.extensionValue =
                $root.Payload.DataSet.DataSetValue.DataSetValueExtension.decode(
                  reader,
                  reader.uint32()
                )
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a DataSetValue message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof Payload.DataSet.DataSetValue
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {Payload.DataSet.DataSetValue} DataSetValue
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DataSetValue.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a DataSetValue message.
       * @function verify
       * @memberof Payload.DataSet.DataSetValue
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DataSetValue.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected'
        var properties = {}
        if (message.intValue != null && message.hasOwnProperty('intValue')) {
          properties.value = 1
          if (!$util.isInteger(message.intValue))
            return 'intValue: integer expected'
        }
        if (message.longValue != null && message.hasOwnProperty('longValue')) {
          if (properties.value === 1) return 'value: multiple values'
          properties.value = 1
          if (
            !$util.isInteger(message.longValue) &&
            !(
              message.longValue &&
              $util.isInteger(message.longValue.low) &&
              $util.isInteger(message.longValue.high)
            )
          )
            return 'longValue: integer|Long expected'
        }
        if (
          message.floatValue != null &&
          message.hasOwnProperty('floatValue')
        ) {
          if (properties.value === 1) return 'value: multiple values'
          properties.value = 1
          if (typeof message.floatValue !== 'number')
            return 'floatValue: number expected'
        }
        if (
          message.doubleValue != null &&
          message.hasOwnProperty('doubleValue')
        ) {
          if (properties.value === 1) return 'value: multiple values'
          properties.value = 1
          if (typeof message.doubleValue !== 'number')
            return 'doubleValue: number expected'
        }
        if (
          message.booleanValue != null &&
          message.hasOwnProperty('booleanValue')
        ) {
          if (properties.value === 1) return 'value: multiple values'
          properties.value = 1
          if (typeof message.booleanValue !== 'boolean')
            return 'booleanValue: boolean expected'
        }
        if (
          message.stringValue != null &&
          message.hasOwnProperty('stringValue')
        ) {
          if (properties.value === 1) return 'value: multiple values'
          properties.value = 1
          if (!$util.isString(message.stringValue))
            return 'stringValue: string expected'
        }
        if (
          message.extensionValue != null &&
          message.hasOwnProperty('extensionValue')
        ) {
          if (properties.value === 1) return 'value: multiple values'
          properties.value = 1
          {
            var error =
              $root.Payload.DataSet.DataSetValue.DataSetValueExtension.verify(
                message.extensionValue
              )
            if (error) return 'extensionValue.' + error
          }
        }
        return null
      }

      /**
       * Creates a DataSetValue message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof Payload.DataSet.DataSetValue
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {Payload.DataSet.DataSetValue} DataSetValue
       */
      DataSetValue.fromObject = function fromObject(object) {
        if (object instanceof $root.Payload.DataSet.DataSetValue) return object
        var message = new $root.Payload.DataSet.DataSetValue()
        if (object.intValue != null) message.intValue = object.intValue >>> 0
        if (object.longValue != null)
          if ($util.Long)
            (message.longValue = $util.Long.fromValue(
              object.longValue
            )).unsigned = true
          else if (typeof object.longValue === 'string')
            message.longValue = parseInt(object.longValue, 10)
          else if (typeof object.longValue === 'number')
            message.longValue = object.longValue
          else if (typeof object.longValue === 'object')
            message.longValue = new $util.LongBits(
              object.longValue.low >>> 0,
              object.longValue.high >>> 0
            ).toNumber(true)
        if (object.floatValue != null)
          message.floatValue = Number(object.floatValue)
        if (object.doubleValue != null)
          message.doubleValue = Number(object.doubleValue)
        if (object.booleanValue != null)
          message.booleanValue = Boolean(object.booleanValue)
        if (object.stringValue != null)
          message.stringValue = String(object.stringValue)
        if (object.extensionValue != null) {
          if (typeof object.extensionValue !== 'object')
            throw TypeError(
              '.Payload.DataSet.DataSetValue.extensionValue: object expected'
            )
          message.extensionValue =
            $root.Payload.DataSet.DataSetValue.DataSetValueExtension.fromObject(
              object.extensionValue
            )
        }
        return message
      }

      /**
       * Creates a plain object from a DataSetValue message. Also converts values to other types if specified.
       * @function toObject
       * @memberof Payload.DataSet.DataSetValue
       * @static
       * @param {Payload.DataSet.DataSetValue} message DataSetValue
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DataSetValue.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (message.intValue != null && message.hasOwnProperty('intValue')) {
          object.intValue = message.intValue
          if (options.oneofs) object.value = 'intValue'
        }
        if (message.longValue != null && message.hasOwnProperty('longValue')) {
          if (typeof message.longValue === 'number')
            object.longValue =
              options.longs === String
                ? String(message.longValue)
                : message.longValue
          else
            object.longValue =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.longValue)
                : options.longs === Number
                ? new $util.LongBits(
                    message.longValue.low >>> 0,
                    message.longValue.high >>> 0
                  ).toNumber(true)
                : message.longValue
          if (options.oneofs) object.value = 'longValue'
        }
        if (
          message.floatValue != null &&
          message.hasOwnProperty('floatValue')
        ) {
          object.floatValue =
            options.json && !isFinite(message.floatValue)
              ? String(message.floatValue)
              : message.floatValue
          if (options.oneofs) object.value = 'floatValue'
        }
        if (
          message.doubleValue != null &&
          message.hasOwnProperty('doubleValue')
        ) {
          object.doubleValue =
            options.json && !isFinite(message.doubleValue)
              ? String(message.doubleValue)
              : message.doubleValue
          if (options.oneofs) object.value = 'doubleValue'
        }
        if (
          message.booleanValue != null &&
          message.hasOwnProperty('booleanValue')
        ) {
          object.booleanValue = message.booleanValue
          if (options.oneofs) object.value = 'booleanValue'
        }
        if (
          message.stringValue != null &&
          message.hasOwnProperty('stringValue')
        ) {
          object.stringValue = message.stringValue
          if (options.oneofs) object.value = 'stringValue'
        }
        if (
          message.extensionValue != null &&
          message.hasOwnProperty('extensionValue')
        ) {
          object.extensionValue =
            $root.Payload.DataSet.DataSetValue.DataSetValueExtension.toObject(
              message.extensionValue,
              options
            )
          if (options.oneofs) object.value = 'extensionValue'
        }
        return object
      }

      /**
       * Converts this DataSetValue to JSON.
       * @function toJSON
       * @memberof Payload.DataSet.DataSetValue
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DataSetValue.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      DataSetValue.DataSetValueExtension = (function () {
        /**
         * Properties of a DataSetValueExtension.
         * @memberof Payload.DataSet.DataSetValue
         * @interface IDataSetValueExtension
         */

        /**
         * Constructs a new DataSetValueExtension.
         * @memberof Payload.DataSet.DataSetValue
         * @classdesc Represents a DataSetValueExtension.
         * @implements IDataSetValueExtension
         * @constructor
         * @param {Payload.DataSet.DataSetValue.IDataSetValueExtension=} [properties] Properties to set
         */
        function DataSetValueExtension(properties) {
          if (properties)
            for (
              var keys = Object.keys(properties), i = 0;
              i < keys.length;
              ++i
            )
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]]
        }

        /**
         * Creates a new DataSetValueExtension instance using the specified properties.
         * @function create
         * @memberof Payload.DataSet.DataSetValue.DataSetValueExtension
         * @static
         * @param {Payload.DataSet.DataSetValue.IDataSetValueExtension=} [properties] Properties to set
         * @returns {Payload.DataSet.DataSetValue.DataSetValueExtension} DataSetValueExtension instance
         */
        DataSetValueExtension.create = function create(properties) {
          return new DataSetValueExtension(properties)
        }

        /**
         * Encodes the specified DataSetValueExtension message. Does not implicitly {@link Payload.DataSet.DataSetValue.DataSetValueExtension.verify|verify} messages.
         * @function encode
         * @memberof Payload.DataSet.DataSetValue.DataSetValueExtension
         * @static
         * @param {Payload.DataSet.DataSetValue.IDataSetValueExtension} message DataSetValueExtension message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataSetValueExtension.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create()
          return writer
        }

        /**
         * Encodes the specified DataSetValueExtension message, length delimited. Does not implicitly {@link Payload.DataSet.DataSetValue.DataSetValueExtension.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Payload.DataSet.DataSetValue.DataSetValueExtension
         * @static
         * @param {Payload.DataSet.DataSetValue.IDataSetValueExtension} message DataSetValueExtension message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataSetValueExtension.encodeDelimited = function encodeDelimited(
          message,
          writer
        ) {
          return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a DataSetValueExtension message from the specified reader or buffer.
         * @function decode
         * @memberof Payload.DataSet.DataSetValue.DataSetValueExtension
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Payload.DataSet.DataSetValue.DataSetValueExtension} DataSetValueExtension
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataSetValueExtension.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          var end = length === undefined ? reader.len : reader.pos + length,
            message =
              new $root.Payload.DataSet.DataSetValue.DataSetValueExtension()
          while (reader.pos < end) {
            var tag = reader.uint32()
            switch (tag >>> 3) {
              default:
                reader.skipType(tag & 7)
                break
            }
          }
          return message
        }

        /**
         * Decodes a DataSetValueExtension message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Payload.DataSet.DataSetValue.DataSetValueExtension
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Payload.DataSet.DataSetValue.DataSetValueExtension} DataSetValueExtension
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataSetValueExtension.decodeDelimited = function decodeDelimited(
          reader
        ) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a DataSetValueExtension message.
         * @function verify
         * @memberof Payload.DataSet.DataSetValue.DataSetValueExtension
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DataSetValueExtension.verify = function verify(message) {
          if (typeof message !== 'object' || message === null)
            return 'object expected'
          return null
        }

        /**
         * Creates a DataSetValueExtension message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Payload.DataSet.DataSetValue.DataSetValueExtension
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Payload.DataSet.DataSetValue.DataSetValueExtension} DataSetValueExtension
         */
        DataSetValueExtension.fromObject = function fromObject(object) {
          if (
            object instanceof
            $root.Payload.DataSet.DataSetValue.DataSetValueExtension
          )
            return object
          return new $root.Payload.DataSet.DataSetValue.DataSetValueExtension()
        }

        /**
         * Creates a plain object from a DataSetValueExtension message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Payload.DataSet.DataSetValue.DataSetValueExtension
         * @static
         * @param {Payload.DataSet.DataSetValue.DataSetValueExtension} message DataSetValueExtension
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DataSetValueExtension.toObject = function toObject() {
          return {}
        }

        /**
         * Converts this DataSetValueExtension to JSON.
         * @function toJSON
         * @memberof Payload.DataSet.DataSetValue.DataSetValueExtension
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DataSetValueExtension.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return DataSetValueExtension
      })()

      return DataSetValue
    })()

    DataSet.Row = (function () {
      /**
       * Properties of a Row.
       * @memberof Payload.DataSet
       * @interface IRow
       * @property {Array.<Payload.DataSet.IDataSetValue>|null} [elements] Row elements
       */

      /**
       * Constructs a new Row.
       * @memberof Payload.DataSet
       * @classdesc Represents a Row.
       * @implements IRow
       * @constructor
       * @param {Payload.DataSet.IRow=} [properties] Properties to set
       */
      function Row(properties) {
        this.elements = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Row elements.
       * @member {Array.<Payload.DataSet.IDataSetValue>} elements
       * @memberof Payload.DataSet.Row
       * @instance
       */
      Row.prototype.elements = $util.emptyArray

      /**
       * Creates a new Row instance using the specified properties.
       * @function create
       * @memberof Payload.DataSet.Row
       * @static
       * @param {Payload.DataSet.IRow=} [properties] Properties to set
       * @returns {Payload.DataSet.Row} Row instance
       */
      Row.create = function create(properties) {
        return new Row(properties)
      }

      /**
       * Encodes the specified Row message. Does not implicitly {@link Payload.DataSet.Row.verify|verify} messages.
       * @function encode
       * @memberof Payload.DataSet.Row
       * @static
       * @param {Payload.DataSet.IRow} message Row message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Row.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.elements != null && message.elements.length)
          for (var i = 0; i < message.elements.length; ++i)
            $root.Payload.DataSet.DataSetValue.encode(
              message.elements[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Row message, length delimited. Does not implicitly {@link Payload.DataSet.Row.verify|verify} messages.
       * @function encodeDelimited
       * @memberof Payload.DataSet.Row
       * @static
       * @param {Payload.DataSet.IRow} message Row message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Row.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Row message from the specified reader or buffer.
       * @function decode
       * @memberof Payload.DataSet.Row
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {Payload.DataSet.Row} Row
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Row.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.Payload.DataSet.Row()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              if (!(message.elements && message.elements.length))
                message.elements = []
              message.elements.push(
                $root.Payload.DataSet.DataSetValue.decode(
                  reader,
                  reader.uint32()
                )
              )
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Row message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof Payload.DataSet.Row
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {Payload.DataSet.Row} Row
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Row.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Row message.
       * @function verify
       * @memberof Payload.DataSet.Row
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Row.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected'
        if (message.elements != null && message.hasOwnProperty('elements')) {
          if (!Array.isArray(message.elements))
            return 'elements: array expected'
          for (var i = 0; i < message.elements.length; ++i) {
            var error = $root.Payload.DataSet.DataSetValue.verify(
              message.elements[i]
            )
            if (error) return 'elements.' + error
          }
        }
        return null
      }

      /**
       * Creates a Row message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof Payload.DataSet.Row
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {Payload.DataSet.Row} Row
       */
      Row.fromObject = function fromObject(object) {
        if (object instanceof $root.Payload.DataSet.Row) return object
        var message = new $root.Payload.DataSet.Row()
        if (object.elements) {
          if (!Array.isArray(object.elements))
            throw TypeError('.Payload.DataSet.Row.elements: array expected')
          message.elements = []
          for (var i = 0; i < object.elements.length; ++i) {
            if (typeof object.elements[i] !== 'object')
              throw TypeError('.Payload.DataSet.Row.elements: object expected')
            message.elements[i] = $root.Payload.DataSet.DataSetValue.fromObject(
              object.elements[i]
            )
          }
        }
        return message
      }

      /**
       * Creates a plain object from a Row message. Also converts values to other types if specified.
       * @function toObject
       * @memberof Payload.DataSet.Row
       * @static
       * @param {Payload.DataSet.Row} message Row
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Row.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.elements = []
        if (message.elements && message.elements.length) {
          object.elements = []
          for (var j = 0; j < message.elements.length; ++j)
            object.elements[j] = $root.Payload.DataSet.DataSetValue.toObject(
              message.elements[j],
              options
            )
        }
        return object
      }

      /**
       * Converts this Row to JSON.
       * @function toJSON
       * @memberof Payload.DataSet.Row
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Row.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Row
    })()

    return DataSet
  })()

  Payload.PropertyValue = (function () {
    /**
     * Properties of a PropertyValue.
     * @memberof Payload
     * @interface IPropertyValue
     * @property {number|null} [type] PropertyValue type
     * @property {boolean|null} [isNull] PropertyValue isNull
     * @property {number|null} [intValue] PropertyValue intValue
     * @property {number|Long|null} [longValue] PropertyValue longValue
     * @property {number|null} [floatValue] PropertyValue floatValue
     * @property {number|null} [doubleValue] PropertyValue doubleValue
     * @property {boolean|null} [booleanValue] PropertyValue booleanValue
     * @property {string|null} [stringValue] PropertyValue stringValue
     * @property {Payload.IPropertySet|null} [propertysetValue] PropertyValue propertysetValue
     * @property {Payload.IPropertySetList|null} [propertysetsValue] PropertyValue propertysetsValue
     * @property {Payload.PropertyValue.IPropertyValueExtension|null} [extensionValue] PropertyValue extensionValue
     */

    /**
     * Constructs a new PropertyValue.
     * @memberof Payload
     * @classdesc Represents a PropertyValue.
     * @implements IPropertyValue
     * @constructor
     * @param {Payload.IPropertyValue=} [properties] Properties to set
     */
    function PropertyValue(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * PropertyValue type.
     * @member {number} type
     * @memberof Payload.PropertyValue
     * @instance
     */
    PropertyValue.prototype.type = 0

    /**
     * PropertyValue isNull.
     * @member {boolean} isNull
     * @memberof Payload.PropertyValue
     * @instance
     */
    PropertyValue.prototype.isNull = false

    /**
     * PropertyValue intValue.
     * @member {number} intValue
     * @memberof Payload.PropertyValue
     * @instance
     */
    PropertyValue.prototype.intValue = 0

    /**
     * PropertyValue longValue.
     * @member {number|Long} longValue
     * @memberof Payload.PropertyValue
     * @instance
     */
    PropertyValue.prototype.longValue = $util.Long
      ? $util.Long.fromBits(0, 0, true)
      : 0

    /**
     * PropertyValue floatValue.
     * @member {number} floatValue
     * @memberof Payload.PropertyValue
     * @instance
     */
    PropertyValue.prototype.floatValue = 0

    /**
     * PropertyValue doubleValue.
     * @member {number} doubleValue
     * @memberof Payload.PropertyValue
     * @instance
     */
    PropertyValue.prototype.doubleValue = 0

    /**
     * PropertyValue booleanValue.
     * @member {boolean} booleanValue
     * @memberof Payload.PropertyValue
     * @instance
     */
    PropertyValue.prototype.booleanValue = false

    /**
     * PropertyValue stringValue.
     * @member {string} stringValue
     * @memberof Payload.PropertyValue
     * @instance
     */
    PropertyValue.prototype.stringValue = ''

    /**
     * PropertyValue propertysetValue.
     * @member {Payload.IPropertySet|null|undefined} propertysetValue
     * @memberof Payload.PropertyValue
     * @instance
     */
    PropertyValue.prototype.propertysetValue = null

    /**
     * PropertyValue propertysetsValue.
     * @member {Payload.IPropertySetList|null|undefined} propertysetsValue
     * @memberof Payload.PropertyValue
     * @instance
     */
    PropertyValue.prototype.propertysetsValue = null

    /**
     * PropertyValue extensionValue.
     * @member {Payload.PropertyValue.IPropertyValueExtension|null|undefined} extensionValue
     * @memberof Payload.PropertyValue
     * @instance
     */
    PropertyValue.prototype.extensionValue = null

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields

    /**
     * PropertyValue value.
     * @member {"intValue"|"longValue"|"floatValue"|"doubleValue"|"booleanValue"|"stringValue"|"propertysetValue"|"propertysetsValue"|"extensionValue"|undefined} value
     * @memberof Payload.PropertyValue
     * @instance
     */
    Object.defineProperty(PropertyValue.prototype, 'value', {
      get: $util.oneOfGetter(
        ($oneOfFields = [
          'intValue',
          'longValue',
          'floatValue',
          'doubleValue',
          'booleanValue',
          'stringValue',
          'propertysetValue',
          'propertysetsValue',
          'extensionValue',
        ])
      ),
      set: $util.oneOfSetter($oneOfFields),
    })

    /**
     * Creates a new PropertyValue instance using the specified properties.
     * @function create
     * @memberof Payload.PropertyValue
     * @static
     * @param {Payload.IPropertyValue=} [properties] Properties to set
     * @returns {Payload.PropertyValue} PropertyValue instance
     */
    PropertyValue.create = function create(properties) {
      return new PropertyValue(properties)
    }

    /**
     * Encodes the specified PropertyValue message. Does not implicitly {@link Payload.PropertyValue.verify|verify} messages.
     * @function encode
     * @memberof Payload.PropertyValue
     * @static
     * @param {Payload.IPropertyValue} message PropertyValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertyValue.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      if (message.type != null && message.hasOwnProperty('type'))
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.type)
      if (message.isNull != null && message.hasOwnProperty('isNull'))
        writer.uint32(/* id 2, wireType 0 =*/ 16).bool(message.isNull)
      if (message.intValue != null && message.hasOwnProperty('intValue'))
        writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.intValue)
      if (message.longValue != null && message.hasOwnProperty('longValue'))
        writer.uint32(/* id 4, wireType 0 =*/ 32).uint64(message.longValue)
      if (message.floatValue != null && message.hasOwnProperty('floatValue'))
        writer.uint32(/* id 5, wireType 5 =*/ 45).float(message.floatValue)
      if (message.doubleValue != null && message.hasOwnProperty('doubleValue'))
        writer.uint32(/* id 6, wireType 1 =*/ 49).double(message.doubleValue)
      if (
        message.booleanValue != null &&
        message.hasOwnProperty('booleanValue')
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).bool(message.booleanValue)
      if (message.stringValue != null && message.hasOwnProperty('stringValue'))
        writer.uint32(/* id 8, wireType 2 =*/ 66).string(message.stringValue)
      if (
        message.propertysetValue != null &&
        message.hasOwnProperty('propertysetValue')
      )
        $root.Payload.PropertySet.encode(
          message.propertysetValue,
          writer.uint32(/* id 9, wireType 2 =*/ 74).fork()
        ).ldelim()
      if (
        message.propertysetsValue != null &&
        message.hasOwnProperty('propertysetsValue')
      )
        $root.Payload.PropertySetList.encode(
          message.propertysetsValue,
          writer.uint32(/* id 10, wireType 2 =*/ 82).fork()
        ).ldelim()
      if (
        message.extensionValue != null &&
        message.hasOwnProperty('extensionValue')
      )
        $root.Payload.PropertyValue.PropertyValueExtension.encode(
          message.extensionValue,
          writer.uint32(/* id 11, wireType 2 =*/ 90).fork()
        ).ldelim()
      return writer
    }

    /**
     * Encodes the specified PropertyValue message, length delimited. Does not implicitly {@link Payload.PropertyValue.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Payload.PropertyValue
     * @static
     * @param {Payload.IPropertyValue} message PropertyValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertyValue.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a PropertyValue message from the specified reader or buffer.
     * @function decode
     * @memberof Payload.PropertyValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Payload.PropertyValue} PropertyValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertyValue.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Payload.PropertyValue()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.type = reader.uint32()
            break
          case 2:
            message.isNull = reader.bool()
            break
          case 3:
            message.intValue = reader.uint32()
            break
          case 4:
            message.longValue = reader.uint64()
            break
          case 5:
            message.floatValue = reader.float()
            break
          case 6:
            message.doubleValue = reader.double()
            break
          case 7:
            message.booleanValue = reader.bool()
            break
          case 8:
            message.stringValue = reader.string()
            break
          case 9:
            message.propertysetValue = $root.Payload.PropertySet.decode(
              reader,
              reader.uint32()
            )
            break
          case 10:
            message.propertysetsValue = $root.Payload.PropertySetList.decode(
              reader,
              reader.uint32()
            )
            break
          case 11:
            message.extensionValue =
              $root.Payload.PropertyValue.PropertyValueExtension.decode(
                reader,
                reader.uint32()
              )
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a PropertyValue message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Payload.PropertyValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Payload.PropertyValue} PropertyValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertyValue.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a PropertyValue message.
     * @function verify
     * @memberof Payload.PropertyValue
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PropertyValue.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected'
      var properties = {}
      if (message.type != null && message.hasOwnProperty('type'))
        if (!$util.isInteger(message.type)) return 'type: integer expected'
      if (message.isNull != null && message.hasOwnProperty('isNull'))
        if (typeof message.isNull !== 'boolean')
          return 'isNull: boolean expected'
      if (message.intValue != null && message.hasOwnProperty('intValue')) {
        properties.value = 1
        if (!$util.isInteger(message.intValue))
          return 'intValue: integer expected'
      }
      if (message.longValue != null && message.hasOwnProperty('longValue')) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        if (
          !$util.isInteger(message.longValue) &&
          !(
            message.longValue &&
            $util.isInteger(message.longValue.low) &&
            $util.isInteger(message.longValue.high)
          )
        )
          return 'longValue: integer|Long expected'
      }
      if (message.floatValue != null && message.hasOwnProperty('floatValue')) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        if (typeof message.floatValue !== 'number')
          return 'floatValue: number expected'
      }
      if (
        message.doubleValue != null &&
        message.hasOwnProperty('doubleValue')
      ) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        if (typeof message.doubleValue !== 'number')
          return 'doubleValue: number expected'
      }
      if (
        message.booleanValue != null &&
        message.hasOwnProperty('booleanValue')
      ) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        if (typeof message.booleanValue !== 'boolean')
          return 'booleanValue: boolean expected'
      }
      if (
        message.stringValue != null &&
        message.hasOwnProperty('stringValue')
      ) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        if (!$util.isString(message.stringValue))
          return 'stringValue: string expected'
      }
      if (
        message.propertysetValue != null &&
        message.hasOwnProperty('propertysetValue')
      ) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        {
          var error = $root.Payload.PropertySet.verify(message.propertysetValue)
          if (error) return 'propertysetValue.' + error
        }
      }
      if (
        message.propertysetsValue != null &&
        message.hasOwnProperty('propertysetsValue')
      ) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        {
          var error = $root.Payload.PropertySetList.verify(
            message.propertysetsValue
          )
          if (error) return 'propertysetsValue.' + error
        }
      }
      if (
        message.extensionValue != null &&
        message.hasOwnProperty('extensionValue')
      ) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        {
          var error = $root.Payload.PropertyValue.PropertyValueExtension.verify(
            message.extensionValue
          )
          if (error) return 'extensionValue.' + error
        }
      }
      return null
    }

    /**
     * Creates a PropertyValue message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Payload.PropertyValue
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Payload.PropertyValue} PropertyValue
     */
    PropertyValue.fromObject = function fromObject(object) {
      if (object instanceof $root.Payload.PropertyValue) return object
      var message = new $root.Payload.PropertyValue()
      if (object.type != null) message.type = object.type >>> 0
      if (object.isNull != null) message.isNull = Boolean(object.isNull)
      if (object.intValue != null) message.intValue = object.intValue >>> 0
      if (object.longValue != null)
        if ($util.Long)
          (message.longValue = $util.Long.fromValue(
            object.longValue
          )).unsigned = true
        else if (typeof object.longValue === 'string')
          message.longValue = parseInt(object.longValue, 10)
        else if (typeof object.longValue === 'number')
          message.longValue = object.longValue
        else if (typeof object.longValue === 'object')
          message.longValue = new $util.LongBits(
            object.longValue.low >>> 0,
            object.longValue.high >>> 0
          ).toNumber(true)
      if (object.floatValue != null)
        message.floatValue = Number(object.floatValue)
      if (object.doubleValue != null)
        message.doubleValue = Number(object.doubleValue)
      if (object.booleanValue != null)
        message.booleanValue = Boolean(object.booleanValue)
      if (object.stringValue != null)
        message.stringValue = String(object.stringValue)
      if (object.propertysetValue != null) {
        if (typeof object.propertysetValue !== 'object')
          throw TypeError(
            '.Payload.PropertyValue.propertysetValue: object expected'
          )
        message.propertysetValue = $root.Payload.PropertySet.fromObject(
          object.propertysetValue
        )
      }
      if (object.propertysetsValue != null) {
        if (typeof object.propertysetsValue !== 'object')
          throw TypeError(
            '.Payload.PropertyValue.propertysetsValue: object expected'
          )
        message.propertysetsValue = $root.Payload.PropertySetList.fromObject(
          object.propertysetsValue
        )
      }
      if (object.extensionValue != null) {
        if (typeof object.extensionValue !== 'object')
          throw TypeError(
            '.Payload.PropertyValue.extensionValue: object expected'
          )
        message.extensionValue =
          $root.Payload.PropertyValue.PropertyValueExtension.fromObject(
            object.extensionValue
          )
      }
      return message
    }

    /**
     * Creates a plain object from a PropertyValue message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Payload.PropertyValue
     * @static
     * @param {Payload.PropertyValue} message PropertyValue
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PropertyValue.toObject = function toObject(message, options) {
      if (!options) options = {}
      var object = {}
      if (options.defaults) {
        object.type = 0
        object.isNull = false
      }
      if (message.type != null && message.hasOwnProperty('type'))
        object.type = message.type
      if (message.isNull != null && message.hasOwnProperty('isNull'))
        object.isNull = message.isNull
      if (message.intValue != null && message.hasOwnProperty('intValue')) {
        object.intValue = message.intValue
        if (options.oneofs) object.value = 'intValue'
      }
      if (message.longValue != null && message.hasOwnProperty('longValue')) {
        if (typeof message.longValue === 'number')
          object.longValue =
            options.longs === String
              ? String(message.longValue)
              : message.longValue
        else
          object.longValue =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.longValue)
              : options.longs === Number
              ? new $util.LongBits(
                  message.longValue.low >>> 0,
                  message.longValue.high >>> 0
                ).toNumber(true)
              : message.longValue
        if (options.oneofs) object.value = 'longValue'
      }
      if (message.floatValue != null && message.hasOwnProperty('floatValue')) {
        object.floatValue =
          options.json && !isFinite(message.floatValue)
            ? String(message.floatValue)
            : message.floatValue
        if (options.oneofs) object.value = 'floatValue'
      }
      if (
        message.doubleValue != null &&
        message.hasOwnProperty('doubleValue')
      ) {
        object.doubleValue =
          options.json && !isFinite(message.doubleValue)
            ? String(message.doubleValue)
            : message.doubleValue
        if (options.oneofs) object.value = 'doubleValue'
      }
      if (
        message.booleanValue != null &&
        message.hasOwnProperty('booleanValue')
      ) {
        object.booleanValue = message.booleanValue
        if (options.oneofs) object.value = 'booleanValue'
      }
      if (
        message.stringValue != null &&
        message.hasOwnProperty('stringValue')
      ) {
        object.stringValue = message.stringValue
        if (options.oneofs) object.value = 'stringValue'
      }
      if (
        message.propertysetValue != null &&
        message.hasOwnProperty('propertysetValue')
      ) {
        object.propertysetValue = $root.Payload.PropertySet.toObject(
          message.propertysetValue,
          options
        )
        if (options.oneofs) object.value = 'propertysetValue'
      }
      if (
        message.propertysetsValue != null &&
        message.hasOwnProperty('propertysetsValue')
      ) {
        object.propertysetsValue = $root.Payload.PropertySetList.toObject(
          message.propertysetsValue,
          options
        )
        if (options.oneofs) object.value = 'propertysetsValue'
      }
      if (
        message.extensionValue != null &&
        message.hasOwnProperty('extensionValue')
      ) {
        object.extensionValue =
          $root.Payload.PropertyValue.PropertyValueExtension.toObject(
            message.extensionValue,
            options
          )
        if (options.oneofs) object.value = 'extensionValue'
      }
      return object
    }

    /**
     * Converts this PropertyValue to JSON.
     * @function toJSON
     * @memberof Payload.PropertyValue
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PropertyValue.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    PropertyValue.PropertyValueExtension = (function () {
      /**
       * Properties of a PropertyValueExtension.
       * @memberof Payload.PropertyValue
       * @interface IPropertyValueExtension
       */

      /**
       * Constructs a new PropertyValueExtension.
       * @memberof Payload.PropertyValue
       * @classdesc Represents a PropertyValueExtension.
       * @implements IPropertyValueExtension
       * @constructor
       * @param {Payload.PropertyValue.IPropertyValueExtension=} [properties] Properties to set
       */
      function PropertyValueExtension(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Creates a new PropertyValueExtension instance using the specified properties.
       * @function create
       * @memberof Payload.PropertyValue.PropertyValueExtension
       * @static
       * @param {Payload.PropertyValue.IPropertyValueExtension=} [properties] Properties to set
       * @returns {Payload.PropertyValue.PropertyValueExtension} PropertyValueExtension instance
       */
      PropertyValueExtension.create = function create(properties) {
        return new PropertyValueExtension(properties)
      }

      /**
       * Encodes the specified PropertyValueExtension message. Does not implicitly {@link Payload.PropertyValue.PropertyValueExtension.verify|verify} messages.
       * @function encode
       * @memberof Payload.PropertyValue.PropertyValueExtension
       * @static
       * @param {Payload.PropertyValue.IPropertyValueExtension} message PropertyValueExtension message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PropertyValueExtension.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        return writer
      }

      /**
       * Encodes the specified PropertyValueExtension message, length delimited. Does not implicitly {@link Payload.PropertyValue.PropertyValueExtension.verify|verify} messages.
       * @function encodeDelimited
       * @memberof Payload.PropertyValue.PropertyValueExtension
       * @static
       * @param {Payload.PropertyValue.IPropertyValueExtension} message PropertyValueExtension message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PropertyValueExtension.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a PropertyValueExtension message from the specified reader or buffer.
       * @function decode
       * @memberof Payload.PropertyValue.PropertyValueExtension
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {Payload.PropertyValue.PropertyValueExtension} PropertyValueExtension
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PropertyValueExtension.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.Payload.PropertyValue.PropertyValueExtension()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a PropertyValueExtension message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof Payload.PropertyValue.PropertyValueExtension
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {Payload.PropertyValue.PropertyValueExtension} PropertyValueExtension
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PropertyValueExtension.decodeDelimited = function decodeDelimited(
        reader
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a PropertyValueExtension message.
       * @function verify
       * @memberof Payload.PropertyValue.PropertyValueExtension
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      PropertyValueExtension.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected'
        return null
      }

      /**
       * Creates a PropertyValueExtension message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof Payload.PropertyValue.PropertyValueExtension
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {Payload.PropertyValue.PropertyValueExtension} PropertyValueExtension
       */
      PropertyValueExtension.fromObject = function fromObject(object) {
        if (
          object instanceof $root.Payload.PropertyValue.PropertyValueExtension
        )
          return object
        return new $root.Payload.PropertyValue.PropertyValueExtension()
      }

      /**
       * Creates a plain object from a PropertyValueExtension message. Also converts values to other types if specified.
       * @function toObject
       * @memberof Payload.PropertyValue.PropertyValueExtension
       * @static
       * @param {Payload.PropertyValue.PropertyValueExtension} message PropertyValueExtension
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      PropertyValueExtension.toObject = function toObject() {
        return {}
      }

      /**
       * Converts this PropertyValueExtension to JSON.
       * @function toJSON
       * @memberof Payload.PropertyValue.PropertyValueExtension
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      PropertyValueExtension.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return PropertyValueExtension
    })()

    return PropertyValue
  })()

  Payload.PropertySet = (function () {
    /**
     * Properties of a PropertySet.
     * @memberof Payload
     * @interface IPropertySet
     * @property {Array.<string>|null} [keys] PropertySet keys
     * @property {Array.<Payload.IPropertyValue>|null} [values] PropertySet values
     */

    /**
     * Constructs a new PropertySet.
     * @memberof Payload
     * @classdesc Represents a PropertySet.
     * @implements IPropertySet
     * @constructor
     * @param {Payload.IPropertySet=} [properties] Properties to set
     */
    function PropertySet(properties) {
      this.keys = []
      this.values = []
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * PropertySet keys.
     * @member {Array.<string>} keys
     * @memberof Payload.PropertySet
     * @instance
     */
    PropertySet.prototype.keys = $util.emptyArray

    /**
     * PropertySet values.
     * @member {Array.<Payload.IPropertyValue>} values
     * @memberof Payload.PropertySet
     * @instance
     */
    PropertySet.prototype.values = $util.emptyArray

    /**
     * Creates a new PropertySet instance using the specified properties.
     * @function create
     * @memberof Payload.PropertySet
     * @static
     * @param {Payload.IPropertySet=} [properties] Properties to set
     * @returns {Payload.PropertySet} PropertySet instance
     */
    PropertySet.create = function create(properties) {
      return new PropertySet(properties)
    }

    /**
     * Encodes the specified PropertySet message. Does not implicitly {@link Payload.PropertySet.verify|verify} messages.
     * @function encode
     * @memberof Payload.PropertySet
     * @static
     * @param {Payload.IPropertySet} message PropertySet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertySet.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      if (message.keys != null && message.keys.length)
        for (var i = 0; i < message.keys.length; ++i)
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.keys[i])
      if (message.values != null && message.values.length)
        for (var i = 0; i < message.values.length; ++i)
          $root.Payload.PropertyValue.encode(
            message.values[i],
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
          ).ldelim()
      return writer
    }

    /**
     * Encodes the specified PropertySet message, length delimited. Does not implicitly {@link Payload.PropertySet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Payload.PropertySet
     * @static
     * @param {Payload.IPropertySet} message PropertySet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertySet.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a PropertySet message from the specified reader or buffer.
     * @function decode
     * @memberof Payload.PropertySet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Payload.PropertySet} PropertySet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertySet.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Payload.PropertySet()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            if (!(message.keys && message.keys.length)) message.keys = []
            message.keys.push(reader.string())
            break
          case 2:
            if (!(message.values && message.values.length)) message.values = []
            message.values.push(
              $root.Payload.PropertyValue.decode(reader, reader.uint32())
            )
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a PropertySet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Payload.PropertySet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Payload.PropertySet} PropertySet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertySet.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a PropertySet message.
     * @function verify
     * @memberof Payload.PropertySet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PropertySet.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected'
      if (message.keys != null && message.hasOwnProperty('keys')) {
        if (!Array.isArray(message.keys)) return 'keys: array expected'
        for (var i = 0; i < message.keys.length; ++i)
          if (!$util.isString(message.keys[i])) return 'keys: string[] expected'
      }
      if (message.values != null && message.hasOwnProperty('values')) {
        if (!Array.isArray(message.values)) return 'values: array expected'
        for (var i = 0; i < message.values.length; ++i) {
          var error = $root.Payload.PropertyValue.verify(message.values[i])
          if (error) return 'values.' + error
        }
      }
      return null
    }

    /**
     * Creates a PropertySet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Payload.PropertySet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Payload.PropertySet} PropertySet
     */
    PropertySet.fromObject = function fromObject(object) {
      if (object instanceof $root.Payload.PropertySet) return object
      var message = new $root.Payload.PropertySet()
      if (object.keys) {
        if (!Array.isArray(object.keys))
          throw TypeError('.Payload.PropertySet.keys: array expected')
        message.keys = []
        for (var i = 0; i < object.keys.length; ++i)
          message.keys[i] = String(object.keys[i])
      }
      if (object.values) {
        if (!Array.isArray(object.values))
          throw TypeError('.Payload.PropertySet.values: array expected')
        message.values = []
        for (var i = 0; i < object.values.length; ++i) {
          if (typeof object.values[i] !== 'object')
            throw TypeError('.Payload.PropertySet.values: object expected')
          message.values[i] = $root.Payload.PropertyValue.fromObject(
            object.values[i]
          )
        }
      }
      return message
    }

    /**
     * Creates a plain object from a PropertySet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Payload.PropertySet
     * @static
     * @param {Payload.PropertySet} message PropertySet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PropertySet.toObject = function toObject(message, options) {
      if (!options) options = {}
      var object = {}
      if (options.arrays || options.defaults) {
        object.keys = []
        object.values = []
      }
      if (message.keys && message.keys.length) {
        object.keys = []
        for (var j = 0; j < message.keys.length; ++j)
          object.keys[j] = message.keys[j]
      }
      if (message.values && message.values.length) {
        object.values = []
        for (var j = 0; j < message.values.length; ++j)
          object.values[j] = $root.Payload.PropertyValue.toObject(
            message.values[j],
            options
          )
      }
      return object
    }

    /**
     * Converts this PropertySet to JSON.
     * @function toJSON
     * @memberof Payload.PropertySet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PropertySet.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return PropertySet
  })()

  Payload.PropertySetList = (function () {
    /**
     * Properties of a PropertySetList.
     * @memberof Payload
     * @interface IPropertySetList
     * @property {Array.<Payload.IPropertySet>|null} [propertyset] PropertySetList propertyset
     */

    /**
     * Constructs a new PropertySetList.
     * @memberof Payload
     * @classdesc Represents a PropertySetList.
     * @implements IPropertySetList
     * @constructor
     * @param {Payload.IPropertySetList=} [properties] Properties to set
     */
    function PropertySetList(properties) {
      this.propertyset = []
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * PropertySetList propertyset.
     * @member {Array.<Payload.IPropertySet>} propertyset
     * @memberof Payload.PropertySetList
     * @instance
     */
    PropertySetList.prototype.propertyset = $util.emptyArray

    /**
     * Creates a new PropertySetList instance using the specified properties.
     * @function create
     * @memberof Payload.PropertySetList
     * @static
     * @param {Payload.IPropertySetList=} [properties] Properties to set
     * @returns {Payload.PropertySetList} PropertySetList instance
     */
    PropertySetList.create = function create(properties) {
      return new PropertySetList(properties)
    }

    /**
     * Encodes the specified PropertySetList message. Does not implicitly {@link Payload.PropertySetList.verify|verify} messages.
     * @function encode
     * @memberof Payload.PropertySetList
     * @static
     * @param {Payload.IPropertySetList} message PropertySetList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertySetList.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      if (message.propertyset != null && message.propertyset.length)
        for (var i = 0; i < message.propertyset.length; ++i)
          $root.Payload.PropertySet.encode(
            message.propertyset[i],
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
          ).ldelim()
      return writer
    }

    /**
     * Encodes the specified PropertySetList message, length delimited. Does not implicitly {@link Payload.PropertySetList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Payload.PropertySetList
     * @static
     * @param {Payload.IPropertySetList} message PropertySetList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertySetList.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a PropertySetList message from the specified reader or buffer.
     * @function decode
     * @memberof Payload.PropertySetList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Payload.PropertySetList} PropertySetList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertySetList.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Payload.PropertySetList()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            if (!(message.propertyset && message.propertyset.length))
              message.propertyset = []
            message.propertyset.push(
              $root.Payload.PropertySet.decode(reader, reader.uint32())
            )
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a PropertySetList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Payload.PropertySetList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Payload.PropertySetList} PropertySetList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertySetList.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a PropertySetList message.
     * @function verify
     * @memberof Payload.PropertySetList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PropertySetList.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected'
      if (
        message.propertyset != null &&
        message.hasOwnProperty('propertyset')
      ) {
        if (!Array.isArray(message.propertyset))
          return 'propertyset: array expected'
        for (var i = 0; i < message.propertyset.length; ++i) {
          var error = $root.Payload.PropertySet.verify(message.propertyset[i])
          if (error) return 'propertyset.' + error
        }
      }
      return null
    }

    /**
     * Creates a PropertySetList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Payload.PropertySetList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Payload.PropertySetList} PropertySetList
     */
    PropertySetList.fromObject = function fromObject(object) {
      if (object instanceof $root.Payload.PropertySetList) return object
      var message = new $root.Payload.PropertySetList()
      if (object.propertyset) {
        if (!Array.isArray(object.propertyset))
          throw TypeError(
            '.Payload.PropertySetList.propertyset: array expected'
          )
        message.propertyset = []
        for (var i = 0; i < object.propertyset.length; ++i) {
          if (typeof object.propertyset[i] !== 'object')
            throw TypeError(
              '.Payload.PropertySetList.propertyset: object expected'
            )
          message.propertyset[i] = $root.Payload.PropertySet.fromObject(
            object.propertyset[i]
          )
        }
      }
      return message
    }

    /**
     * Creates a plain object from a PropertySetList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Payload.PropertySetList
     * @static
     * @param {Payload.PropertySetList} message PropertySetList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PropertySetList.toObject = function toObject(message, options) {
      if (!options) options = {}
      var object = {}
      if (options.arrays || options.defaults) object.propertyset = []
      if (message.propertyset && message.propertyset.length) {
        object.propertyset = []
        for (var j = 0; j < message.propertyset.length; ++j)
          object.propertyset[j] = $root.Payload.PropertySet.toObject(
            message.propertyset[j],
            options
          )
      }
      return object
    }

    /**
     * Converts this PropertySetList to JSON.
     * @function toJSON
     * @memberof Payload.PropertySetList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PropertySetList.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return PropertySetList
  })()

  Payload.MetaData = (function () {
    /**
     * Properties of a MetaData.
     * @memberof Payload
     * @interface IMetaData
     * @property {boolean|null} [isMultiPart] MetaData isMultiPart
     * @property {string|null} [contentType] MetaData contentType
     * @property {number|Long|null} [size] MetaData size
     * @property {number|Long|null} [seq] MetaData seq
     * @property {string|null} [fileName] MetaData fileName
     * @property {string|null} [fileType] MetaData fileType
     * @property {string|null} [md5] MetaData md5
     * @property {string|null} [description] MetaData description
     */

    /**
     * Constructs a new MetaData.
     * @memberof Payload
     * @classdesc Represents a MetaData.
     * @implements IMetaData
     * @constructor
     * @param {Payload.IMetaData=} [properties] Properties to set
     */
    function MetaData(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * MetaData isMultiPart.
     * @member {boolean} isMultiPart
     * @memberof Payload.MetaData
     * @instance
     */
    MetaData.prototype.isMultiPart = false

    /**
     * MetaData contentType.
     * @member {string} contentType
     * @memberof Payload.MetaData
     * @instance
     */
    MetaData.prototype.contentType = ''

    /**
     * MetaData size.
     * @member {number|Long} size
     * @memberof Payload.MetaData
     * @instance
     */
    MetaData.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, true) : 0

    /**
     * MetaData seq.
     * @member {number|Long} seq
     * @memberof Payload.MetaData
     * @instance
     */
    MetaData.prototype.seq = $util.Long ? $util.Long.fromBits(0, 0, true) : 0

    /**
     * MetaData fileName.
     * @member {string} fileName
     * @memberof Payload.MetaData
     * @instance
     */
    MetaData.prototype.fileName = ''

    /**
     * MetaData fileType.
     * @member {string} fileType
     * @memberof Payload.MetaData
     * @instance
     */
    MetaData.prototype.fileType = ''

    /**
     * MetaData md5.
     * @member {string} md5
     * @memberof Payload.MetaData
     * @instance
     */
    MetaData.prototype.md5 = ''

    /**
     * MetaData description.
     * @member {string} description
     * @memberof Payload.MetaData
     * @instance
     */
    MetaData.prototype.description = ''

    /**
     * Creates a new MetaData instance using the specified properties.
     * @function create
     * @memberof Payload.MetaData
     * @static
     * @param {Payload.IMetaData=} [properties] Properties to set
     * @returns {Payload.MetaData} MetaData instance
     */
    MetaData.create = function create(properties) {
      return new MetaData(properties)
    }

    /**
     * Encodes the specified MetaData message. Does not implicitly {@link Payload.MetaData.verify|verify} messages.
     * @function encode
     * @memberof Payload.MetaData
     * @static
     * @param {Payload.IMetaData} message MetaData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MetaData.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      if (message.isMultiPart != null && message.hasOwnProperty('isMultiPart'))
        writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.isMultiPart)
      if (message.contentType != null && message.hasOwnProperty('contentType'))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.contentType)
      if (message.size != null && message.hasOwnProperty('size'))
        writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.size)
      if (message.seq != null && message.hasOwnProperty('seq'))
        writer.uint32(/* id 4, wireType 0 =*/ 32).uint64(message.seq)
      if (message.fileName != null && message.hasOwnProperty('fileName'))
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.fileName)
      if (message.fileType != null && message.hasOwnProperty('fileType'))
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.fileType)
      if (message.md5 != null && message.hasOwnProperty('md5'))
        writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.md5)
      if (message.description != null && message.hasOwnProperty('description'))
        writer.uint32(/* id 8, wireType 2 =*/ 66).string(message.description)
      return writer
    }

    /**
     * Encodes the specified MetaData message, length delimited. Does not implicitly {@link Payload.MetaData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Payload.MetaData
     * @static
     * @param {Payload.IMetaData} message MetaData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MetaData.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a MetaData message from the specified reader or buffer.
     * @function decode
     * @memberof Payload.MetaData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Payload.MetaData} MetaData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MetaData.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Payload.MetaData()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.isMultiPart = reader.bool()
            break
          case 2:
            message.contentType = reader.string()
            break
          case 3:
            message.size = reader.uint64()
            break
          case 4:
            message.seq = reader.uint64()
            break
          case 5:
            message.fileName = reader.string()
            break
          case 6:
            message.fileType = reader.string()
            break
          case 7:
            message.md5 = reader.string()
            break
          case 8:
            message.description = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a MetaData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Payload.MetaData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Payload.MetaData} MetaData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MetaData.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a MetaData message.
     * @function verify
     * @memberof Payload.MetaData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MetaData.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected'
      if (message.isMultiPart != null && message.hasOwnProperty('isMultiPart'))
        if (typeof message.isMultiPart !== 'boolean')
          return 'isMultiPart: boolean expected'
      if (message.contentType != null && message.hasOwnProperty('contentType'))
        if (!$util.isString(message.contentType))
          return 'contentType: string expected'
      if (message.size != null && message.hasOwnProperty('size'))
        if (
          !$util.isInteger(message.size) &&
          !(
            message.size &&
            $util.isInteger(message.size.low) &&
            $util.isInteger(message.size.high)
          )
        )
          return 'size: integer|Long expected'
      if (message.seq != null && message.hasOwnProperty('seq'))
        if (
          !$util.isInteger(message.seq) &&
          !(
            message.seq &&
            $util.isInteger(message.seq.low) &&
            $util.isInteger(message.seq.high)
          )
        )
          return 'seq: integer|Long expected'
      if (message.fileName != null && message.hasOwnProperty('fileName'))
        if (!$util.isString(message.fileName))
          return 'fileName: string expected'
      if (message.fileType != null && message.hasOwnProperty('fileType'))
        if (!$util.isString(message.fileType))
          return 'fileType: string expected'
      if (message.md5 != null && message.hasOwnProperty('md5'))
        if (!$util.isString(message.md5)) return 'md5: string expected'
      if (message.description != null && message.hasOwnProperty('description'))
        if (!$util.isString(message.description))
          return 'description: string expected'
      return null
    }

    /**
     * Creates a MetaData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Payload.MetaData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Payload.MetaData} MetaData
     */
    MetaData.fromObject = function fromObject(object) {
      if (object instanceof $root.Payload.MetaData) return object
      var message = new $root.Payload.MetaData()
      if (object.isMultiPart != null)
        message.isMultiPart = Boolean(object.isMultiPart)
      if (object.contentType != null)
        message.contentType = String(object.contentType)
      if (object.size != null)
        if ($util.Long)
          (message.size = $util.Long.fromValue(object.size)).unsigned = true
        else if (typeof object.size === 'string')
          message.size = parseInt(object.size, 10)
        else if (typeof object.size === 'number') message.size = object.size
        else if (typeof object.size === 'object')
          message.size = new $util.LongBits(
            object.size.low >>> 0,
            object.size.high >>> 0
          ).toNumber(true)
      if (object.seq != null)
        if ($util.Long)
          (message.seq = $util.Long.fromValue(object.seq)).unsigned = true
        else if (typeof object.seq === 'string')
          message.seq = parseInt(object.seq, 10)
        else if (typeof object.seq === 'number') message.seq = object.seq
        else if (typeof object.seq === 'object')
          message.seq = new $util.LongBits(
            object.seq.low >>> 0,
            object.seq.high >>> 0
          ).toNumber(true)
      if (object.fileName != null) message.fileName = String(object.fileName)
      if (object.fileType != null) message.fileType = String(object.fileType)
      if (object.md5 != null) message.md5 = String(object.md5)
      if (object.description != null)
        message.description = String(object.description)
      return message
    }

    /**
     * Creates a plain object from a MetaData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Payload.MetaData
     * @static
     * @param {Payload.MetaData} message MetaData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MetaData.toObject = function toObject(message, options) {
      if (!options) options = {}
      var object = {}
      if (options.defaults) {
        object.isMultiPart = false
        object.contentType = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, true)
          object.size =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long
        } else object.size = options.longs === String ? '0' : 0
        if ($util.Long) {
          var long = new $util.Long(0, 0, true)
          object.seq =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long
        } else object.seq = options.longs === String ? '0' : 0
        object.fileName = ''
        object.fileType = ''
        object.md5 = ''
        object.description = ''
      }
      if (message.isMultiPart != null && message.hasOwnProperty('isMultiPart'))
        object.isMultiPart = message.isMultiPart
      if (message.contentType != null && message.hasOwnProperty('contentType'))
        object.contentType = message.contentType
      if (message.size != null && message.hasOwnProperty('size'))
        if (typeof message.size === 'number')
          object.size =
            options.longs === String ? String(message.size) : message.size
        else
          object.size =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.size)
              : options.longs === Number
              ? new $util.LongBits(
                  message.size.low >>> 0,
                  message.size.high >>> 0
                ).toNumber(true)
              : message.size
      if (message.seq != null && message.hasOwnProperty('seq'))
        if (typeof message.seq === 'number')
          object.seq =
            options.longs === String ? String(message.seq) : message.seq
        else
          object.seq =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.seq)
              : options.longs === Number
              ? new $util.LongBits(
                  message.seq.low >>> 0,
                  message.seq.high >>> 0
                ).toNumber(true)
              : message.seq
      if (message.fileName != null && message.hasOwnProperty('fileName'))
        object.fileName = message.fileName
      if (message.fileType != null && message.hasOwnProperty('fileType'))
        object.fileType = message.fileType
      if (message.md5 != null && message.hasOwnProperty('md5'))
        object.md5 = message.md5
      if (message.description != null && message.hasOwnProperty('description'))
        object.description = message.description
      return object
    }

    /**
     * Converts this MetaData to JSON.
     * @function toJSON
     * @memberof Payload.MetaData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MetaData.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return MetaData
  })()

  Payload.Metric = (function () {
    /**
     * Properties of a Metric.
     * @memberof Payload
     * @interface IMetric
     * @property {string|null} [name] Metric name
     * @property {number|Long|null} [alias] Metric alias
     * @property {number|Long|null} [timestamp] Metric timestamp
     * @property {number|null} [datatype] Metric datatype
     * @property {boolean|null} [isHistorical] Metric isHistorical
     * @property {boolean|null} [isTransient] Metric isTransient
     * @property {boolean|null} [isNull] Metric isNull
     * @property {Payload.IMetaData|null} [metadata] Metric metadata
     * @property {Payload.IPropertySet|null} [properties] Metric properties
     * @property {number|null} [intValue] Metric intValue
     * @property {number|Long|null} [longValue] Metric longValue
     * @property {number|null} [floatValue] Metric floatValue
     * @property {number|null} [doubleValue] Metric doubleValue
     * @property {boolean|null} [booleanValue] Metric booleanValue
     * @property {string|null} [stringValue] Metric stringValue
     * @property {Uint8Array|null} [bytesValue] Metric bytesValue
     * @property {Payload.IDataSet|null} [datasetValue] Metric datasetValue
     * @property {Payload.ITemplate|null} [templateValue] Metric templateValue
     * @property {Payload.Metric.IMetricValueExtension|null} [extensionValue] Metric extensionValue
     */

    /**
     * Constructs a new Metric.
     * @memberof Payload
     * @classdesc Represents a Metric.
     * @implements IMetric
     * @constructor
     * @param {Payload.IMetric=} [properties] Properties to set
     */
    function Metric(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Metric name.
     * @member {string} name
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.name = ''

    /**
     * Metric alias.
     * @member {number|Long} alias
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.alias = $util.Long ? $util.Long.fromBits(0, 0, true) : 0

    /**
     * Metric timestamp.
     * @member {number|Long} timestamp
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.timestamp = $util.Long
      ? $util.Long.fromBits(0, 0, true)
      : 0

    /**
     * Metric datatype.
     * @member {number} datatype
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.datatype = 0

    /**
     * Metric isHistorical.
     * @member {boolean} isHistorical
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.isHistorical = false

    /**
     * Metric isTransient.
     * @member {boolean} isTransient
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.isTransient = false

    /**
     * Metric isNull.
     * @member {boolean} isNull
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.isNull = false

    /**
     * Metric metadata.
     * @member {Payload.IMetaData|null|undefined} metadata
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.metadata = null

    /**
     * Metric properties.
     * @member {Payload.IPropertySet|null|undefined} properties
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.properties = null

    /**
     * Metric intValue.
     * @member {number} intValue
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.intValue = 0

    /**
     * Metric longValue.
     * @member {number|Long} longValue
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.longValue = $util.Long
      ? $util.Long.fromBits(0, 0, true)
      : 0

    /**
     * Metric floatValue.
     * @member {number} floatValue
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.floatValue = 0

    /**
     * Metric doubleValue.
     * @member {number} doubleValue
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.doubleValue = 0

    /**
     * Metric booleanValue.
     * @member {boolean} booleanValue
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.booleanValue = false

    /**
     * Metric stringValue.
     * @member {string} stringValue
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.stringValue = ''

    /**
     * Metric bytesValue.
     * @member {Uint8Array} bytesValue
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.bytesValue = $util.newBuffer([])

    /**
     * Metric datasetValue.
     * @member {Payload.IDataSet|null|undefined} datasetValue
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.datasetValue = null

    /**
     * Metric templateValue.
     * @member {Payload.ITemplate|null|undefined} templateValue
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.templateValue = null

    /**
     * Metric extensionValue.
     * @member {Payload.Metric.IMetricValueExtension|null|undefined} extensionValue
     * @memberof Payload.Metric
     * @instance
     */
    Metric.prototype.extensionValue = null

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields

    /**
     * Metric value.
     * @member {"intValue"|"longValue"|"floatValue"|"doubleValue"|"booleanValue"|"stringValue"|"bytesValue"|"datasetValue"|"templateValue"|"extensionValue"|undefined} value
     * @memberof Payload.Metric
     * @instance
     */
    Object.defineProperty(Metric.prototype, 'value', {
      get: $util.oneOfGetter(
        ($oneOfFields = [
          'intValue',
          'longValue',
          'floatValue',
          'doubleValue',
          'booleanValue',
          'stringValue',
          'bytesValue',
          'datasetValue',
          'templateValue',
          'extensionValue',
        ])
      ),
      set: $util.oneOfSetter($oneOfFields),
    })

    /**
     * Creates a new Metric instance using the specified properties.
     * @function create
     * @memberof Payload.Metric
     * @static
     * @param {Payload.IMetric=} [properties] Properties to set
     * @returns {Payload.Metric} Metric instance
     */
    Metric.create = function create(properties) {
      return new Metric(properties)
    }

    /**
     * Encodes the specified Metric message. Does not implicitly {@link Payload.Metric.verify|verify} messages.
     * @function encode
     * @memberof Payload.Metric
     * @static
     * @param {Payload.IMetric} message Metric message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Metric.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      if (message.name != null && message.hasOwnProperty('name'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name)
      if (message.alias != null && message.hasOwnProperty('alias'))
        writer.uint32(/* id 2, wireType 0 =*/ 16).uint64(message.alias)
      if (message.timestamp != null && message.hasOwnProperty('timestamp'))
        writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.timestamp)
      if (message.datatype != null && message.hasOwnProperty('datatype'))
        writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.datatype)
      if (
        message.isHistorical != null &&
        message.hasOwnProperty('isHistorical')
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).bool(message.isHistorical)
      if (message.isTransient != null && message.hasOwnProperty('isTransient'))
        writer.uint32(/* id 6, wireType 0 =*/ 48).bool(message.isTransient)
      if (message.isNull != null && message.hasOwnProperty('isNull'))
        writer.uint32(/* id 7, wireType 0 =*/ 56).bool(message.isNull)
      if (message.metadata != null && message.hasOwnProperty('metadata'))
        $root.Payload.MetaData.encode(
          message.metadata,
          writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
        ).ldelim()
      if (message.properties != null && message.hasOwnProperty('properties'))
        $root.Payload.PropertySet.encode(
          message.properties,
          writer.uint32(/* id 9, wireType 2 =*/ 74).fork()
        ).ldelim()
      if (message.intValue != null && message.hasOwnProperty('intValue'))
        writer.uint32(/* id 10, wireType 0 =*/ 80).uint32(message.intValue)
      if (message.longValue != null && message.hasOwnProperty('longValue'))
        writer.uint32(/* id 11, wireType 0 =*/ 88).uint64(message.longValue)
      if (message.floatValue != null && message.hasOwnProperty('floatValue'))
        writer.uint32(/* id 12, wireType 5 =*/ 101).float(message.floatValue)
      if (message.doubleValue != null && message.hasOwnProperty('doubleValue'))
        writer.uint32(/* id 13, wireType 1 =*/ 105).double(message.doubleValue)
      if (
        message.booleanValue != null &&
        message.hasOwnProperty('booleanValue')
      )
        writer.uint32(/* id 14, wireType 0 =*/ 112).bool(message.booleanValue)
      if (message.stringValue != null && message.hasOwnProperty('stringValue'))
        writer.uint32(/* id 15, wireType 2 =*/ 122).string(message.stringValue)
      if (message.bytesValue != null && message.hasOwnProperty('bytesValue'))
        writer.uint32(/* id 16, wireType 2 =*/ 130).bytes(message.bytesValue)
      if (
        message.datasetValue != null &&
        message.hasOwnProperty('datasetValue')
      )
        $root.Payload.DataSet.encode(
          message.datasetValue,
          writer.uint32(/* id 17, wireType 2 =*/ 138).fork()
        ).ldelim()
      if (
        message.templateValue != null &&
        message.hasOwnProperty('templateValue')
      )
        $root.Payload.Template.encode(
          message.templateValue,
          writer.uint32(/* id 18, wireType 2 =*/ 146).fork()
        ).ldelim()
      if (
        message.extensionValue != null &&
        message.hasOwnProperty('extensionValue')
      )
        $root.Payload.Metric.MetricValueExtension.encode(
          message.extensionValue,
          writer.uint32(/* id 19, wireType 2 =*/ 154).fork()
        ).ldelim()
      return writer
    }

    /**
     * Encodes the specified Metric message, length delimited. Does not implicitly {@link Payload.Metric.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Payload.Metric
     * @static
     * @param {Payload.IMetric} message Metric message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Metric.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a Metric message from the specified reader or buffer.
     * @function decode
     * @memberof Payload.Metric
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Payload.Metric} Metric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Metric.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Payload.Metric()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string()
            break
          case 2:
            message.alias = reader.uint64()
            break
          case 3:
            message.timestamp = reader.uint64()
            break
          case 4:
            message.datatype = reader.uint32()
            break
          case 5:
            message.isHistorical = reader.bool()
            break
          case 6:
            message.isTransient = reader.bool()
            break
          case 7:
            message.isNull = reader.bool()
            break
          case 8:
            message.metadata = $root.Payload.MetaData.decode(
              reader,
              reader.uint32()
            )
            break
          case 9:
            message.properties = $root.Payload.PropertySet.decode(
              reader,
              reader.uint32()
            )
            break
          case 10:
            message.intValue = reader.uint32()
            break
          case 11:
            message.longValue = reader.uint64()
            break
          case 12:
            message.floatValue = reader.float()
            break
          case 13:
            message.doubleValue = reader.double()
            break
          case 14:
            message.booleanValue = reader.bool()
            break
          case 15:
            message.stringValue = reader.string()
            break
          case 16:
            message.bytesValue = reader.bytes()
            break
          case 17:
            message.datasetValue = $root.Payload.DataSet.decode(
              reader,
              reader.uint32()
            )
            break
          case 18:
            message.templateValue = $root.Payload.Template.decode(
              reader,
              reader.uint32()
            )
            break
          case 19:
            message.extensionValue =
              $root.Payload.Metric.MetricValueExtension.decode(
                reader,
                reader.uint32()
              )
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a Metric message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Payload.Metric
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Payload.Metric} Metric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Metric.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a Metric message.
     * @function verify
     * @memberof Payload.Metric
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Metric.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected'
      var properties = {}
      if (message.name != null && message.hasOwnProperty('name'))
        if (!$util.isString(message.name)) return 'name: string expected'
      if (message.alias != null && message.hasOwnProperty('alias'))
        if (
          !$util.isInteger(message.alias) &&
          !(
            message.alias &&
            $util.isInteger(message.alias.low) &&
            $util.isInteger(message.alias.high)
          )
        )
          return 'alias: integer|Long expected'
      if (message.timestamp != null && message.hasOwnProperty('timestamp'))
        if (
          !$util.isInteger(message.timestamp) &&
          !(
            message.timestamp &&
            $util.isInteger(message.timestamp.low) &&
            $util.isInteger(message.timestamp.high)
          )
        )
          return 'timestamp: integer|Long expected'
      if (message.datatype != null && message.hasOwnProperty('datatype'))
        if (!$util.isInteger(message.datatype))
          return 'datatype: integer expected'
      if (
        message.isHistorical != null &&
        message.hasOwnProperty('isHistorical')
      )
        if (typeof message.isHistorical !== 'boolean')
          return 'isHistorical: boolean expected'
      if (message.isTransient != null && message.hasOwnProperty('isTransient'))
        if (typeof message.isTransient !== 'boolean')
          return 'isTransient: boolean expected'
      if (message.isNull != null && message.hasOwnProperty('isNull'))
        if (typeof message.isNull !== 'boolean')
          return 'isNull: boolean expected'
      if (message.metadata != null && message.hasOwnProperty('metadata')) {
        var error = $root.Payload.MetaData.verify(message.metadata)
        if (error) return 'metadata.' + error
      }
      if (message.properties != null && message.hasOwnProperty('properties')) {
        var error = $root.Payload.PropertySet.verify(message.properties)
        if (error) return 'properties.' + error
      }
      if (message.intValue != null && message.hasOwnProperty('intValue')) {
        properties.value = 1
        if (!$util.isInteger(message.intValue))
          return 'intValue: integer expected'
      }
      if (message.longValue != null && message.hasOwnProperty('longValue')) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        if (
          !$util.isInteger(message.longValue) &&
          !(
            message.longValue &&
            $util.isInteger(message.longValue.low) &&
            $util.isInteger(message.longValue.high)
          )
        )
          return 'longValue: integer|Long expected'
      }
      if (message.floatValue != null && message.hasOwnProperty('floatValue')) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        if (typeof message.floatValue !== 'number')
          return 'floatValue: number expected'
      }
      if (
        message.doubleValue != null &&
        message.hasOwnProperty('doubleValue')
      ) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        if (typeof message.doubleValue !== 'number')
          return 'doubleValue: number expected'
      }
      if (
        message.booleanValue != null &&
        message.hasOwnProperty('booleanValue')
      ) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        if (typeof message.booleanValue !== 'boolean')
          return 'booleanValue: boolean expected'
      }
      if (
        message.stringValue != null &&
        message.hasOwnProperty('stringValue')
      ) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        if (!$util.isString(message.stringValue))
          return 'stringValue: string expected'
      }
      if (message.bytesValue != null && message.hasOwnProperty('bytesValue')) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        if (
          !(
            (message.bytesValue &&
              typeof message.bytesValue.length === 'number') ||
            $util.isString(message.bytesValue)
          )
        )
          return 'bytesValue: buffer expected'
      }
      if (
        message.datasetValue != null &&
        message.hasOwnProperty('datasetValue')
      ) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        {
          var error = $root.Payload.DataSet.verify(message.datasetValue)
          if (error) return 'datasetValue.' + error
        }
      }
      if (
        message.templateValue != null &&
        message.hasOwnProperty('templateValue')
      ) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        {
          var error = $root.Payload.Template.verify(message.templateValue)
          if (error) return 'templateValue.' + error
        }
      }
      if (
        message.extensionValue != null &&
        message.hasOwnProperty('extensionValue')
      ) {
        if (properties.value === 1) return 'value: multiple values'
        properties.value = 1
        {
          var error = $root.Payload.Metric.MetricValueExtension.verify(
            message.extensionValue
          )
          if (error) return 'extensionValue.' + error
        }
      }
      return null
    }

    /**
     * Creates a Metric message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Payload.Metric
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Payload.Metric} Metric
     */
    Metric.fromObject = function fromObject(object) {
      if (object instanceof $root.Payload.Metric) return object
      var message = new $root.Payload.Metric()
      if (object.name != null) message.name = String(object.name)
      if (object.alias != null)
        if ($util.Long)
          (message.alias = $util.Long.fromValue(object.alias)).unsigned = true
        else if (typeof object.alias === 'string')
          message.alias = parseInt(object.alias, 10)
        else if (typeof object.alias === 'number') message.alias = object.alias
        else if (typeof object.alias === 'object')
          message.alias = new $util.LongBits(
            object.alias.low >>> 0,
            object.alias.high >>> 0
          ).toNumber(true)
      if (object.timestamp != null)
        if ($util.Long)
          (message.timestamp = $util.Long.fromValue(
            object.timestamp
          )).unsigned = true
        else if (typeof object.timestamp === 'string')
          message.timestamp = parseInt(object.timestamp, 10)
        else if (typeof object.timestamp === 'number')
          message.timestamp = object.timestamp
        else if (typeof object.timestamp === 'object')
          message.timestamp = new $util.LongBits(
            object.timestamp.low >>> 0,
            object.timestamp.high >>> 0
          ).toNumber(true)
      if (object.datatype != null) message.datatype = object.datatype >>> 0
      if (object.isHistorical != null)
        message.isHistorical = Boolean(object.isHistorical)
      if (object.isTransient != null)
        message.isTransient = Boolean(object.isTransient)
      if (object.isNull != null) message.isNull = Boolean(object.isNull)
      if (object.metadata != null) {
        if (typeof object.metadata !== 'object')
          throw TypeError('.Payload.Metric.metadata: object expected')
        message.metadata = $root.Payload.MetaData.fromObject(object.metadata)
      }
      if (object.properties != null) {
        if (typeof object.properties !== 'object')
          throw TypeError('.Payload.Metric.properties: object expected')
        message.properties = $root.Payload.PropertySet.fromObject(
          object.properties
        )
      }
      if (object.intValue != null) message.intValue = object.intValue >>> 0
      if (object.longValue != null)
        if ($util.Long)
          (message.longValue = $util.Long.fromValue(
            object.longValue
          )).unsigned = true
        else if (typeof object.longValue === 'string')
          message.longValue = parseInt(object.longValue, 10)
        else if (typeof object.longValue === 'number')
          message.longValue = object.longValue
        else if (typeof object.longValue === 'object')
          message.longValue = new $util.LongBits(
            object.longValue.low >>> 0,
            object.longValue.high >>> 0
          ).toNumber(true)
      if (object.floatValue != null)
        message.floatValue = Number(object.floatValue)
      if (object.doubleValue != null)
        message.doubleValue = Number(object.doubleValue)
      if (object.booleanValue != null)
        message.booleanValue = Boolean(object.booleanValue)
      if (object.stringValue != null)
        message.stringValue = String(object.stringValue)
      if (object.bytesValue != null)
        if (typeof object.bytesValue === 'string')
          $util.base64.decode(
            object.bytesValue,
            (message.bytesValue = $util.newBuffer(
              $util.base64.length(object.bytesValue)
            )),
            0
          )
        else if (object.bytesValue.length)
          message.bytesValue = object.bytesValue
      if (object.datasetValue != null) {
        if (typeof object.datasetValue !== 'object')
          throw TypeError('.Payload.Metric.datasetValue: object expected')
        message.datasetValue = $root.Payload.DataSet.fromObject(
          object.datasetValue
        )
      }
      if (object.templateValue != null) {
        if (typeof object.templateValue !== 'object')
          throw TypeError('.Payload.Metric.templateValue: object expected')
        message.templateValue = $root.Payload.Template.fromObject(
          object.templateValue
        )
      }
      if (object.extensionValue != null) {
        if (typeof object.extensionValue !== 'object')
          throw TypeError('.Payload.Metric.extensionValue: object expected')
        message.extensionValue =
          $root.Payload.Metric.MetricValueExtension.fromObject(
            object.extensionValue
          )
      }
      return message
    }

    /**
     * Creates a plain object from a Metric message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Payload.Metric
     * @static
     * @param {Payload.Metric} message Metric
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Metric.toObject = function toObject(message, options) {
      if (!options) options = {}
      var object = {}
      if (options.defaults) {
        object.name = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, true)
          object.alias =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long
        } else object.alias = options.longs === String ? '0' : 0
        if ($util.Long) {
          var long = new $util.Long(0, 0, true)
          object.timestamp =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long
        } else object.timestamp = options.longs === String ? '0' : 0
        object.datatype = 0
        object.isHistorical = false
        object.isTransient = false
        object.isNull = false
        object.metadata = null
        object.properties = null
      }
      if (message.name != null && message.hasOwnProperty('name'))
        object.name = message.name
      if (message.alias != null && message.hasOwnProperty('alias'))
        if (typeof message.alias === 'number')
          object.alias =
            options.longs === String ? String(message.alias) : message.alias
        else
          object.alias =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.alias)
              : options.longs === Number
              ? new $util.LongBits(
                  message.alias.low >>> 0,
                  message.alias.high >>> 0
                ).toNumber(true)
              : message.alias
      if (message.timestamp != null && message.hasOwnProperty('timestamp'))
        if (typeof message.timestamp === 'number')
          object.timestamp =
            options.longs === String
              ? String(message.timestamp)
              : message.timestamp
        else
          object.timestamp =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timestamp)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timestamp.low >>> 0,
                  message.timestamp.high >>> 0
                ).toNumber(true)
              : message.timestamp
      if (message.datatype != null && message.hasOwnProperty('datatype'))
        object.datatype = message.datatype
      if (
        message.isHistorical != null &&
        message.hasOwnProperty('isHistorical')
      )
        object.isHistorical = message.isHistorical
      if (message.isTransient != null && message.hasOwnProperty('isTransient'))
        object.isTransient = message.isTransient
      if (message.isNull != null && message.hasOwnProperty('isNull'))
        object.isNull = message.isNull
      if (message.metadata != null && message.hasOwnProperty('metadata'))
        object.metadata = $root.Payload.MetaData.toObject(
          message.metadata,
          options
        )
      if (message.properties != null && message.hasOwnProperty('properties'))
        object.properties = $root.Payload.PropertySet.toObject(
          message.properties,
          options
        )
      if (message.intValue != null && message.hasOwnProperty('intValue')) {
        object.intValue = message.intValue
        if (options.oneofs) object.value = 'intValue'
      }
      if (message.longValue != null && message.hasOwnProperty('longValue')) {
        if (typeof message.longValue === 'number')
          object.longValue =
            options.longs === String
              ? String(message.longValue)
              : message.longValue
        else
          object.longValue =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.longValue)
              : options.longs === Number
              ? new $util.LongBits(
                  message.longValue.low >>> 0,
                  message.longValue.high >>> 0
                ).toNumber(true)
              : message.longValue
        if (options.oneofs) object.value = 'longValue'
      }
      if (message.floatValue != null && message.hasOwnProperty('floatValue')) {
        object.floatValue =
          options.json && !isFinite(message.floatValue)
            ? String(message.floatValue)
            : message.floatValue
        if (options.oneofs) object.value = 'floatValue'
      }
      if (
        message.doubleValue != null &&
        message.hasOwnProperty('doubleValue')
      ) {
        object.doubleValue =
          options.json && !isFinite(message.doubleValue)
            ? String(message.doubleValue)
            : message.doubleValue
        if (options.oneofs) object.value = 'doubleValue'
      }
      if (
        message.booleanValue != null &&
        message.hasOwnProperty('booleanValue')
      ) {
        object.booleanValue = message.booleanValue
        if (options.oneofs) object.value = 'booleanValue'
      }
      if (
        message.stringValue != null &&
        message.hasOwnProperty('stringValue')
      ) {
        object.stringValue = message.stringValue
        if (options.oneofs) object.value = 'stringValue'
      }
      if (message.bytesValue != null && message.hasOwnProperty('bytesValue')) {
        object.bytesValue =
          options.bytes === String
            ? $util.base64.encode(
                message.bytesValue,
                0,
                message.bytesValue.length
              )
            : options.bytes === Array
            ? Array.prototype.slice.call(message.bytesValue)
            : message.bytesValue
        if (options.oneofs) object.value = 'bytesValue'
      }
      if (
        message.datasetValue != null &&
        message.hasOwnProperty('datasetValue')
      ) {
        object.datasetValue = $root.Payload.DataSet.toObject(
          message.datasetValue,
          options
        )
        if (options.oneofs) object.value = 'datasetValue'
      }
      if (
        message.templateValue != null &&
        message.hasOwnProperty('templateValue')
      ) {
        object.templateValue = $root.Payload.Template.toObject(
          message.templateValue,
          options
        )
        if (options.oneofs) object.value = 'templateValue'
      }
      if (
        message.extensionValue != null &&
        message.hasOwnProperty('extensionValue')
      ) {
        object.extensionValue =
          $root.Payload.Metric.MetricValueExtension.toObject(
            message.extensionValue,
            options
          )
        if (options.oneofs) object.value = 'extensionValue'
      }
      return object
    }

    /**
     * Converts this Metric to JSON.
     * @function toJSON
     * @memberof Payload.Metric
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Metric.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    Metric.MetricValueExtension = (function () {
      /**
       * Properties of a MetricValueExtension.
       * @memberof Payload.Metric
       * @interface IMetricValueExtension
       */

      /**
       * Constructs a new MetricValueExtension.
       * @memberof Payload.Metric
       * @classdesc Represents a MetricValueExtension.
       * @implements IMetricValueExtension
       * @constructor
       * @param {Payload.Metric.IMetricValueExtension=} [properties] Properties to set
       */
      function MetricValueExtension(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Creates a new MetricValueExtension instance using the specified properties.
       * @function create
       * @memberof Payload.Metric.MetricValueExtension
       * @static
       * @param {Payload.Metric.IMetricValueExtension=} [properties] Properties to set
       * @returns {Payload.Metric.MetricValueExtension} MetricValueExtension instance
       */
      MetricValueExtension.create = function create(properties) {
        return new MetricValueExtension(properties)
      }

      /**
       * Encodes the specified MetricValueExtension message. Does not implicitly {@link Payload.Metric.MetricValueExtension.verify|verify} messages.
       * @function encode
       * @memberof Payload.Metric.MetricValueExtension
       * @static
       * @param {Payload.Metric.IMetricValueExtension} message MetricValueExtension message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MetricValueExtension.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        return writer
      }

      /**
       * Encodes the specified MetricValueExtension message, length delimited. Does not implicitly {@link Payload.Metric.MetricValueExtension.verify|verify} messages.
       * @function encodeDelimited
       * @memberof Payload.Metric.MetricValueExtension
       * @static
       * @param {Payload.Metric.IMetricValueExtension} message MetricValueExtension message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MetricValueExtension.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a MetricValueExtension message from the specified reader or buffer.
       * @function decode
       * @memberof Payload.Metric.MetricValueExtension
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {Payload.Metric.MetricValueExtension} MetricValueExtension
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MetricValueExtension.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.Payload.Metric.MetricValueExtension()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a MetricValueExtension message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof Payload.Metric.MetricValueExtension
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {Payload.Metric.MetricValueExtension} MetricValueExtension
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MetricValueExtension.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a MetricValueExtension message.
       * @function verify
       * @memberof Payload.Metric.MetricValueExtension
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      MetricValueExtension.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected'
        return null
      }

      /**
       * Creates a MetricValueExtension message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof Payload.Metric.MetricValueExtension
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {Payload.Metric.MetricValueExtension} MetricValueExtension
       */
      MetricValueExtension.fromObject = function fromObject(object) {
        if (object instanceof $root.Payload.Metric.MetricValueExtension)
          return object
        return new $root.Payload.Metric.MetricValueExtension()
      }

      /**
       * Creates a plain object from a MetricValueExtension message. Also converts values to other types if specified.
       * @function toObject
       * @memberof Payload.Metric.MetricValueExtension
       * @static
       * @param {Payload.Metric.MetricValueExtension} message MetricValueExtension
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      MetricValueExtension.toObject = function toObject() {
        return {}
      }

      /**
       * Converts this MetricValueExtension to JSON.
       * @function toJSON
       * @memberof Payload.Metric.MetricValueExtension
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      MetricValueExtension.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return MetricValueExtension
    })()

    return Metric
  })()

  return Payload
})()

module.exports = $root
