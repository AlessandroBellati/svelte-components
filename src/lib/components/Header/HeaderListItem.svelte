<script lang="ts">
    import type { Snippet } from "svelte";
    let {href = "#", children} = $props<{href:string, children:Snippet}>()
</script>

<li>
    <a {href}>
        {@render children()}
    </a>
</li>
