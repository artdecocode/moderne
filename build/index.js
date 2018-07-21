"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = moderne;

var _util = require("util");

const LOG = (0, _util.debuglog)('moderne');
/**
 * Transpile import and export statements into require and module.exports with a regex.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function moderne(config = {}) {
  const {
    type
  } = config;
  LOG('moderne called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map