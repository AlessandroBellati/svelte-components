<script lang="ts">let { elementType = "section", maxWidth = "full", children } = $props();
const m = /* @__PURE__ */ new Map([
  ["640px", "xs"],
  ["768px", "sm"],
  ["1024px", "md"],
  ["1280px", "lg"],
  ["1536px", "xl"],
  ["full", "a"]
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
