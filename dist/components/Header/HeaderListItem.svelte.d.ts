import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        href?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type HeaderListItemProps = typeof __propDef.props;
export type HeaderListItemEvents = typeof __propDef.events;
export type HeaderListItemSlots = typeof __propDef.slots;
export default class HeaderListItem extends SvelteComponent<HeaderListItemProps, HeaderListItemEvents, HeaderListItemSlots> {
}
export {};
