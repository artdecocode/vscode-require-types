import { throws, equal } from 'zoroaster/assert'
import Context from '../context'
import vscodeRequireTypes from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof vscodeRequireTypes, 'function')
  },
  async 'calls package error'() {
    await throws({
      fn: vscodeRequireTypes,
    })
  },
}

export default T