# decimal-to-percent [![Build Status](https://travis-ci.org/bendrucker/decimal-to-percent.svg?branch=master)](https://travis-ci.org/bendrucker/decimal-to-percent)

> Convert a decimal proportion to a percentage string

Converts any valid decimal value to a percentage string with no rounding or range limitations.

## Install

```
$ npm install --save decimal-to-percent
```


## Usage

```js
var toPercent = require('decimal-to-percent')

toPercent(0.1)
//=> 10%

toPercent(-0.1)
//=> -10%

toPercent(0.001)
//=> 0.1%
```

## API

#### `toPercent(decimal)` -> `string`

##### decimal

*Required*  
Type: `number`

Any valid number between `-Infinity` and `Infinity`, exclusive.


## License

MIT © [Ben Drucker](http://bendrucker.me)
