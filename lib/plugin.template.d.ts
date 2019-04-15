import { NuxtContext } from "./types";
export declare class UA {
    private _ua;
    private _parsed;
    constructor(ua: string);
    original(): string;
    deviceType(): "pc" | "smartphone" | "mobilephone" | "appliance" | "crawler" | "misc" | "UNKNOWN";
    os(): string;
    osVersion(): string | undefined;
    browser(): string;
    browserVersion(): string;
    browserVendor(): string | undefined;
    isFromIphone(): boolean;
    isFromIpad(): boolean;
    isFromIpod(): boolean;
    isFromIos(): boolean;
    isFromAndroidMobile(): boolean;
    isFromAndroidTablet(): boolean;
    isFromAndroidOs(): boolean;
    isFromWindowsPhone(): boolean;
    isFromPc(): boolean;
    isFromSmartphone(): boolean;
    isFromMobilephone(): boolean;
    isFromAppliance(): boolean;
    isFromCrawler(): boolean;
    isFromTablet(): boolean;
}
declare const _default: (ctx: NuxtContext, inject: (prop: string, val: any) => void) => void;
export default _default;
