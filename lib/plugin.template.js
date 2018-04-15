const woothee = require("woothee");
const detector = require("../detector");

export default (ctx, inject) => {
  const userAgent = process.server ? ctx.req.headers["user-agent"] : navigator.userAgent;

  ctx.$ua = detector(userAgent);
  inject("ua", detector(userAgent));
};
