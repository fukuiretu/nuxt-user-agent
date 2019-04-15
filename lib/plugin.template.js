"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var woothee = require("woothee");
var DEFAULT_USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";
var ANDROID_MOBILE = /Android.+Mobi(le)?/;
var UA = /** @class */ (function () {
    function UA(ua) {
        this._ua = ua;
        this._parsed = woothee.parse(ua);
    }
    UA.prototype.original = function () {
        return this._ua;
    };
    UA.prototype.deviceType = function () {
        return this._parsed.category;
    };
    UA.prototype.os = function () {
        return this._parsed.os;
    };
    UA.prototype.osVersion = function () {
        return this._parsed.os_version;
    };
    UA.prototype.browser = function () {
        return this._parsed.name;
    };
    UA.prototype.browserVersion = function () {
        return this._parsed.version;
    };
    UA.prototype.browserVendor = function () {
        return this._parsed.vendor;
    };
    UA.prototype.isFromIphone = function () {
        return this.os() === "iPhone";
    };
    UA.prototype.isFromIpad = function () {
        return this.os() === "iPad";
    };
    UA.prototype.isFromIpod = function () {
        return this.os() === "iPod";
    };
    UA.prototype.isFromIos = function () {
        return (this.isFromIphone() ||
            this.isFromIpad() ||
            this.isFromIpod() ||
            this.os() == "iOS");
    };
    UA.prototype.isFromAndroidMobile = function () {
        return this.os() === "Android" && ANDROID_MOBILE.test(this._ua);
    };
    UA.prototype.isFromAndroidTablet = function () {
        return this.os() === "Android" && !ANDROID_MOBILE.test(this._ua);
    };
    UA.prototype.isFromAndroidOs = function () {
        return this.isFromAndroidMobile() || this.isFromAndroidTablet() || this.os() == "Android";
    };
    UA.prototype.isFromWindowsPhone = function () {
        return this.os() === "Windows Phone OS";
    };
    UA.prototype.isFromPc = function () {
        return this.deviceType() === "pc";
    };
    UA.prototype.isFromSmartphone = function () {
        return this.deviceType() === "smartphone" && !this.isFromTablet();
    };
    UA.prototype.isFromMobilephone = function () {
        return this.deviceType() === "mobilephone";
    };
    UA.prototype.isFromAppliance = function () {
        return this.deviceType() === "appliance";
    };
    UA.prototype.isFromCrawler = function () {
        return this.deviceType() === "crawler";
    };
    UA.prototype.isFromTablet = function () {
        return this.isFromIpad() || this.isFromAndroidTablet();
    };
    return UA;
}());
exports.UA = UA;
exports.default = (function (ctx, inject) {
    var userAgent = DEFAULT_USER_AGENT;
    if (typeof ctx.req !== "undefined") {
        userAgent = ctx.req.headers["user-agent"]; // FIXME: Better case handling - 20181125 Shin Ando
    }
    else if (typeof navigator !== "undefined") {
        userAgent = navigator.userAgent;
    }
    ctx.$ua = new UA(userAgent);
    inject("ua", new UA(userAgent));
});
//# sourceMappingURL=plugin.template.js.map