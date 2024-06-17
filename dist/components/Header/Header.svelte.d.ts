import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        logo: {};
        links: {};
        action: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type HeaderProps = typeof __propDef.props;
export type HeaderEvents = typeof __propDef.events;
export type HeaderSlots = typeof __propDef.slots;
/**
 * ```svelte
 * <Header>
 * <svelte:fragment slot="logo">
 *     <a href="/">
 *         <img src="/favicon.png" alt="svelte icon" width="48px"/>
 *     </a>
 * </svelte:fragment>
 *
 * <svelte:fragment slot="links">
 *     <HeaderListItem href="#">Link1</HeaderListItem>
 *     <HeaderListItem href="#">Link2</HeaderListItem>
 *     <HeaderListItem href="#">Link3</HeaderListItem>
 * </svelte:fragment>
 *
 * <svelte:fragment slot="action">
 *     <LinkButton></LinkButton>
 * </svelte:fragment>
 * </Header>
 * ```
 */
export default class Header extends SvelteComponent<HeaderProps, HeaderEvents, HeaderSlots> {
}
export {};
