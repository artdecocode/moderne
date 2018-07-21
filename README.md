# moderne

[![npm version](https://badge.fury.io/js/moderne.svg)](https://npmjs.org/package/moderne)

`moderne` is a new Node.js npm package. Transpile import and export statements into require and module.exports with a regex.

```sh
yarn add -E moderne
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`moderne(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)

## API

The package is available by importing its default function:

```js
import moderne from 'moderne'
```

### `moderne(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

```js
/* yarn example */
import moderne from 'moderne'

(async () => {
  await moderne()
})()
```

---

(c) [Art Deco][1] 2018

[1]: https://artdeco.bz
