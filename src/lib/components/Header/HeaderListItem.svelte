<script lang="ts">
    let {href = "#", children} = $props<{href:string}>()
</script>

<li>
    <a {href}>
        {@render children()}
    </a>
</li>
