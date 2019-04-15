"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
module.exports = function nuxtUserAgent() {
    var _this = this; // Force cast this context.
    _this.addPlugin({
        src: path.resolve(__dirname, "plugin.template.js"),
        fileName: "nuxt-user-agent.js"
    });
};
module.exports.meta = require("../package.json");
//# sourceMappingURL=module.js.map