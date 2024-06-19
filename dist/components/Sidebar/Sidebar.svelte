<script lang="ts">import { toggleSidebar } from "./isSidebarOpen.svelte.js";
import Hamburger from "../Hamburger/Hamburger.svelte";
let sidebarToggler = toggleSidebar();
</script>

<Hamburger position="top-left" bind:open={sidebarToggler.isSidebarOpen}></Hamburger>

<section class={sidebarToggler.isSidebarOpen ? "open" : ""}>

</section>

<style>
    section {
        background-color: var(--color-primary-06);
        block-size: 100dvh;
        position: relative;
        right: 100dvw;
        transition: right var(--entrance-expressive);
    }
    section.open{
        right: 0;
        transition: right var(--exit-expressive);
    }
</style>
