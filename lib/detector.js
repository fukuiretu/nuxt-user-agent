const detector = (ua) => {
  const ANDROID_MOBILE = /Android.+Mobi(le)?/;

  return {
    deviceType() {
      return this.wootheeResult().category;
    },

    os() {
      return this.wootheeResult().os;
    },

    osVersion() {
      return this.wootheeResult().os_version;
    },

    browser() {
      return this.wootheeResult().name;
    },

    browserVersion() {
      return this.wootheeResult().version;
    },

    browserVendor() {
      return this.wootheeResult().vendor;
    },

    isFromIphone() {
      return this.os() === "iPhone";
    },

    isFromIpad() {
      return this.os() === "iPad";
    },

    isFromIpod() {
      return this.os() === "iPod";
    },

    isFromIos() {
      return this.isFromIphone() || this.isFromIpad() || this.isFromIpod() || this.os() == "iOS";
    },

    isFromAndroid() {
      return this.os() === "Android" && ANDROID_MOBILE.test(ua);
    },

    isFromAndroidTablet() {
      return this.os() === "Android" && !ANDROID_MOBILE.test(ua);
    },

    ifFromAndroidOs() {
      return this.isFromAndroid() || this.isFromAndroidTablet();
    },

    isFromWindowsPhone() {
      return this.os() === "Windows Phone OS";
    },

    isFromPc() {
      return this.deviceType() === "pc";
    },

    isFromSmartphone() {
      return this.deviceType() === "smartphone";
    },

    isFromMobilephone() {
      return this.deviceType() === "mobilephone";
    },

    isFromAppliance() {
      return this.deviceType() === "appliance";
    },

    isFromCrawler() {
      return this.deviceType() === "crawler";
    },

    isFromTablet() {
      return this.isFromIpad() || this.isFromAndroidTablet();
    },

    wootheeResult() {
      this._wootheeResult = this._wootheeResult || woothee.parse(ua);
      return this._wootheeResult;
    }
  };
};

module.exports = detector;
