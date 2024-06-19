<script lang="ts" context="module">
    import type { Snippet } from "svelte";
</script>

<script lang="ts">
    import { slide, blur } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { toggleHeader } from "./isMenuOpen.svelte.js";

    let {logo, links, action} = $props<{logo: Snippet, links: Snippet, action: Snippet}>()
    let headerToggler = toggleHeader()
</script>

<button onclick={headerToggler.toggle}>
    <svg
        class="ham hamRotate ham8 {headerToggler.isHeaderOpen ? 'active' : ''}"
        viewBox="0 0 100 100"
        width="64"
    >
        <path
            class="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path class="line middle" d="m 30,50 h 40" />
        <path
            class="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
    </svg>
</button>

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

<style>
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

    /* hamburger */
    button {
        align-items: center;
        justify-content: center;
        margin: 0;
        overflow: hidden;
        background-color: transparent;
        border: none;

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
