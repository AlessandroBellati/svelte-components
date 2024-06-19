<script lang="ts">
    import type { Snippet } from "svelte";

    import { blur } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { toggleHeader } from "./isMenuOpen.svelte.js";

    import Hamburger from "$lib/components/Hamburger/Hamburger.svelte";

    let {logo, links, action} = $props<{logo: Snippet, links: Snippet, action: Snippet}>()
    
    let headerToggler = toggleHeader()
</script>

<Hamburger bind:open={headerToggler.isHeaderOpen} />

{#if headerToggler.isHeaderOpen}
<nav
    class="mobile"
    transition:blur={{ duration: 2000, easing: quintOut}}
>
    <ul>
        <li>
            {@render logo()}
        </li>
        <li>
            <ul>
                {@render links()}
            </ul>
        </li>
        <li>
            {@render action()}
        </li>
    </ul>
</nav>
{/if}

<nav
    class="desktop"
>
    <ul>
        <li>
            {@render logo()}
        </li>
        <li>
            <ul>
                {@render links()}
            </ul>
        </li>
        <li>
            {@render action()}
        </li>
    </ul>
</nav>

<style>
    .desktop{
        display: none;
    }
    @media (min-width: 768px){
        .desktop{
            display: block;
            max-width: var(--breakpoint-04);
            margin: auto;
        }
        .desktop>ul{
            display: flex;
            gap: var(--spacing-24);
            align-items: center;
            justify-content: space-between;
            padding-inline: var(--spacing-10);
        }
        .desktop>ul>li>ul{
            display: flex;
            gap: var(--spacing-08);
        }
        .mobile, button{
            display: none;
        }
    }

    .mobile{
        block-size: 100vh;
    }
    .mobile>ul{
        display: flex;
        flex-direction: column;
        gap: var(--spacing-24);
        align-items: end;
        padding-inline-end: var(--spacing-10);
    }
    .mobile>ul>li:first-child{
        align-self: flex-start;
        padding-block-start: var(--spacing-06);
        padding-inline-start: var(--spacing-06);
    }
    .mobile>ul>li>ul{
        display: flex;
        flex-direction: column;
        gap: var(--spacing-08);
    }        

    button {
        align-items: center;
        justify-content: center;
        margin: 0;
        overflow: hidden;
        background-color: transparent;
        border: none;
        z-index: 10;

        position: absolute;
        right: var(--spacing-00);
    }
    .ham {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: transform 400ms;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .hamRotate.active {
        transform: rotate(45deg);
        transition: all 1.2s cubic-bezier(0.86, 0, 0.07, 1);
    }

    .line {
        fill: none;
        stroke: var(--color-neutral-10);
        stroke-width: 2;
        transition: all 1.2s cubic-bezier(0.86, 0, 0.07, 1);
    }

    .ham8 .top {
        stroke-dasharray: 40 160;
    }
    .ham8 .middle {
        stroke-dasharray: 40 142;
        transform-origin: 50%;
        transition: all 1.2s cubic-bezier(0.86, 0, 0.07, 1);
    }
    .ham8 .bottom {
        stroke-dasharray: 40 85;
        transform-origin: 50%;
        transition: all 1.2s cubic-bezier(0.86, 0, 0.07, 1);
    }

    .ham8.active .top {
        stroke-dashoffset: -64px;
        transition: all 1.2s cubic-bezier(0.86, 0, 0.07, 1);
    }
    .ham8.active .middle {
        transform: rotate(90deg);
        transition: all 1.2s cubic-bezier(0.86, 0, 0.07, 1);
    }
    .ham8.active .bottom {
        stroke-dashoffset: -64px;
        transition: all 1.2s cubic-bezier(0.86, 0, 0.07, 1);
    }
</style>

<!--
@component
Used to create a header for your application. It includes a logo, navigation links, and an action button.
```
<Header>
    {#snippet logo()}
        <img src="/favicon.png" alt="" width="48px">
    {/snippet}
    {#snippet links()}
        <HeaderListItem href="#">Link 1</HeaderListItem>
        <HeaderListItem href="#">Link 2</HeaderListItem>
        <HeaderListItem href="#">Link 3</HeaderListItem>
    {/snippet}
    {#snippet action()}
        <LinkButton href="#">LinkButton</LinkButton>
    {/snippet}
</Header>
```
-->