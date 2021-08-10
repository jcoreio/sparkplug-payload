# @jcoreio/sparkplug-payload

[![CircleCI](https://circleci.com/gh/jcoreio/sparkplug-payload.svg?style=svg)](https://circleci.com/gh/jcoreio/sparkplug-payload)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/%40jcoreio%2Fsparkplug-payload.svg)](https://badge.fury.io/js/%40jcoreio%2Fsparkplug-payload)

A library that provides tools for encoding and decoding payload objects using
the Sparkplug Google Protocol Buffer Schema described in the Sparkplug
Specification from Cirrus Link Solutions.

https://s3.amazonaws.com/cirrus-link-com/Sparkplug+Topic+Namespace+and+State+ManagementV2.1+Apendix++Payload+B+format.pdf

**Not a drop-in replacement for the original `sparkplug-payload` package; require paths have changed.**

## Installation

```sh
npm install --save @jcoreio/sparkplug-payload
```

### Encoding a payload

Here is a code example of encoding a payload:

```javascript
var sparkplug = require('sparkplug-payload/spBv1.0'),
  payload = {
    timestamp: new Date().getTime(),
    metrics: [
      {
        name: 'intMetric',
        value: 1,
        type: 'Int32',
      },
    ],
  },
  encoded = sparkplug.encodePayload(payload)
```

### Decoding a payload

Here is a code example of decoding an encoded payload:

```javascript
var decoded = sparkplug.decodePayload(encoded)
```

## License

Copyright (c) 2017 Cirrus Link Solutions

All rights reserved. This program and the accompanying materials
are made available under the terms of the Eclipse Public License v1.0
which accompanies this distribution, and is available at
http://www.eclipse.org/legal/epl-v10.html

Contributors: Cirrus Link Solutions, JCore Systems
