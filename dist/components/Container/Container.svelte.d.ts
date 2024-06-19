/// <reference types="svelte" />
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports;
    z_$$bindings?: Bindings;
}
declare const Container: $$__sveltets_2_IsomorphicComponent<{
    elementType: "section" | "article" | "main" | "div";
    maxWidth: "640px" | "768px" | "1024px" | "1280px" | "1536px" | "full";
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Container = InstanceType<typeof Container>;
export default Container;
