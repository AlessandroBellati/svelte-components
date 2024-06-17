import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        href?: string | undefined;
        target?: "_self" | "_blank" | "_parent" | "_top" | undefined;
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
export type LinkButtonProps = typeof __propDef.props;
export type LinkButtonEvents = typeof __propDef.events;
export type LinkButtonSlots = typeof __propDef.slots;
export default class LinkButton extends SvelteComponent<LinkButtonProps, LinkButtonEvents, LinkButtonSlots> {
}
export {};
