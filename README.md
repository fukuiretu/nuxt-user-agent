# nuxt-user-agent

<p align="center">
  <a href="https://badge.fury.io/js/nuxt-user-agent">
    <img src="https://badge.fury.io/js/nuxt-user-agent.svg" alt="npm version" height="18">
  </a>
  <a href="https://david-dm.org/fukuiretu/nuxt-user-agent">
    <img alt="" src="https://david-dm.org/fukuiretu/nuxt-user-agent/status.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/fukuiretu/nuxt-user-agent/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/bad8abe1f1ba5f3c2723/maintainability" />
  </a>
  <br>
  <a href="https://codeclimate.com/github/fukuiretu/nuxt-user-agent/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/bad8abe1f1ba5f3c2723/test_coverage" />
  </a>
</p>

[Nuxt.js](https://nuxtjs.org/) module for handling User-Agent.

Inspired by [rack-user-agent](https://github.com/k0kubun/rack-user_agent) and, Thanks to [woothee](http://woothee.github.io/) :pray:

## Setup

Install with yarn:

`yarn add nuxt-user-agent`

Install with npm:

`npm install nuxt-user-agent`

nuxt.config.js

```
module.exports = {
  modules: [
    'nuxt-user-agent',
  ]
}
```

## Usage

### Component

##### asyncData

```
asyncData(context) {
  const deviceType = context.$ua.deviceType()
  return { deviceType }
}
```

##### methods/created/mounted/etc

```
methods: {
  something() {
    const deviceType = this.$ua.deviceType()
    this.deviceType = deviceType
  }
}
```

##### Store actions

```
// In store
{
  actions: {
    getDeviceType ({ commit }) {
      const deviceType = this.$ua.deviceType()
      commit('SET_DEVICE_TYPE', deviceType)
    }
  }
}
```

##### template

```
<template>
  <section>
    <div v-if="$ua.isFromPc()">
      <span>PC</span>
    </div>
    <div v-if="$ua.isFromSmartphone()">
      <span>Smartphone</span>
    </div>
    <div v-if="$ua.isFromMobilephone()">
      <span>Mobilephone</span>
    </div>
    <div v-if="$ua.isFromTablet()">
      <span>Tablet</span>
    </div>
    <div v-if="$ua.isFromAppliance()">
      <span>Appliance</span>
    </div>
    <div v-if="$ua.isFromCrawler()">
      <span>Crawler</span>
    </div>
  </section>
</template>
```

## Methods

|       method        |  type   |    example    |
| :-----------------: | :-----: | :-----------: |
|     deviceType      | string  |      pc       |
|         os          | string  |    Mac OSX    |
|      osVersion      | string  |    10.12.6    |
|       browser       | string  |    Chrome     |
|   browserVersion    | string  | 65.0.3325.181 |
|    browserVendor    | string  |    Google     |
|    isFromIphone     | boolean |     true      |
|     isFromIpad      | boolean |     true      |
|     isFromIpod      | boolean |     true      |
|      isFromIos      | boolean |     true      |
|    isFromAndroid    | boolean |     true      |
| isFromAndroidTablet | boolean |     true      |
| isFromWindowsPhone  | boolean |     true      |
|      isFromPc       | boolean |     true      |
|  isFromSmartphone   | boolean |     true      |
|  isFromMobilephone  | boolean |     true      |
|   isFromAppliance   | boolean |     true      |
|    isFromCrawler    | boolean |     true      |
|    isFromTablet     | boolean |     true      |


## TODO
- [ ] unit test


## License
The gem is available as open source under the terms of the [MIT License.](https://opensource.org/licenses/MIT)
