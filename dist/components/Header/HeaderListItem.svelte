<script lang="ts">let { href = "#", children } = $props();
</script>

<li>
    <a {href}>
        {@render children()}
    </a>
</li>
