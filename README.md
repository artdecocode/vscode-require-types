# vscode-require-types

[![npm version](https://badge.fury.io/js/vscode-require-types.svg)](https://npmjs.org/package/vscode-require-types)

`vscode-require-types` is A bug report when types for packages with a hyphen are not loaded.

```sh
yarn add -E vscode-require-types
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`vscodeRequireTypes(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
- [TODO](#todo)
- [Copyright](#copyright)

## API

The package is available by importing its default function:

```js
import vscodeRequireTypes from 'vscode-require-types'
```

### `vscodeRequireTypes(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

```js
/* yarn example/ */
import vscodeRequireTypes from 'vscode-require-types'

(async () => {
  await vscodeRequireTypes()
})()
```

## TODO

- [ ] Add a new item to the todo list.

## Copyright

(c) [Art Deco][1] 2018

[1]: https://artdeco.bz
