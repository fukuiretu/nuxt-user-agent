import * as path from 'path'
import { ModuleContext } from './nuxt'

module.exports = function nuxtUserAgent() {
  const _this: ModuleContext = this as any // Force cast this context.
  _this.addPlugin({
    src: path.resolve(__dirname, 'plugin.template.js'),
    fileName: 'nuxt-user-agent.js'
  })
}

module.exports.meta = require('../package.json')
