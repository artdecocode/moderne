import { debuglog } from 'util'

const LOG = debuglog('moderne')

/**
 * Transpile import and export statements into require and module.exports with a regex.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function moderne(config = {}) {
  const {
    type,
  } = config
  LOG('moderne called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
