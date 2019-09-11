import { UA } from "./plugin.template";
import "@nuxt/types";
export interface ModuleContext {
    addPlugin: (args: {
        src: string;
        fileName: string;
    }) => void;
}
/**
 * Extends types in Vue and Nuxt
 */
declare module "vue/types/vue" {
    interface Vue {
        readonly $ua: UA;
    }
}
declare module "@nuxt/types" {
    interface Context {
        $ua: UA;
    }
    interface NuxtAppOptions {
        readonly $ua: UA;
    }
}
declare module "vuex/types/index" {
    interface Store<S> {
        readonly $ua: UA;
    }
}
