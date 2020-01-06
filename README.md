# krunker-api

> API to get information from krunker matches

## Highlights

- Clean API
- Type defs (soon)

## Dev

- Built with [Node.js](https://nodejs.org/en/).
- Built with [request-promise](https://www.npmjs.com/package/request-promise).

## Install

```bash
$ npm install
```

## Usage

```js
const { getMatchInformation } = require("./index");

getMatchInformation("MIA:uqdik")
  .then(match => console.log(match))
  .catch(err => console.log(err));
```

You can also use your favorite http client and still parse the data

```js
const rp = require("require-promise");
const { Match } = require("./index");

rp(params).then(data => {
  let newMatch = new Match(data);
});
```
