<script lang="ts">import { blur } from "svelte/transition";
import { quintOut } from "svelte/easing";
import { toggleHeader } from "./isHeaderOpen.svelte.js";
import Hamburger from "../Hamburger/Hamburger.svelte";
let { logo, links, action, hamburgerPosition } = $props();
let headerToggler = toggleHeader();
</script>

<Hamburger position={hamburgerPosition} bind:open={headerToggler.isHeaderOpen} />

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
        .mobile{
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