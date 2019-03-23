import { UA } from "nuxt-user-agent";

declare module "@nuxt/vue-app/types/index" {
  interface Context {
    $ua: UA;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $ua: UA;
  }
}
