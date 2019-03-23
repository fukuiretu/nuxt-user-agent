interface Navigator {
  userAgent: string;
}

declare var navigator: Navigator;

declare module "woothee" {
  interface UserAgent {
    category:
      | "pc"
      | "smartphone"
      | "mobilephone"
      | "appliance"
      | "crawler"
      | "misc"
      | "UNKNOWN"; // labels of user terminal type
    name: string; // the name of browser, like 'Internet Explorer', 'Firefox', 'GoogleBot'
    version: string; // version string, like '8.0' for IE, '9.0.1' for Firefix, '0.2.149.27' for Chrome, and so on
    os: string; // ex: 'Windows 7', 'Mac OSX', 'iPhone', 'iPad', 'Android'
    vendor?: string; // shows browser vendor
    os_version?: string; // shows version of operating systems
  }
  function parse(ua: string): UserAgent;
  function is_crawler(ua: string): boolean;
}
