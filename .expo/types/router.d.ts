/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(groups)` | `/(groups)/newRedacao` | `/(groups)/novomodelo` | `/_sitemap` | `/newRedacao` | `/novomodelo`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
