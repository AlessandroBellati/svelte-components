import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        elementType?: "section" | "article" | "main" | "div" | undefined;
        maxWidth?: "640px" | "768px" | "1024px" | "1280px" | "1536px" | "full" | undefined;
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
export type ContainerProps = typeof __propDef.props;
export type ContainerEvents = typeof __propDef.events;
export type ContainerSlots = typeof __propDef.slots;
export default class Container extends SvelteComponent<ContainerProps, ContainerEvents, ContainerSlots> {
}
export {};
