<script lang="ts">
    let { elementType = "section", maxWidth = "full", children} = $props<{
        elementType: "section" | "article" | "main" | "div";
        maxWidth: "640px" | "768px" | "1024px" | "1280px" | "1536px" | "full";
    }>();

    const m = new Map([
        ["640px", "xs"],
        ["768px", "sm"],
        ["1024px", "md"],
        ["1280px", "lg"],
        ["1536px", "xl"],
        ["full", "a"],
    ]);
</script>

<svelte:element this={elementType} class={m.get(maxWidth)}>
    {@render children()}
</svelte:element>

<style>
    * {
        margin: auto;
    }
    *.xs {
        max-width: 640px;
    }
    *.sm {
        max-width: 768px;
    }
    *.md {
        max-width: 1024px;
    }
    *.lg {
        max-width: 1280px;
    }
    *.xl {
        max-width: 1536px;
    }
</style>
