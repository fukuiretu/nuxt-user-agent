import Vue from "vue";
import { Store } from "vuex";
import { Route } from "vue-router";
import { RequestOptions, ServerResponse } from "http";
import { UA } from "./plugin.template";
declare type StoreState = any;
export interface NuxtContext {
    app: Vue;
    isClient: boolean;
    isServer: boolean;
    isStatic: boolean;
    isDev: Boolean;
    isHMR: Boolean;
    route: Route;
    store: Store<StoreState>;
    env: object;
    params: any;
    query: any;
    req: RequestOptions;
    res: ServerResponse;
    redirect: (path: string) => void;
    error: (params: {
        statusCode: number;
        message: string;
    }) => void;
    nuxtState: any;
    beforeNuxtRender: any;
    $ua: any;
}
export interface ModuleContext {
    addPlugin: (args: {
        src: string;
        fileName: string;
    }) => void;
}
export { UA };
