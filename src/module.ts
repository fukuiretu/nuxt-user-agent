import * as path from "path";
import { ModuleContext } from "./types";

export default function nuxtUserAgent(this: ModuleContext) {
  this.addPlugin({
    src: path.resolve(__dirname, "plugin.template.js"),
    fileName: "nuxt-user-agent.js"
  });
}

export const meta = require("../package.json");
