import type { Snippet } from "svelte";
import type { HamburgerPosition } from "../Hamburger/Hamburger.svelte";
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
 * Used to create a header for your application. It includes a logo, navigation links, and an action button.
 * ```
 * <Header>
 * {#snippet logo()}
 *     <img src="/favicon.png" alt="" width="48px">
 * {/snippet}
 * {#snippet links()}
 *     <HeaderListItem href="#">Link 1</HeaderListItem>
 *     <HeaderListItem href="#">Link 2</HeaderListItem>
 *     <HeaderListItem href="#">Link 3</HeaderListItem>
 * {/snippet}
 * {#snippet action()}
 *     <LinkButton href="#">LinkButton</LinkButton>
 * {/snippet}
 * </Header>
 * ```
 */
declare const Header: $$__sveltets_2_IsomorphicComponent<{
    logo: Snippet;
    links: Snippet;
    action: Snippet;
    hamburgerPosition?: HamburgerPosition | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Header = InstanceType<typeof Header>;
export default Header;
