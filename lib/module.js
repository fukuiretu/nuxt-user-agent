import * as path from "path";
export default function nuxtUserAgent() {
    this.addPlugin({
        src: path.resolve(__dirname, "plugin.template.js"),
        fileName: "nuxt-user-agent.js"
    });
}
export const meta = require("../package.json");
//# sourceMappingURL=module.js.map