<script lang="ts">
    import LinkButton from "../LinkButton/LinkButton.svelte";

    let isMenuOpen = false;
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<button on:click={toggleMenu}>
    <svg class="ham hamRotate ham8 {isMenuOpen ? "active" : ""}" viewBox="0 0 100 100" width="64">
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

<nav class:isMenuOpen>
    <ul>
        <li>
            <slot name="logo">
                <a href="/">
                    <img src="/favicon.png" alt="svelte icon" />
                </a>
            </slot>
        </li>
        <li>
            <ul>
                <slot name="links"></slot>
            </ul>
        </li>
        <li>
            <slot name="action">
                <LinkButton></LinkButton>
            </slot>
        </li>
    </ul>
</nav>

<!-- 
@component
```svelte
<Header>
    <svelte:fragment slot="logo">
        <a href="/">
            <img src="/favicon.png" alt="svelte icon" width="48px"/>
        </a>
    </svelte:fragment>

    <svelte:fragment slot="links">
        <HeaderListItem href="#">Link1</HeaderListItem>
        <HeaderListItem href="#">Link2</HeaderListItem>
        <HeaderListItem href="#">Link3</HeaderListItem>
    </svelte:fragment>
    
    <svelte:fragment slot="action">
        <LinkButton></LinkButton>
    </svelte:fragment>
</Header>
```
-->

<style>
    .isMenuOpen {
        display: block;
    }
    nav {
        margin: auto;
        max-inline-size: 1536px;
        padding-inline: var(--spacing-11);
    }
    nav > ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--spacing-05);
    }
    li > ul {
        display: flex;
        gap: var(--spacing-09);
        flex-wrap: wrap;
    }
    img {
        width: var(--spacing-16);
    }
    @media (max-width: 768px) {
        nav > ul {
            flex-direction: column;
            gap: var(--spacing-19);
            align-items: end;
            margin-block: 0;
            padding-block-start: var(--spacing-09);
        }
        li > ul {
            flex-direction: column;
            gap: var(--spacing-05);
        }
        nav > ul > li:first-child {
            align-self: flex-start;
        }
        nav > ul > li:last-child {
            padding-block-start: var(--spacing-16);
        }
        nav {
            height: 100vh;
            display: none;
        }
    }
    @media (min-width: 768px) {
        button{
            display: none;
        }
    }
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
