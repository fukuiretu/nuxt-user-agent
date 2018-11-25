import { NuxtContext } from "./types";
import * as woothee from "woothee";

const DEFAULT_USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";

const ANDROID_MOBILE = /Android.+Mobi(le)?/;

class UA {
  private _ua: string;
  private _parsed: woothee.UserAgent;

  constructor(ua: string) {
    this._ua = ua;
    this._parsed = woothee.parse(ua);
  }

  original() {
    return this._ua;
  }

  deviceType() {
    return this._parsed.category;
  }

  os() {
    return this._parsed.os;
  }

  osVersion() {
    return this._parsed.os_version;
  }

  browser() {
    return this._parsed.name;
  }

  browserVersion() {
    return this._parsed.version;
  }

  browserVendor() {
    return this._parsed.vendor;
  }

  isFromIphone() {
    return this.os() === "iPhone";
  }

  isFromIpad() {
    return this.os() === "iPad";
  }

  isFromIpod() {
    return this.os() === "iPod";
  }

  isFromIos() {
    return (
      this.isFromIphone() ||
      this.isFromIpad() ||
      this.isFromIpod() ||
      this.os() == "iOS"
    );
  }

  isFromAndroid() {
    return this.os() === "Android" && ANDROID_MOBILE.test(this._ua);
  }

  isFromAndroidTablet() {
    return this.os() === "Android" && !ANDROID_MOBILE.test(this._ua);
  }

  ifFromAndroidOs() {
    return this.isFromAndroid() || this.isFromAndroidTablet();
  }

  isFromWindowsPhone() {
    return this.os() === "Windows Phone OS";
  }

  isFromPc() {
    return this.deviceType() === "pc";
  }

  isFromSmartphone() {
    return this.deviceType() === "smartphone";
  }

  isFromMobilephone() {
    return this.deviceType() === "mobilephone";
  }

  isFromAppliance() {
    return this.deviceType() === "appliance";
  }

  isFromCrawler() {
    return this.deviceType() === "crawler";
  }

  isFromTablet() {
    return this.isFromIpad() || this.isFromAndroidTablet();
  }
}

export default (ctx: NuxtContext, inject: (prop: string, val: any) => void) => {
  let userAgent = DEFAULT_USER_AGENT;
  if (typeof ctx.req !== "undefined") {
    userAgent = ctx.req.headers!["user-agent"] as string; // FIXME: Better case handling - 20181125 Shin Ando
  } else if (typeof navigator !== "undefined") {
    userAgent = navigator.userAgent;
  }

  ctx.$ua = new UA(userAgent);
  inject("ua", new UA(userAgent));
};
