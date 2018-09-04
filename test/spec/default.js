import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import vscodeRequireTypes from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof vscodeRequireTypes, 'function')
  },
  async 'calls package without error'() {
    await vscodeRequireTypes()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await vscodeRequireTypes({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T