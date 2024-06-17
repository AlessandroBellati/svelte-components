<script>export let href = "#";
</script>

<a {href}>
    <slot>LinkButton</slot>
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