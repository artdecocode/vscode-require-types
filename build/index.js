const { debuglog } = require('util');

const LOG = debuglog('vscode-require-types')

/**
 * A bug report when types for packages with a hyphen are not loaded.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
               async function vscodeRequireTypes(config = {}) {
  const {
    type,
  } = config
  LOG('vscode-require-types called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */

module.exports = vscodeRequireTypes
//# sourceMappingURL=index.js.map