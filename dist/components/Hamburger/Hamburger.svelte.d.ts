/// <reference types="svelte" />
export type HamburgerPosition = "top-right" | "bottom-right" | "bottom-left" | "top-left";
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
/**
 * Used to create a hamburger button for your application.
 * ```svelte
 * <Hamburger position="top-right" bind:open={variableToBind} />
 * ```
 */
declare const Hamburger: $$__sveltets_2_IsomorphicComponent<{
    position?: HamburgerPosition | undefined;
    open: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "open">;
type Hamburger = InstanceType<typeof Hamburger>;
export default Hamburger;
