<script lang="ts">
    import type { Snippet } from "svelte";
    
    let { children } = $props<{ children?: Snippet }>();
</script>

<section></section>

<style>
    section {
        background-color: var(--color-primary-06);
        block-size: 100dvh;
    }
</style>
