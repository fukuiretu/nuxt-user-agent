const path = require('path');

module.exports = function nuxtUserAgent(moduleOptions) {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.template.js'),
    fileName: 'nuxt-user-agent.js'
  });
};

module.exports.meta = require('../package.json')
