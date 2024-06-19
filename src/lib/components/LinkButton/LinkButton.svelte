<script lang="ts">
    let {href = "#", target = "_self", children} = $props<{href?:string, target?:"_self"|"_blank"|"_parent"|"_top"}>();
</script>

<a {href} {target}>
    {#if children}
        {@render children()}
    {:else}
        LinkButton
    {/if}
</a>

<style>
    a{
        color: var(--color-neutral-00);
        background-color: var(--color-primary-06);
        text-decoration: none;

        padding: var(--spacing-06);
        border-radius: var(--spacing-04);

        transition: background-color var(--exit-expressive);
    }

    a:hover{
        background-color: var(--color-primary-07);

        transition: background-color var(--entrance-expressive);
    }

    a:active{
        background-color: var(--color-primary-06);
    }
</style>